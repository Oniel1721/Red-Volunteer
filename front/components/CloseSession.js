import React from 'react'
import session from '../logic/sessions'

const CloseSession = function(){
    return (
        <button onClick={session.closeSession}>Close Session</button>
    )
}

export default CloseSession