import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../containers/AuthTemplate";
import { toast } from "react-toastify";
import { auth } from "../firebase";

// images
import resetpass from "../img/resetpass.svg";

const ForgotPassword = ({ history }) => {
  // getting the user inputs
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
// configure redirect url
      const config = {
        url: "http://localhost:3000/login",
        handleCodeInApp: true,
    };
    
    await auth.sendPasswordResetEmail(email, config).then(() => {
      setEmail('')
      setIsLoading(false)
      toast.success('Please continue the reset process in your email!')
      
    }).catch((error) => {
      setIsLoading(false)
      toast.error(error.message)
    })
  };
  return (
    <AuthTemplate image={resetpass}>
      <div className="login-content">
        <form className="account-form" onSubmit={submitHandler}>
          <h2 className="title">
            {isLoading ? "Loading..." : "Reset Password"}
          </h2>
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

          <input type="submit" className="btn" value="Reset Password" />
          <h4>
            Don't have an account?{" "}
            <span>
              <Link to="/signup">SIGN UP</Link>
            </span>
          </h4>
        </form>
      </div>
    </AuthTemplate>
  );
};

export default ForgotPassword;
