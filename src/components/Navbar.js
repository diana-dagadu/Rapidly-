import React from "react";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../reducers/actions";
import appLogo from "../img/Logooooo.png";

const Navbar = (props) => {
  const dispatch = useDispatch();

  let history = useHistory()

const logout = () => {
  firebase.auth().signOut()

 dispatch({
   type: LOGOUT,
   payload: null
 });
  
  history.push("/intropage");
}

  return (
		<nav className="navbar">
			<div className="max-width">
				<div className="logo">
					
					  <img src={appLogo} alt="dd" />
				</div>
				{props.homeNav && (
					<ul className="menu">
						<button onClick={logout} className="logoutBTN">
							<a href="#Logout" className="menu-btn">
								<Link to="/intropage">{props.logout}</Link>
							</a>
						</button>
					</ul>
				)}
				{!props.homeNav && (
					<ul className="menu">
						<button className="loginBTN">
							<a href="#Login" className="menu-btn">
								<Link to="/login">{props.login}</Link>
							</a>
						</button>
						<button className="signUpBTN">
							<a href="#Sign Up" className="menu-btn">
								<Link to="/signup">{props.signup}</Link>
							</a>
						</button>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
