import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import InicioSolicitante from './pages/InicioSolicitante';
import TipoUsuario from './pages/TipoUsuario';
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/solicitante' component={InicioSolicitante}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;