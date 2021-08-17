import { combineReducers } from "redux";
import apiReducer from "./apiReducer";
import  userReducer  from "./userReducer";


const rootReducer = combineReducers({
  user: userReducer,
  company: apiReducer,
});

export default rootReducer