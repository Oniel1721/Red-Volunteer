import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'
import LoginG from '../components/GoogleLogin'
import LoginFB from '../components/FacebookLogin'
import LoginSvg from '../components/LoginSvg'
import session from '../logic/sessions'
import '../styles/SignupLocal.css'

const handleLocalSignup =(e)=>{
    e.preventDefault()
    const $form = document.getElementById("signup")
    session.saveUserData("name", $form.username.value)
    session.saveUserData("email", $form.email.value)
    session.saveUserData("password", $form.password.value)
    session.saveUserData("method", 'local')
    session.signup()
}

const SignupLocal = () =>{
    // if(localStorage.getItem("userData")){
    //     return(
    //         <Redirect to="/solicitante"></Redirect>
    //     )
    // }

    // if(!session.getUserData().userType){
    //     return(
    //         <Redirect to="/tipoUsuario"></Redirect>
    //     )
    // }
    // else if(!session.getUserData().bloodType){
    //     return(
    //         <Redirect to="/Usuario_Sangre"></Redirect>
    //     )
    // }

    return(
        <div className='signupLocal'>

            <div className='svgLogin'>
                <LoginSvg />
            </div>

            <div className='rightLogin mini-container'>
            
            <h2>Registro</h2>

            <div className='fila'>
                <div>
                    <LoginG></LoginG>
                </div>
                <div>
                    <LoginFB></LoginFB>
                </div>
            </div>

            <div className='divider'>
                <hr/>
                <p>Registro local</p>
                <hr/>
            </div>
            <Link to="/Usuario_Sangre">Back</Link>

            <form id="signup" onSubmit={handleLocalSignup}>
                
                <div className='columna'>
                    <label>Nombre</label>
                    <input type="text" name="username" autoComplete="off" required/>
                </div>
                
                <div className='columna'>
                    <label>Email</label>
                    <input type="email" name="email" autoComplete="off" required/>
                </div>
                
                <div className='columna'>
                    <label>Contraseña</label>
                    <input type="password" name="password" autoComplete="off" required/>
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