"use strict";
const fs = require('fs').promises;
const YAML = require('json-to-pretty-yaml');
// const json = require('./docs/skroutz_api.json');
const json = require('../local_docs/postman_coll.json');
const data = YAML.stringify(json);
fs.writeFile('../local_docs/postman.yaml', data, function (err) {
    if (err) {
        console.log(err);
    }
    return;
});
