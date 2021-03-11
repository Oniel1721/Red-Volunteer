import React, {useState} from 'react'
import GoogleLogin from 'react-google-login'
import setData from '../logic/sessions'
// import session from "../logic/sessions";

const LoginG = ()=>{

    const [redir, setRedir] = useState('')

    const renderRedir = ()=>{
        if(!redir) return ''
        return(
            <Redirect to={redir}/>
        )   
    }
    
      
    const responseGoogle = (response) => {
    
        const sendUserInfo = () => {
    
          var url = 'http://localhost:7000/api/social';
          var prop;
        
            function setData(){
    
                var data = new FormData()
    
                if(response){
                    let googleValues = Object.values(response)
                    let googlebooKeys = Object.keys(response)
                    
                    for( prop in googlebooKeys){
                        if(googlebooKeys[prop] == 'name' || googlebooKeys[prop] == 'email' || googlebooKeys[prop] == 'userID'|| googlebooKeys[prop] == 'graphDomain'){
                          data.append(googlebooKeys[prop],googleValues[prop])
                        }
                    }
                  return data
                }
            };
          
          fetch(url, {
            method: "POST",
            body: setData(),
            mode: "cors",
          })
          .then((response) => {
            if (response.ok) {
              setData('userId' ,response.userID);
              setRedir("/Usuario_Sangre");
            } else {
              console.log("Error in fetch");
            }
          })
          .catch((error) => {
            console.log(error);
          });;
        };
    
        const verify = () => {
    
          var url = 'http://localhost:7000/api/user/:'+response.userID;
    
          fetch(url)
            .then((data) => data.json())
            .then((data) => {
              if (data) {
                setData('userId' ,response.userID);
                setRedir("/Usuario_Sangre");
              } else {
                console.log('No se encuentra en la base de datos');
                sendUserInfo()
              }
            })
            .catch((error) => {
              console.log(error);
            });
        };
        verify()
    }
    return(
        <div>
            {/* {renderRedir()} */}
            <GoogleLogin
                clientId="143556844542-518dd6usp3hdv4tnilcs5godeagfps55.apps.googleusercontent.com"
                buttonText="Continue with Google"
                onSuccess={responseGoogle}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default LoginG;