const express = require("express");
const swaggerUi = require("swagger-ui-express");
const yamlfile = require("./docs_yaml");
const path = require('path');

const app = express();

// load env variables and create .env.example file
const dotenv = require("dotenv");
dotenv.config({path:path.join(__dirname,'.env')});

// middleware
app.use('/docs', swaggerUi.serve, swaggerUi.setup(yamlfile));

// listening on environment port if defined or 8080
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`this API is listening on port: ${port}`);
});