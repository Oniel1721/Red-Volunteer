import React from 'react'

const ScreenPeticiones = () => {
    return (
        <div className='screen-peticiones'>
            <div className='content-screen-peticiones'>
                <div className='peticiones-opciones'>

                    <h5>Actividades</h5>

                    <form id='ordenarPeticiones'>
                        <select id="bloodType" form="ordenarPeticiones">                         
                            <option value="0" defaultValue disabled hidden>Ordenar por</option>
                            <option value="1">Fecha</option>
                            <option value="2">Recientes</option>
                            <option value="3">Antiguas</option>
                        </select>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ScreenPeticiones
