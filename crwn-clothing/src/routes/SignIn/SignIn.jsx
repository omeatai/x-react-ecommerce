import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";

const SignIn = () => {
  const logGoogleuser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleuser}>Sign in with Google Popup</button>
    </div>
  );
};

export default SignIn;
