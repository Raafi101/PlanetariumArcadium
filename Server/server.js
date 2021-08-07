const express = require('express');
const cors = require('cors');
const app = express();
const Pool = require('pg').Pool;

//Middleware
app.use(cors());

//Connection
const pool = new Pool({
    user: "postgres",
    password: "PostgressPassword",
    host: "database-1.cnv6v0f9xbl3.us-east-2.rds.amazonaws.com",
    port: 5432,
    database: "postgres"
})

//Routes
app.get('/', async (req, res) => {
    res.send("/. Now do the thing")
})

app.get('/bodies', async (req, res) => {
    res.send("/bodies")
    
    //Get Query
    const {name} = req.query;

    //Query
    const bodies = await pool.query("select * from planets where host_name || ' ' || planet_letter ILIKE $1", [`%${name}%`]);

    //Set Header
    res.setHeader("content-type", "application/json")

    //Response
    res.send(JSON.stringify(bodies.rows));
    console.log(bodies.rows);
})

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`Server is starting on port ${port}`)
})