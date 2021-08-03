const transformer = require('api-spec-transformer');
const Yaml = require('yamljs');
const fs = require('fs').promises;

// (async function createYAMLFile() {
//   const autoToSwagger = new transformer.Converter(transformer.Formats.AUTO, transformer.Formats.SWAGGER);

//  await autoToSwagger.loadFile("./local_docs/postman_coll.json", function(err) {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
  
//     autoToSwagger.convert('yaml')
//       .then(async function(convertedData) {
//         await fs.writeFile("./local_docs/postman.yaml", convertedData, function(err) {
//           if(err) {
//               return console.error(err.message);
//           }     
//         }); 
//         console.log("The Yaml file was saved!");
  
//       })
//       .catch(function(err){
//         console.error(err.message);
//       });
//   });
  
// })();

const yamlfile = Yaml.load('./local_docs/postman.yaml');
console.log(yamlfile)

module.exports = yamlfile