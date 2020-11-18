import React from 'react'
import {Link} from 'react-router-dom'

const LoginLocal = function(){
    return(
        <div>
            <Link to="/">Go Back</Link>
            <h2>login</h2>
            <form id="login" action="http://localhost:7000/api/login" method="POST">
                <input type="email" name="email" id="l-email" required />
                <input type="password" name="password" id="l-password" required />
                <button type="submit">Log</button>
            </form>
        </div>
    )
}

export default LoginLocal

