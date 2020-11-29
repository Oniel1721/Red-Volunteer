import React from 'react'
import '../styles/TipoUsuario.css';

const TipoSangre = () => {

    return (
        <div className='tipo'>

            <div className='progress-bar2'>
                <hr></hr>
            </div>

            <div className='content-tipo'>

                <h2>Selecciona su tipo de sangre:</h2>

                <form id='tipoSangre'>

                    <div className='wrap'>

                        <div className='select-circle'>
                            <input type="radio" id="A" name="tipoSangre" required/>
                            <label for="A">A</label>
                        </div>
                    
                        <div className='select-circle'>
                            <input type="radio" id="B" name="tipoSangre" required/>
                            <label for="B">B</label>
                        </div>

                        <div className='select-circle'>
                            <input type="radio" id="O" name="tipoSangre" required/>
                            <label for="O">O</label>
                        </div>

                        <div className='select-circle'>
                            <input type="radio" id="AB" name="tipoSangre" required/>
                            <label for="AB">AB</label>
                        </div>

                    </div>

                    <hr />

                    <div className='wrap'>

                        <div className='select-circle'>
                            <input type="radio" id="+" name="tipoCompatibilidad" required/>
                            <label for="+">+</label>
                        </div>
                    
                        <div className='select-circle'>
                            <input type="radio" id="-" name="tipoCompatibilidad" required/>
                            <label for="-">-</label>
                        </div>  

                    </div>

                    <input className='btn-next' type="submit" value="Continuar"></input>
                   
                </form>

            </div>
        </div>
    )
}

export default TipoSangre
