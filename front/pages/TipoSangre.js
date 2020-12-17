import React from 'react'
import ReactDOM from 'react-dom'
import {Link ,Redirect} from 'react-router-dom'
import session from '../logic/sessions'
import '../styles/TipoUsuario.css';

const handleSubmit = (e)=>{
    e.preventDefault()
    let bloodType = `${document.querySelector('input[name="tipoSangre"]:checked').id}${document.querySelector('input[name="tipoCompatibilidad"]:checked').id}`
    session.saveUserData('bloodType', bloodType)
    window.location.assign('/signup')
}

const TipoSangre = () => {
    if(localStorage.getItem("userID")){
        return(
            <Redirect to="/solicitante"></Redirect>
        )
    }

    if(!session.getUserData().userType){
        return(
            <Redirect to="/tipoUsuario"></Redirect>
        )
    }


        return (
            <div className='tipo'>
            <div className='progress-bar2'>
                <hr></hr>
            </div>

            <Link to="/tipoUsuario">Back</Link>

            <div className='content-tipo'>

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

export default TipoSangre
