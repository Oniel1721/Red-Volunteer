## Before start to code read this.

### If is your first time follow this steps:

#### 1) Exec in terminal the code below:

npm i @babel/core @babel/preset-env @babel/preset-react babel-loader clean-webpack-plugin css-loader file-loader html-webpack-plugin nodemon style-loader webpack webpack-cli webpack-dev-server -D

#### 2) When it finish exec next code in terminal too:

npm i core-js express morgan react react-dom react-router-dom

#### 3) Now you can start to code.

### If you install a new module please write it here:

## Available Script

### `npm run build`

npm run build: compile code from react to html and js, for the server to work with them.
put the new code in the folder called 'dist'.
if you are working in frontend make sure to execute this script when you finish

### `npm start`

npm start: is like npm run build, but when you edit some code, npm start update automatically,
if you are working in frontend, exec this code, open dist/index.html, and start to code,
if you do some change to the code just reload the page in the browser to see the changes

### `npm run server`

npm run server: start to run the server by default in port 7000,
if you edit some code it will update like npm start but this work in back-end, 
server all time read dist/index.html, so if you make changes in the frontend
make sure you updated with npm run build.



## What if im working in font-end and back-end at the same time?

### 1) Open 2 terminals

### 2) In one of them execute npm start, and in the other execute npm run server

### 3) With that the server have to be running in port 7000, and if you make some changes in both it will update
