import React from 'react'
import FacebookLogin from 'react-facebook-login';

const LoginFB = ()=> {

    const responseFacebook = (response) => {
        
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
        <div className="facebookLogin">
            <FacebookLogin
            appId="405429787148913"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} 
            textButton=" Continua con Facebook"
            icon="fa-facebook"
            />
        </div>
    )
}

export default LoginFB;