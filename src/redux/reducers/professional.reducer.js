// Use this as a template
import {
  Professional_FETCHING,
  Professional_SUCCESS,
  Professional_FAILED,
  Professional_CLEAR,
} from "../constants";
 
const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};
 
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case Professional_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case Professional_FAILED:
      return { ...state, isFetching: false, isError: true, result: null };
    case Professional_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    case Professional_CLEAR:
      return { ...state, result: null, isFetching: false, isError: false };
    default:
      return state;
  }
};