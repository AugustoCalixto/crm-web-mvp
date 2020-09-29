import { combineReducers } from "redux";
import loginReducer from "./login.reducer";
import registerReducer from './register.reducer';
import forgotpasswordReducer from './forgotpassword.reducer';
import resetpasswordReducer from './resetpassword.reducer';
import professionalReducer from './professional.reducer';
import crudReducer from "./crud.reducer";
export default combineReducers({
  loginReducer,
  registerReducer,
  forgotpasswordReducer,
  resetpasswordReducer,
  professionalReducer,
  crudReducer,
});