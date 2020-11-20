import React from 'react'
import {Link} from 'react-router-dom'
import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'
import LoginSvg from '../components/LoginSvg'
import session,{handleLocalLogin} from '../logic/sessions'
import '../styles/SignupLocal.css'

const LoginLocal = function(){
    // session.checkSession("/", "")
    return(
        <div className='signupLocal'>

            <div className='svgLogin'>
                <LoginSvg />
            </div>
            
            <div className='rightLogin mini-container'>

            <h2>Iniciar Sesión</h2>

            <div className='fila'>
                <div className='extra-btn red'>
                    <img src={googleIcon} alt='google' />
                    <p>Google</p>
                </div>
                <div className='extra-btn blue'>
                    <img src={facebookIcon} alt='facebook' />
                    <p>Facebook</p>
                </div>
            </div>

            <div className='divider'>
                <hr/>
                <p>Inicio local</p>
                <hr/>
            </div>

            <form id="login" action="http://localhost:7000/api/login" method="POST" onSubmit={handleLocalLogin}>

                <div className='columna'>
                    <label>Email</label>
                    <input type="email" name="email" id="l-email" required />
                </div>

                <div className='columna'>
                    <label>Contraseña</label>
                    <input type="password" name="password" id="l-password" required />
                </div>

                <button type="submit">Iniciar</button>
            </form>

            <p className='last-info'>¿Aún no tienes cuenta?</p>
            <Link to="/signup-local">Crear cuenta</Link>
            </div>
        </div>
    )
}

export default LoginLocal

