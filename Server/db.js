const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "PostgresPassword",
    host: "localhost",
    port: 5432,
    database: "astronomy"
})

module.exports = pool;

