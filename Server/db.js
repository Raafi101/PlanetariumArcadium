const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    password: "PostgressPassword",
    host: "http://database-1.cnv6v0f9xbl3.us-east-2.rds.amazonaws.com/",
    port: 5432,
    database: "AWS"
})

module.exports = pool;

