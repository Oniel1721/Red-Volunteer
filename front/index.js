import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


document.addEventListener("submit", e=>{
  if(e.target === document.getElementById("signup")){
    e.preventDefault()
    const d = document,
      $form = d.getElementById("signup"),
      data = new FormData($form),
      url = 'http://localhost:7000/api/signup'

    fetch(url, {
      method: "POST",
      body: data
    })   
    .then(function(response) {
      if(response.ok) {
          return response.text()
      } else {
          throw "Error en la llamada Ajax";
      }
    })
    .then(function(text) {
      let json = JSON.parse(text)
      console.log("mas texto",json);
    })
    .catch(function(err) {
      console.log(err);
    });
  }
})