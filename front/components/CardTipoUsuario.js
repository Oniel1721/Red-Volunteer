import React from 'react'

const CardTipoUsuario = ({tipo,img}) => {
    return (
        <div className='card-tipo-usuario'>
            <h4>{tipo}</h4>
            <img src={img} alt='tipo'/>
        </div>
    )
}

export default CardTipoUsuario
