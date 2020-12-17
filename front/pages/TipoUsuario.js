import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../styles/TipoUsuario.css';
import session from '../logic/sessions'

const handleSubmit = (e)=>{
    e.preventDefault()
    let userType = document.querySelector('input[name="tipoUsuario"]:checked').id
    session.saveUserData('userType', userType)
    window.location.assign('/tipoSangre')
}


const TipoUsuario = () => {
    if(localStorage.getItem("userID")){
        return(
            <Redirect to="/solicitante"></Redirect>
        )
    }

    return (
        <div className='tipo'>
            <Link to="/">Back</Link>
            <div className='progress-bar'>
                <hr></hr>
            </div>

            <div className='content-tipo'>

                <h2>Selecciona su tipo de usuario:</h2>

                <form id='tipoUsuario' onSubmit={handleSubmit} >

                    <div className='select-btn'>
                        <label htmlFor="solicitante">Solicitante</label>
                        <input type="radio" id="solicitante" name="tipoUsuario" required/>
                    </div>
                   
                    <div className='select-btn'>
                        <label htmlFor="donante">Donante</label>
                        <input type="radio" id="donante" name="tipoUsuario" required/>
                    </div>

                    <input className='btn-next' type="submit" value="Continuar"></input>
                   
                </form>


            </div>
        </div>
    )
}

export default TipoUsuario
