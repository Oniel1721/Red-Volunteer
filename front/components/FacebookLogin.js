import React from "react";
import FacebookLogin from "react-facebook-login";
import session from "../logic/sessions";

const LoginFB = () => {

  const responseFacebook = (res) => {
    console.log(res)
    return res
  };

  const sendUserInfo = () => {
    var url = 'http://localhost:7000/api/social';
    var data = new FormData()

    for(let prop in responseFacebook){
      data.append(prop, responseFacebook[prop])
    }

    fetch(url, {
      method: "POST",
      body: data,
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

  // const verify = () => {

  //   var url = 'http://localhost:7000/api/:'+responseFacebook.userID;

  //   fetch(url)
  //     .then((data) => data.json())
  //     .then((users, err) => {
  //       if(users.){

  //       }
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  const register = ()=>{
      
    verify();

    if (verify != true ){
      sendUserInfo()
      verify()
    }
  }

  return (
    <div className="facebookLogin">
      <FacebookLogin
        appId="405429787148913"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook, sendUserInfo}
        textButton="Continue with Facebook"
        icon="fa-facebook"
        cssClass="extra-btn blue"
      />
    </div>
  );
};

export default LoginFB;
