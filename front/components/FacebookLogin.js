import React from 'react'
import FacebookLogin from 'react-facebook-login';


const Login = ()=> {

    const responseFacebook = (response) => {
        
        console.log(response);
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
        .then(response => console.log('Success;', response));
        
    }

    return(
        <div className="facebookLogin">
            <FacebookLogin
            appId="884544232070914"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook} 
            textButton="continua con facebook"
            icon="fa-facebook"
            cssClass="" //Put the css class here
            />
        </div>
    )
}

export default Login;