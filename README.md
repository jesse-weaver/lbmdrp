# lbmdrop
LBMDROP - follow artists and keep up to date

Based on the nodeJS express framework and react.

You can run the application using the default Docker container for node based on the root Dockerfile in the project. For more info on using docker containers go <a href="http://docs.docker.com/engine/userguide/usingdocker/">here</a>.

To build the docker image:
docker build -t lbmdrp .

To run the project in docker:
docker run -it -p 3030:3030 --rm --name lbmdrp lbmdrp

To access your host:
http://localhost:3030 or http://127.0.0.1:3030


If you want to run the project locally not using a docker container do the following:

* npm install
* npm run build
* npm run start

To develop and pick up changes you'll need to run the following 3 commands in different terminal sessions:

* npm run babel:watch
* npm run webpack:watch
* npm run start:watch
