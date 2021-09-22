const fs = require('fs').promises;
const YAML = require('json-to-pretty-yaml');
// const json = require('./docs/skroutz_api.json');
const json = require('../local_docs/postman_coll.json');

const data:string = YAML.stringify(json);
fs.writeFile('../local_docs/postman.yaml', data,function(err:string):undefined {
              if(err) {
                  console.log(err);
              }
              return;
            });