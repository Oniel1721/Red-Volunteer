import React from 'react'
import logout from '../images/logout.png'
import session from '../logic/sessions'

const handleClick = ()=>{
    session.closeSession()
    window.location.assign('/')
}

const CloseSession = function(){
    return (
        <div onClick={handleClick} className='btn-out'>
            <img src={logout} alt='logout' />
            <p>Cerrar sesión</p>
        </div>
    )
}

export default CloseSession