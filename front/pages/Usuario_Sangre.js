import React,{useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import '../styles/TipoUsuario.css';
import session from '../logic/sessions'

const handleSubmit = (e)=>{
    e.preventDefault()
    let userType = document.querySelector('input[name="tipoUsuario"]:checked').id
    session.saveUserData('userType', userType)
    document.getElementById('wrap-blood').classList.remove('hide')
    document.getElementById('wrap-type').classList.add('hide')
    document.querySelector('.progress-bar').classList.add('v2')
}


const Usuario_Sangre = () => {
    if(localStorage.getItem("userID")){
        return(
            <Redirect to="/solicitante"></Redirect>
        )
    }

    return (
        <div className='tipo'>
            
            <div className='progress-bar'>
                <hr></hr>
            </div>

            <div id='wrap-type' className='content-tipo'>

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

            <div id='wrap-blood' className='content-tipo 2 hide'>

                <h2>Selecciona su tipo de sangre:</h2>

                <form id='tipoSangre' onSubmit={
                    handleSubmit
                    } >

                    <div className='wrap'>

                        <div className='select-circle'>
                            <input type="radio" id="A" name="tipoSangre" required/>
                            <label htmlFor="A">A</label>
                        </div>
                    
                        <div className='select-circle'>
                            <input type="radio" id="B" name="tipoSangre" required/>
                            <label htmlFor="B">B</label>
                        </div>

                        <div className='select-circle'>
                            <input type="radio" id="O" name="tipoSangre" required/>
                            <label htmlFor="O">O</label>
                        </div>

                        <div className='select-circle'>
                            <input type="radio" id="AB" name="tipoSangre" required/>
                            <label htmlFor="AB">AB</label>
                        </div>

                    </div>

                    <hr />

                    <div className='wrap'>

                        <div className='select-circle'>
                            <input type="radio" id="+" name="tipoCompatibilidad" required/>
                            <label htmlFor="+">+</label>
                        </div>
                    
                        <div className='select-circle'>
                            <input type="radio" id="-" name="tipoCompatibilidad" required/>
                            <label htmlFor="-">-</label>
                        </div>  

                    </div>
                    <input className='btn-next' type="submit" value="Continuar"></input>
                </form>
            </div>
        </div>
    )
}

export default Usuario_Sangre
