package com.wdda

import com.wdda.database.Database
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.wdda.plugins.*
import io.ktor.server.locations.*

@KtorExperimentalLocationsAPI
fun main() {
    embeddedServer(Netty, port = 8080, host = "0.0.0.0") {
        configureRouting()
        // configureSecurity()
        configureHTTP()
        configureSerialization()
        val database = Database()
    }.start(wait = true)
}
