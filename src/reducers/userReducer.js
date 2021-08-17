import { LOGGED_IN_USER , LOGOUT} from "./actions";
// user reducer
const userReducer = (state = null, { type, payload }) => {
  switch (type) {
    case LOGGED_IN_USER:
      return { ...state, payload };

    case LOGOUT:
      return {
        ...state, payload
      };

    default:
      return state;
  }
};


export default userReducer