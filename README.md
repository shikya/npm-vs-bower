# npm-vs-bower
Migrating bower to npm

In this repository Web Application is present in 'app/'
For progressive development we can use 'node http-server' i.e 'npm start'

Npm will manage front-end as well as devloper dependacies

#Installation

npm install

#Run

npm start

#nginx run

Nginx can directly point to root as all dependancy are inside 'node_modules' directory.

So to correct way is to use minified version, create and serve from 'dist' directory.
The only concern with this stucture is that we are exposing node_modules to client side while serving