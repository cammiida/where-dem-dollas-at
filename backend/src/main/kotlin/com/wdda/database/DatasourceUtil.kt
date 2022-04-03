package com.wdda.database

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import mu.KotlinLogging

private val logger = KotlinLogging.logger { }

fun createDatasource(): HikariDataSource {
    val config = HikariConfig().apply {
        jdbcUrl = "jdbc:postgresql://localhost:5432/wdda" // jdbc:postgresql://host:port/database
        maximumPoolSize = 3
        minimumIdle = 1
        idleTimeout = 10001
        connectionTimeout = 10000
        maxLifetime = 30001
        isAutoCommit = false
        transactionIsolation = "TRANSACTION_REPEATABLE_READ"
        username = "postgres"
        password = "postgres"
        validate()
    }

    logger.info { "Create datasource with config: $config" }
    return HikariDataSource(config)
}
