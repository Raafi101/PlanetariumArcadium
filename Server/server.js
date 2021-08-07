const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db');

//Middleware
app.use(cors());

//Routes
app.get('/bodies', async (req, res) => {
    try {
        const {name} = req.query;

        //HostName PlanetName


        const bodies = await pool.query("select * from planets where host_name || ' ' || planet_letter ILIKE $1", [`%${name}%`]);

        res.json(bodies.rows);
    } catch (error) {
        console.log(error.message);
    }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is starting on port ${port}`)
})