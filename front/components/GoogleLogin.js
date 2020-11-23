
import React from 'react'
import GoogleLogin from 'react-google-login'

const LoginG = ()=>{

    const responseGoogle =(response)=>{
        
        var url = 'https://http://localhost:7000';
        var data = response;
        
        fetch(url, {
          method: 'POST',
          body: JSON.stringify(data),
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then(res => res.json())
        .catch(error => console.error('Error:', error))
    }
    return(
        <div>
            <GoogleLogin
                clientId="143556844542-518dd6usp3hdv4tnilcs5godeagfps55.apps.googleusercontent.com"
                buttonText="Continua con google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>
    )
}

export default LoginG;