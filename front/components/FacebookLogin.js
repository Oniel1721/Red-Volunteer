import React from "react";
import FacebookLogin from "react-facebook-login";
import session from "../logic/sessions";

const LoginFB = () => {

  const responseFacebook = (res) => {
    if (res) {
      return JSON.stringify(res);
    }
  };
  
  const sendUserInfo = () => {
    var url = "http://localhost:7000";
    var data = responseFacebook;

    fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }).then((response) => {
      if (response.ok) {
        return console.log("ok");
      } else {
        throw "Error in fetch";
      }
    });
  };

  const fetchApi = () => {
    var url = "http://localhost:7000/api";

    fetch(url)
      .then((data) => data.json())
      .then((users) => {
        const verify = () => {

          for (var user in users) {
            for (var index in users[user]) {
              if (
                users[user][index].name == responseFacebook.name &&
                users[user][index].userId == responseFacebook.userId
              ) {
                session.openSession(users[user][index].userId);
                session.redirect("/solicitante");
                session.checkSession('/solicitante', window.location.href)
              } else {
                sendUserInfo()
                verify()
              }
            }
          }
        };

        verify();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  return (
    <div className="facebookLogin">
      <FacebookLogin
        appId="405429787148913"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        textButton="Sign in with Facebook"
        icon="fa-facebook"
        cssClass="extra-btn blue"
      />
    </div>
  );
};

export default LoginFB;
