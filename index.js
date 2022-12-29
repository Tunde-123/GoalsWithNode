const express = require('express');
const swaggerUI = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerjsDoc = YAML.load("./api.yaml")

const { parseArgs } = require('util');
const color = require('colors')
const connectDb = require('./backend/database/db');
const app = express();
const dotenv = require('dotenv').config();
const port = process.env.PORT || 5000 ;


app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerjsDoc) )
app.use('/api/goal', require('./backend/Routes/GoalsRoutes'))
connectDb()



app.listen(port, () => { console.log(`Server running on port ${port}`)})