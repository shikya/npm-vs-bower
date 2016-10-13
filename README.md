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

Nginx cannot directly point to 'app' as all dependancy are inside 'node_modules' directory.
If we use the npm-vs-bower directory for nginx then url would start as **http://www.example.com/app/#/view1**

So to correct way is to use minified version, create and serve from 'dist' directory.
**While we have add a task in gulp to copy all of the script files from node_modules which are not having cdn link.**

# minifiy

run gulp to create /dist 