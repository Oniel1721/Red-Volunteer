import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import InicioSolicitante from './pages/InicioSolicitante';
import TipoUsuario from './pages/TipoUsuario';
import LoginLocal from './pages/LoginLocal'
import SignupLocal from './pages/SignupLocal'
import './styles/app.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/solicitante' component={InicioSolicitante}/>
        <Route exact path='/user' component={TipoUsuario}/>
        <Route exact path='/login-local' component={LoginLocal}/>
        <Route exact path='/signup-local' component={SignupLocal}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;