
import React from "react";
import GoogleLogin from "react-google-login";


function Google() {

    const responseGoogle = (response) => {
        console.log(response);
      };

    return (
        
       <GoogleLogin
            className="bg-warning color-black googlelink"
            clientId="1079226912737-0jfnjel6vj30sf15ktu3vvg0d1fum3f5.apps.googleusercontent.com"
            buttonText="Sign With  Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
    )
}

export default Google
