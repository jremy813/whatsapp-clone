import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div>
      <div className="login__container">
        <img
          src="https://sharpcctv.co.uk/wp-content/uploads/2020/05/WhatsApp_logo_logotype_text.png"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button onClick={signIn}>Sign In With Google</Button>
      </div>
    </div>
  );
}

export default Login;
