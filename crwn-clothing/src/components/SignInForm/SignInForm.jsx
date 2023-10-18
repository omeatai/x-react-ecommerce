import { useState, useContext } from "react";

import { UserContext } from "../../contexts/userContext";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";

import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./SignInForm.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // Sign in with Google account
  const signInWithGoogle = async () => {
    try {
      const { user } = await signInWithGooglePopup();
      if (user) {
        setCurrentUser(user);
        // console.log(user);
      } else {
        console.log("User is not authenticated. Token Invalid!");
      }
      await createUserDocumentFromAuth(user);
    } catch (error) {
      console.log(error.code, error.message);
    }
  };

  // Sign in with Auth User With Email And Password
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email || !password) {
      alert("Both Username and Password are Required!");
      return;
    }

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      if (user) {
        setCurrentUser(user);
        // console.log(user);
      }
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Username or Password is Invalid!");
          break;
        case "auth/user-not-found":
          alert("Username or Password is Invalid!");
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          id="sign_in_email"
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          id="sign_in_password"
        />

        <div className="buttons-container">
          <Button buttonType="" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
