import React from 'react'
import GoogleLogin from 'react-google-login'
import session from "../logic/sessions";

const LoginG = ()=>{

    const responseGoogle = (res) => {
        if (res) {
          return JSON.stringify(res);
        }
      };
    
      const sendUserInfo = () => {
        var url = '';
        var data = responseGoogle;
    
        fetch(url, {
          method: "POST",
          body: data,
          headers: {
            "Content-Type": "application/json",
          },
          mode: "cors",
        })
        .then((response) => {
          if (response.ok) {
            console.log("ok");
          } else {
            console.log("Error in fetch");
          }
        })
        .catch((error) => {
          console.log(error);
        });;
      };
    
      const verify = () => {
    
        var url = '';
    
        fetch(url)
          .then((data) => data.json())
          .then((users, err) => {
            for (var user in users) {
              for (var index in users[user]) {
                if (
                  users[user][index].name == responseGoogle.name &&
                  users[user][index].userId == responseGoogle.userId
                ) {
                  session.openSession(responseGoogle.userId);
                  session.redirect("/solicitante");
                  return true 
                }
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const register = ()=>{
          
        verify();
    
        if (verify != true ){
          sendUserInfo()
          verify()
        }
      }

    return(
        <div>
            <GoogleLogin
                clientId="143556844542-518dd6usp3hdv4tnilcs5godeagfps55.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />,
        </div>
    )
}

export default LoginG;