import React from 'react'
import logout from '../images/logout.png'
import session from '../logic/sessions'

const CloseSession = function(){
    return (
        <div onClick={session.closeSession} className='btn-out'>
            <img src={logout} alt='logout' />
            <p>Cerrar sesión</p>
        </div>
    )
}

export default CloseSession