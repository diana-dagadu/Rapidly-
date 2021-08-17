import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../containers/AuthTemplate";
import { auth } from "../firebase";
import { toast } from "react-toastify";

// images
import signup from "../img/signup4.svg";

const SignUp = () => {
  // getting the user inputs
  const [email, setEmail] = useState("");

  
  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    // configure redirect url
    const config = {
      url: "http://localhost:3000/signup/complete",
      handleCodeInApp: true,
    };
    if (!email) {
      toast.error("Email is required, please!");
      return;
    }
    await auth.sendSignInLinkToEmail(email, config);
    //  send email to user
    toast.success(`Please complete your registration in your email: ${email}`);

    //  save email to local store
    window.localStorage.setItem(`registrationEmail`, email);

    //  clear input
    setEmail("");
  };

  return (
    <AuthTemplate image={signup}>
      <div className="login-content">
       
        <form className="account-form" onSubmit={submitHandler}>
          <h2 className="title">Get started</h2>
          <h4>Get your API keys in no time</h4>
          <br />
         
          <div className="input-div one">
            <div className="i">
              <i className="zmdi zmdi-email"></i>
            </div>
            <div className="div">
              <input
                type="text"
                className="input"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
         
          <input type="submit" className="btn" value="Sign Up" />
          <h4>
            Already have an account?{" "}
            <span>
              <Link to="/login">LOGIN</Link>
            </span>
          </h4>
        </form>
      </div>
    </AuthTemplate>
  );
};

export default SignUp;
