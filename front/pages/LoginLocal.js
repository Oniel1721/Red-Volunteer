import React from 'react'
import {Link} from 'react-router-dom'
import session,{handleLocalLogin} from '../logic/sessions'

const LoginLocal = function(){
    session.checkSession("/")
    return(
        <div>
            <Link to="/">HOME</Link>
            <h2>login</h2>
            <form id="login" action="http://localhost:7000/api/login" method="POST" onSubmit={handleLocalLogin}>
                <input type="email" name="email" id="l-email" required />
                <input type="password" name="password" id="l-password" required />
                <button type="submit">Log</button>
            </form>
            <Link to="/signup-local">Signup Local</Link>
        </div>
    )
}

export default LoginLocal

