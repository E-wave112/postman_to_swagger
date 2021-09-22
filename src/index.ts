const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express')
const yamlSwaggerFile = require('./docs_yaml')

//express app
const app = express()

app.use('/api/docs',swaggerUi.serve,swaggerUi.setup(yamlSwaggerFile))

const port:string|number = process.env.PORT || 5000

app.listen(port, () =>console.log(`api is listening on port ${port}`))