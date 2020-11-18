## Before start to code read this.

### If is your first time follow this steps:

#### 1) Exec in terminal the code below:

`npm i @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader file-loader html-webpack-plugin nodemon style-loader webpack webpack-cli webpack-dev-server core-js express morgan react react-dom react-router-dom findup-sync`

#### 2) Now copy or cut the folder called 'webpack-cli' and paste in the folder called 'node_modules'.

#### 3) With that you can start to develop

### If you install a new module please write it here:

#### By example `npm i module-example-name`

`npm i react-facebook-login`
`npm i cors`
`npm i express-formidable`

## Available Script

### `npm start`

npm start: is a tools for detect any change in the frontend code and compile it
from react to html and js.
npm start open a server in localhost:3000/ where you can see your app compiled.

### `npm run build`

npm run build: compile code from react to html and js.
put the new code in the folder called 'dist'.
if you are working in frontend make sure to execute this script when you finish.

### `npm run server`

npm run server: start to run the server by default in port 7000,
if you edit some code it will update like npm start but this work in back-end, 
server all time read dist/index.html, so if you make changes in the frontend
make sure you updated with npm run build.

## What if im working in font-end and back-end at the same time?

### 1) Open 2 terminals

### 2) In one of them execute npm start, and in the other execute npm run server

### 3) With that the server have to be running in port 7000, and if you make some changes in both it will update

### Note*) By default front-end it will be on port 3000 and back-end on port 7000
