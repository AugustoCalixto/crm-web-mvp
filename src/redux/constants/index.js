// Login Page
export const LOGIN_FETCHING = "LOGIN_FETCHING";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";

// Register Page
export const REGISTER_FETCHING = "REGISTER_FETCHING";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

//Forgot password
export const FORGOT_FETCHING = "FORGOT_FETCHING";
export const FORGOT_SUCCESS = "FORGOT_SUCCESS";
export const FORGOT_FAILED = "FORGOT_FAILED";

export const apiUrl = process.env.REACT_APP_API_URL;
export const imageUrl = process.env.REACT_APP_API_URL;


// CRUD
// Need a new CRUD? Use this as a template
export const CRUD_FETCHING = "CRUD_FETCHING";
export const CRUD_SUCCESS = "CRUD_SUCCESS";
export const CRUD_FAILED = "CRUD_FAILED";
export const CRUD_CLEAR = "CRUD_CLEAR";

// Professional
export const Professional_FETCHING = "Professional_FETCHING";
export const Professional_SUCCESS = "Professional_SUCCESS";
export const Professional_FAILED = "Professional_FAILED";
export const Professional_CLEAR = "Professional_CLEAR";

export const server = {
  LOGIN_URL: `login`,
  REFRESH_TOKEN_URL: `refresh/token`,
  REGISTER_URL: `register`,
  PRODUCT_URL: `product`,
  TRANSACTION_URL: `transaction`,
  REPORT_URL: `report`,
  TOKEN_KEY: `token`,
  REFRESH_TOKEN_KEY: `refresh_token`,
};