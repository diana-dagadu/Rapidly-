import { FETCH_REQUEST} from "./actions";
import axios from "axios";


// initialState
const initialState = {
  company: [],
};

// action creators
export const fetchCompany = (search) => async (dispatch) => {
  const data = await axios.get(
    `https://companyenrichment.abstractapi.com/v1/?api_key=72e7a48d31e043cd915cd0883344dd80&domain=${search}`
  );

  dispatch({
    type: FETCH_REQUEST,
    payload: data.data,
  });
};

// reducer
const apiReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, company: payload };
    default:
      return state;
  }
};

export default apiReducer;
