import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import googleIcon from '../images/googleIcon.png'
import facebookIcon from '../images/facebookIcon.png'
import LoginG from '../components/GoogleLogin'
import LoginFB from '../components/FacebookLogin'
import LoginSvg from '../components/LoginSvg'
import session, {setData} from '../logic/sessions'
import '../styles/SignupLocal.css'

const SignupLocal = () =>{
    const [redir, setRedir] = useState('')
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
    
    const handleSignup =(e)=>{
        e.preventDefault()
        const url = 'http://localhost:7000/api/signup'
        const $form = document.getElementById("signup")
        const data = new FormData($form)
        data.set('blood', 1)
        data.set('user', 1)
        fetch(url, {
            method: "POST",
            body: data
        })   
        .then((response) =>{
            if(response.ok) {
                return response.json()
            } else {
                throw "Error in fetch";
            }
        })
        .then((json)=> {
            console.log("server answer",json);
            if(json.OK){
                setData('session', {
                    isLoged: true,
                    userId: json.userId
                })
                setRedir('/solicitante')
            }
        })
        .catch((err) =>{
            console.log(err);
        });
    }

    const renderRedir = ()=>{
        if(!redir) return ''
        return(
            <Redirect to={redir}/>
        )   
    }
    
    return(
        <div className='signupLocal'>
            {
                renderRedir()
            }
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

            <form id="signup" onSubmit={handleSignup}>
                
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