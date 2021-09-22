const Yaml = require('yamljs');

const yamlfile = Yaml.load('./local_docs/postman.yaml');
console.log(yamlfile)

module.exports = yamlfile;