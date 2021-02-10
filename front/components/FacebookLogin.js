import React from "react";
import FacebookLogin from "react-facebook-login";

const LoginFB = (props) => {
  return (
    <div className="facebookLogin">
      <FacebookLogin
        appId="405429787148913"
        autoLoad={false}
        fields="name,email,picture"
        callback={props.responseFacebook}
        textButton="Continue with Facebook"
        icon="fa-facebook"
        cssClass="extra-btn blue"
      />
    </div>
  );
};

export default LoginFB;
