import React from 'react'
import {Link} from 'react-router-dom'

const SignupLocal = function(){
    return(
        <div>
            <Link to="/">Go Back</Link>
            <h2>signup</h2>
            <form id="signup" action="http://localhost:7000/api/signup" method="POST">
                <label>Name</label>
                <input type="text" name="name" id="s-name" required/>
                <br/>
                <label>Last Name</label>
                <input type="text" name="last" id="s-last" required/>
                <br/>
                <label>Blood</label>
                <input type="text" name="blood" id="s-blood" required/>
                <br/>
                <label>User</label>
                <input type="text" name="user" id="s-user" required/>
                <br/>
                <label>Email</label>
                <input type="email" name="email" id="s-email" required/>
                <br/>
                <label>Password</label>
                <input type="password" name="password" id="s-password" required/>
                <br/>
                <button type="submit">Sign</button>
            </form>
        </div>
    )
}

export default SignupLocal