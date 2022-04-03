package com.wdda.database

import java.sql.Connection

interface DatabaseInterface {
    val connection: Connection
}
