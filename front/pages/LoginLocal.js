import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import LoginG from '../components/GoogleLogin'
import LoginFB from '../components/FacebookLogin'
import LoginSvg from '../components/LoginSvg'

import '../styles/SignupLocal.css'

const LoginLocal = () =>{
    const [redir, setRedir] = useState('')

    const renderRedir = ()=>{
        if(!redir) return ''
        return(
            <Redirect to={redir}/>
        )   
    }

    const responseFacebook = (res) => {

        const sendUserInfo = () => {
    
          var url = 'http://localhost:7000/api/social';
          var data = new FormData()
          var facebookValues = Object.values(res)
          var facebooKeys = Object.keys(res)
          var prop;
          
          for( prop in facebooKeys){
            if(facebooKeys[prop] == 'name' || facebooKeys[prop] == 'email' || facebooKeys[prop] == 'userID'|| facebooKeys[prop] == 'graphDomain'){
              data.append(facebooKeys[prop],facebookValues[prop])
            }
          }
          
          data.append('typeUserId', 1)
          data.append('bloodtypeId', 1)
          
      
          fetch(url, {
            method: "POST",
            body: data,
            mode: "cors",
          })
          .then((response) => {
            if (response.ok) {
      
              // session.openSession(res.userID);
              // session.redirect("/Usuario_Sangre");
              return true
             
            } else {
              console.log("Error in fetch");
            }
          })
          .catch((error) => {
            console.log(error);
          });;
        };
    
        const verify = () => {
    
          var url = 'http://localhost:7000/api/:'+res.userID;
    
          fetch(url)
            .then((data) => data.json())
            .then((user) => {
              if(response.ok){
                if(user != []){
                  if(user.userIdDomain == res.userID){
                    // session.openSession(res.userID);
                    // session.redirect("/Usuario_Sangre")
                    return true
                  }else{
                    sendUserInfo()
                  }
                }else{
                  sendUserInfo()
                }
              }else{
                sendUserInfo()
              }
              console.log(users)
            })
            .catch((error) => {
              console.log(error);
            });
        };
        verify()
      }

    return(

        <div className='signupLocal'>
            {renderRedir()}
            <div className='svgLogin'>
                <LoginSvg />
            </div>
            
            <div className='rightLogin mini-container'>

            <h2>Iniciar Sesión</h2>

            <div className='fila'>
                <div>
                    {/* <LoginG></LoginG> */}
                </div>
                <div>
                    <LoginFB responseFacebook={responseFacebook}></LoginFB>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LoginLocal

