import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./containers/Home";
import IntroPage from "./containers/IntroPage";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOGGED_IN_USER } from "./reducers/actions";
import CompleteSignUp from "./components/CompleteSignUp";

function App() {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.user);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult()
        console.log("user: ", user);
        dispatch({
          type: LOGGED_IN_USER, payload: {
            email: user.email,
            token:idTokenResult.token
        }})
      }
    })
    return () =>  unsubscribe()
  }, [dispatch])

  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <IntroPage />}
          </Route>
          <Route path="/intropage" component={IntroPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signup/complete" component={CompleteSignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
