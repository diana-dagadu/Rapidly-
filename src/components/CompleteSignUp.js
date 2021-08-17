import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import AuthTemplate from "../containers/AuthTemplate";
import { auth } from "../firebase";
import { toast } from "react-toastify";

// images
import signup from "../img/signup4.svg";
import { useEffect } from "react";

const CompleteSignUp = ({ history }) => {
	// getting the user inputs
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		setEmail(window.localStorage.getItem("registrationEmail"));
	}, []);

	// submitHandler
	const submitHandler = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			toast.error("Email and Password are Required!");
			return;
		}
		if (password.length < 8) {
			toast.error("Password must be at least 8 characters long!");
			return;
		}
		try {
			const result = await auth.signInWithEmailLink(
				email,
				window.location.href
			);
			console.log(result);
			if (result.user.emailVerified) {
				window.localStorage.removeItem("registrationEmail");
				let user = auth.currentUser;
				await user.updatePassword(password); //updated user password
				// const idTokenResult = await user.getIdTokenResult();
				// dispatch store
				// redirect user
				history.push("/");
			}
		} catch (error) {
			console.log(error);
			toast.error(error.message);
		}
	};

	return (
		<AuthTemplate image={signup}>
			<div className="login-content">
				<form className="account-form" onSubmit={submitHandler}>
					
					<h4>Complete Your Registration Process!</h4>
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
								disabled
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

export default CompleteSignUp;
