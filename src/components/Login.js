import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../containers/AuthTemplate";
import { auth } from "../firebase";
import { useDispatch } from "react-redux";

// images
import avatar from "../img/avatar.svg";
import login from "../img/login.svg";
import { toast } from "react-toastify";
import { LOGGED_IN_USER } from "../reducers/actions";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  
  // getting the user inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // submitHandler
  const submitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (!email || !password) {
			toast.error("Provide all details, please!");
			return;
		}
    try {
      const result = await auth.signInWithEmailAndPassword(email, password);
      const { user } = result;
      const idTokenResult = await user.getIdTokenResult();
      dispatch({
        type: LOGGED_IN_USER,
        payload: {
          email: user.email,
          token: idTokenResult.token,
        },
      });
      history.push("/");
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  return (
    <AuthTemplate image={login}>
      <div className="login-content">
        <form className="account-form" onSubmit={submitHandler}>
          <img src={avatar} alt="avatar" />
          <h2 className="title">{isLoading ? "Loading..." : "Welcome"}</h2>
          <div className="input-div one">
            <div className="i">
              <i className="zmdi zmdi-account"></i>
            </div>
            <div className="div">
              <input
                type="text"
                className="input"
                placeholder="Enter username or email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="input-div pass">
            <div className="i">
              <i className="zmdi zmdi-lock"></i>
            </div>
            <div className="div">
              <input
                type="password"
                className="input"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <Link to="/forgot-password">Forgot Password?</Link>
          <input
            type="submit"
            className="btn"
            value="Login"
            disabled={!email || password.length < 8}
          />
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

export default Login;
