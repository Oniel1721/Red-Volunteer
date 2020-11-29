import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../styles/TipoUsuario.css';
import session from '../logic/sessions'

const TipoUsuario = () => {
    session.checkSession("","/")

    return (
        <div className='tipo'>

            <div className='progress-bar'>
                <hr></hr>
            </div>

            <div className='content-tipo'>

                <h2>Selecciona su tipo de usuario:</h2>

                <form id='tipoUsuario'>

                    <div className='select-btn'>
                        <label for="solicitante">Solicitante</label>
                        <input type="radio" id="solicitante" name="tipoUsuario" required/>
                    </div>
                   
                    <div className='select-btn'>
                        <label for="donante">Donante</label>
                        <input type="radio" id="donante" name="tipoUsuario" required/>
                    </div>

                    <input className='btn-next' type="submit" value="Continuar"></input>
                   
                </form>


            </div>
        </div>
    )
}

export default TipoUsuario
