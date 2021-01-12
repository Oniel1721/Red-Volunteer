import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import IconInicio from '../images/IconHome.png'
import IconPeople from '../images/IconPeople.png'
import iconChat from '../images/IconChat.png'
import IconAjustes from '../images/IconSettingsOn.png'
import ajustesCuenta from '../images/ajustesCuenta.png'
import ajustesNotificaciones from '../images/ajustesNotificaciones.png'
import ajustesExtra from '../images/ajustesExtra.png'
import arrowGo from '../images/arrowGo.png'
import CloseSession from '../components/CloseSession'
import '../styles/solicitante.css'

const Ajustes = () => {
    // if(!localStorage.getItem("userID")){
    //     return(
    //         <Redirect to="/signup"></Redirect>
    //     )
    // }
    return (
        <div className='ajustes'>
            <div className='content-ajustes'>

                <h2>Ajustes</h2>

                <div className='pack'>
                    <div className='pack-top'>
                        <img src={ajustesCuenta} alt='cuenta' />
                        <h4>Cuenta</h4>
                    </div>
                    <hr></hr>
                    <div className='ajustes-opcion'>
                        <p>Editar perfil</p>
                        <img src={arrowGo} alt='go' />
                    </div>
                    <div className='ajustes-opcion'>
                        <p>Cambiar contraseña</p>
                        <img src={arrowGo} alt='go' />
                    </div>
                    <div className='ajustes-opcion'>
                        <p>Facebook</p>
                        <img src={arrowGo} alt='go' />
                    </div>
                </div>

                <div className='pack'>
                    <div className='pack-top'>
                        <img src={ajustesNotificaciones} alt='cuenta' />
                        <h4>Notificaciones</h4>
                    </div>
                    <hr></hr>
                    <div className='ajustes-opcion'>
                        <p>Donador disponible</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round" />
                        </label>
                    </div>
                    <div className='ajustes-opcion'>
                        <p>Mensajes nuevos</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <span className="slider round" />
                        </label>
                    </div>
                </div>

                <div className='pack'>
                    <div className='pack-top'>
                        <img src={ajustesExtra} alt='cuenta' />
                        <h4>Extra</h4>
                    </div>
                    <hr></hr>
                    <div className='ajustes-opcion'>
                        <p>Idioma</p>
                        <img src={arrowGo} alt='go' />
                    </div>
                    <div className='ajustes-opcion'>
                        <p>Región</p>
                        <img src={arrowGo} alt='go' />
                    </div>
                </div>

                <CloseSession></CloseSession>

                <div className='menu'>
                    <div className='content-menu container'>
                        <Link to='/solicitante'>
                        <img src={IconInicio} alt='icon'/>
                        </Link>
                        <img src={IconPeople} alt='icon'/>
                        <Link to='/solicitante/chatList'>
                        <img src={iconChat} alt='icon'/>
                        </Link>
                        <Link to='/solicitante/settings'>
                        <img src={IconAjustes} alt='icon'/>
                        </Link>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Ajustes
