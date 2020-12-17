import React from 'react'
import CardDonadores from './CardDonadores'

const DonadoresMatch = () => {
    return (
        <div className='donadores-match hide'>
            <div className='content-donadores-match'>
                <div className='peticiones-opciones'>

                    <h5>Lista de donantes</h5>

                    <form id='ordenarDonadores'>
                        <select id="bloodType" form="ordenarDonadores">                         
                            <option value="0" defaultValue disabled hidden>Ordenar por</option>
                            <option value="1">Fecha</option>
                            <option value="2">Recientes</option>
                            <option value="3">Antiguas</option>
                     </select>
                    </form>

                </div>

                <CardDonadores />
            </div>
        </div>
    )
}

export default DonadoresMatch
