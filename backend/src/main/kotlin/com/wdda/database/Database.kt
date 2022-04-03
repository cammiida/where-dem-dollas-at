package com.wdda.database

import com.zaxxer.hikari.HikariDataSource
import com.zaxxer.hikari.pool.HikariPool
import java.net.ConnectException
import java.net.SocketException
import java.sql.Connection
import mu.KotlinLogging
import org.flywaydb.core.Flyway
import org.flywaydb.core.api.FlywayException
import org.flywaydb.core.api.configuration.ClassicConfiguration

private val logger = KotlinLogging.logger { }

enum class Status {
    NOT_SENT, OK, RETRY, ERROR, INVALID_RECIPIENT
}

class Database(retries: Long = 30, sleepTime: Long = 1_000) : DatabaseInterface {
    private val dataSource: HikariDataSource
    override val connection: Connection
        get() = dataSource.connection

    init {
        var current = 0
        var connected = false
        var migrationDatasource: HikariDataSource? = null
        while (!connected && current++ < retries) {
            logger.info("trying to connect to db current try $current")
            try {
                migrationDatasource = createDatasource()
                connected = true
            } catch (ex: HikariPool.PoolInitializationException) {
                if (ex.cause?.cause is ConnectException || ex.cause?.cause is SocketException) {
                    logger.info("Could not connect to db")
                    Thread.sleep(sleepTime)
                } else {
                    throw ex
                }
            }
        }
        if (migrationDatasource == null) {
            logger.error("Could not connect to DB")
            throw RuntimeException("Could not connect to DB")
        }
        dataSource = migrationDatasource
        runFlywayMigrations(dataSource)
    }

    private fun runFlywayMigrations(dataSource: HikariDataSource) {
        val conf = ClassicConfiguration()

        conf.dataSource = dataSource
        conf.isBaselineOnMigrate = true
        val flyway = Flyway(conf)
        try {
            flyway.migrate()
            logger.info { "Migration done" }
        } catch (e: FlywayException) {
            throw IllegalStateException("Migrering feiler", e)
        }
    }
}
