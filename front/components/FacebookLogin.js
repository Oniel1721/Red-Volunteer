import { response } from "express";
import React from "react";
import FacebookLogin from "react-facebook-login";
import session from "../logic/sessions";

const LoginFB = () => {

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
  
          session.openSession(res.userID);
          session.redirect("/Usuario_Sangre");
         
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
                session.openSession(res.userID);
                session.redirect("/Usuario_Sangre")
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
  
  return (
    <div className="facebookLogin">
      <FacebookLogin
        appId="405429787148913"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Continue with Facebook"
        icon="fa-facebook"
        cssClass="extra-btn blue"
      />
    </div>
  );
};

export default LoginFB;
