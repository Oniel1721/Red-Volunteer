import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Ajustes from './pages/Ajustes';
import Chat from './pages/Chat';
import ChatList from './pages/ChatList';
import Home from './pages/Home'
import InicioSolicitante from './pages/InicioSolicitante';
import LoginLocal from './pages/LoginLocal'
import SignupLocal from './pages/SignupLocal'
import TipoSangre from './pages/TipoSangre';
import TipoUsuario from './pages/TipoUsuario'


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/solicitante' component={InicioSolicitante}/>
        <Route exact path='/solicitante/chatList' component={ChatList}/>
        <Route exact path='/solicitante/chatUser' component={Chat}/>
        <Route exact path='/solicitante/settings' component={Ajustes}/>
        <Route exact path='/login' component={LoginLocal}/>
        <Route exact path='/signup' component={SignupLocal}/>
        <Route exact path='/tipoUsuario' component={TipoUsuario}/>
        <Route exact path='/tipoSangre' component={TipoSangre}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;