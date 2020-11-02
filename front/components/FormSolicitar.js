import React from 'react'

const FormSolicitar = () => {
    return (
        <div className='form-solicitar hide'>
            <div className='content-form-solicitar container'>
                <form id='formSolicitar'>
                    <div className='line-input'>
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" autocomplete="off" required/>
                    </div>
                    <div className='line-input'>
                        <label for="fname">Tipo de sangre:</label>
                        <select id="bloodType" form="formSolicitar" required>
                            <option value="0" selected disabled hidden></option>
                            <option value="1">no</option>
                            <option value="2">sé</option>
                            <option value="3">cuántos</option>
                            <option value="4">tipos</option>
                            <option value="5">hay</option>
                            <option value="6">xd</option>
                        </select>
                    </div>
                    <div className='line-input'>
                        <label for="fname">Fecha limite:</label>
                        <input type="date" id="dateLimit" required/>
                    </div>
                    <div className='line-input'>
                        <label for="name">Descripcion:</label>
                        <input className='longer' type="text" id="name" />
                    </div>
                    <button type="submit" form="formSolicitar" value="Submit">Solicitar</button>
                </form>
            </div>
        </div>
    )
}

export default FormSolicitar
