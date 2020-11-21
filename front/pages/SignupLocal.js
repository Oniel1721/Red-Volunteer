import React from 'react'
import {Link} from 'react-router-dom'
import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'
import LoginSvg from '../components/LoginSvg'
import session from '../logic/sessions'
import '../styles/SignupLocal.css'

const SignupLocal = () =>{
    session.checkSession("/solicitante", "")

    const handleLocalSignup =(e)=>{
        e.preventDefault()
        session.signup()
    }

    return(
        <div className='signupLocal'>

            <div className='svgLogin'>
                <LoginSvg />
            </div>

            <div className='rightLogin mini-container'>
            
            <h2>Registro</h2>

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
                <p>Registro local</p>
                <hr/>
            </div>

            <form id="signup" onSubmit={handleLocalSignup}>
                
                <div className='columna'>
                    <label>Nombre</label>
                    <input type="text" name="name" id="s-name" autocomplete="off" required/>
                </div>
                
                <div className='columna'>
                    <label>Apellido</label>
                    <input type="text" name="last" id="s-last" autocomplete="off" required/>
                </div>

                <div className='columna'>
                    <label>Tipo de sangre</label>
                    <select id="s-blood" form="signup" required>
                            <option value="0" selected disabled hidden></option>
                            <option value="1">A+</option>
                            <option value="2">B+</option>
                            <option value="3">AB+</option>
                            <option value="4">A-</option>
                            <option value="5">B-</option>
                            <option value="6">AB-</option>
                            <option value="5">O+</option>
                            <option value="6">O-</option>
                        </select>
                </div>
                
                <div className='columna'>
                    <label>Usuario</label>
                    <select id="s-user" form="signup" required>
                        <option value="0" selected disabled hidden></option>
                        <option value="1">Donador</option>
                        <option value="2">Solicitante</option>
                    </select>
                </div>
                
                <div className='columna'>
                    <label>Email</label>
                    <input type="email" name="email" id="s-email" autocomplete="off" required/>
                </div>
                
                <div className='columna'>
                    <label>Contraseña</label>
                    <input type="password" name="password" id="s-password" autocomplete="off" required/>
                </div>
                
                <button type="submit" >Registrarse</button>
            </form>

            <p className='last-info'>¿Ya tienes una cuenta?</p>
            <Link to="/login">Iniciar sesión</Link>

            </div>
        </div>
    )
}

export default SignupLocal