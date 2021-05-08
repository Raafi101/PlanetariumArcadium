const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "PostgresPassword",
    host: "localhost",
    port: 5432,
    database: "astronomy"
})

let host = 'Sun';

client.connect()
.then(() => console.log('connected successfully'))
.then(() => client.query("select * from planets where host_name = " + host))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())