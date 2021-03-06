[![GitHub license](https://img.shields.io/github/license/E-wave112/postman_to_swagger)](https://github.com/E-wave112/postman_to_swagger/blob/main/LICENSE)

# postman_to_swagger
A simple script to convert a postman collection to a swagger-based documentation using Node.js(typescript)

For this script to work, convert your postman collection to an open api specification via [Apitransform](https://apitransform.com/) and load it locally.

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

### Build the initial docker image
```
docker-compose up --build
```
### Running the Dev Docker container

To run the application, use the following command:

```
$ docker-compose up
```

The server will be running on [localhost:5000](http://localhost:5000)

Find my Docker image on the cloud [here](https://hub.docker.com/repository/docker/ewave112/postman-to-swagger)

A useful resource on how to push your docker image to [DockerHub](https://hub.docker.com)  can be found [here](https://ropenscilabs.github.io/r-docker-tutorial/04-Dockerhub.html)


NB:Make sure to replace the specified files and file paths with yours.
