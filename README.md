[![GitHub license](https://img.shields.io/github/license/E-wave112/postman_to_swagger)](https://github.com/E-wave112/postman_to_swagger/blob/main/LICENSE)

# postman_to_swagger
A simple script like application to convert a postman collection to a swagger ui based documentation using typescript.

For this script to work convert your postman collection to an open api specification via [Apitransform](https://apitransform.com/) and load it locally.

In the root of the project run the following command

```
recommended
$ yarn
```

or
```
$ npm install
```

to install package dependencies

```
$ node docs.js
```

* This converts the open api specification json file to a Yaml file

Then you can then finally start the server with the command

```
$ npm run dev

```
or

```
$ yarn dev

```

The server will be running on [localhost:5000](http://localhost:5000)

Be sure the replace the specified files and file paths with yours