const express = require('express');
const { parseArgs } = require('util');
const color = require('colors')
const connectDb = require('./backend/database/db');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/goal', require('./backend/Routes/GoalsRoutes'))
connectDb()



app.listen(port, () => { console.log(`Server running on port ${port}`)})