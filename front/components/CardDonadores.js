import React from 'react'
import ariana from '../images/ariana.png'
import reject from '../images/IconReject.png'
import accept from '../images/IconAccept.png'

const CardDonadores = () => {

    const handleReject = (e)=>{
        e.target.parentElement.parentElement.parentElement.classList.add('rejectAni')
    }

    return (
        <div className='card-donadores'>
            <img src={ariana} alt='person'/>
            <div className='info-donadores'>
                <h4>Nombre Apellido</h4>
                <p>Quiere donarte: <span>A+</span></p>
                <div className='decision'>
                    <img onClick={handleReject} src={reject} alt='rechazar'/>
                    <img src={accept} alt='aceptar'/>
                </div>
            </div>
        </div>
    )
}

export default CardDonadores
