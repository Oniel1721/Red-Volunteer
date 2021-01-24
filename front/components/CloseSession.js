import React from 'react'
import logout from '../images/logout.png'

const CloseSession = function(props){
    return (
        <div onClick={props.handleClick} className='btn-out'>
            <img src={logout} alt='logout' />
            <p>Cerrar sesión</p>
        </div>
    )
}

export default CloseSession