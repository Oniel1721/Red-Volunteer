import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import LoginG from '../components/GoogleLogin'
import LoginFB from '../components/FacebookLogin'
import LoginSvg from '../components/LoginSvg'
import setData from '../logic/sessions'

import '../styles/SignupLocal.css'


const Register = () =>{
  
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
          var prop;
        
            function setData(){

                var data = new FormData()

                if(res){
                    let facebookValues = Object.values(res)
                    let facebooKeys = Object.keys(res)
                    
                    for( prop in facebooKeys){
                        if(facebooKeys[prop] == 'name' || facebooKeys[prop] == 'email' || facebooKeys[prop] == 'userID'|| facebooKeys[prop] == 'graphDomain'){
                        data.append(facebooKeys[prop],facebookValues[prop])
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
              setData('userId' ,res.userID);
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
    
          var url = 'http://localhost:7000/api/user/:'+res.userID;
    
          fetch(url)
            .then((data) => data.json())
            .then((data) => {
              if (data) {
                setData('userId' ,res.userID);
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

        <div className='signupLocal'>
            {renderRedir()}
            <div className='svgLogin'>
                <LoginSvg />
            </div>
            
            <div className='rightLogin mini-container'>

            <h2>Iniciar Sesión</h2>

            <div className='fila'>
                <div>
                    <LoginG ></LoginG>
                </div>
                <div>
                    <LoginFB responseFacebook={responseFacebook}></LoginFB>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Register

