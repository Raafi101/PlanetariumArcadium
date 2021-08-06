const {Client} = require('pg')

const client = new Client({
    user: "postgres",
    password: "PostgressPassword",
    host: "database-1.cnv6v0f9xbl3.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})

let host = 'Sun';

client.connect()
.then(() => console.log('connected successfully'))
.then(() => client.query("select * from planets where host_name = " + host))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => client.end())