// Use this as a template
import {
  Professional_FETCHING,
  Professional_SUCCESS,
  Professional_FAILED,
  Professional_CLEAR,
  server,
} from "../constants";
import swal from "sweetalert";
import { httpClient } from "../utils/HttpClient";
 
export const setProfessionalStateToFetching = () => ({
  type: Professional_FETCHING,
});
 
export const setProfessionalStateToFailed = () => ({
  type: Professional_FAILED,
});
export const setProfessionalStateToClear = () => ({
  type: Professional_CLEAR,
});
export const setProfessionalStateToSuccess = (payload) => ({
  type: Professional_SUCCESS,
  payload,
});

// CREATE operation
export const create = (values, history) => {
  return async (dispatch) => {
    dispatch(setProfessionalStateToFetching());
    const response = await httpClient.post(
      process.env.REACT_APP_API_URL + "professional",
      values
    );
    if (response.data.result == "success") {
      dispatch(setProfessionalStateToSuccess(response.data));
      swal("Success!", response.data.message, "success").then((value) => {
        dispatch(setProfessionalStateToClear());
        history.goBack();
        dispatch(index());
      });
    } else if (response.data.result === "error") {
      dispatch(setProfessionalStateToFailed());
      swal("Error!", response.data.message, "error");
    }
  };
};

// Index Action
export const index = () => {
  return async (dispatch) => {
    dispatch(setProfessionalStateToFetching);
    const response = await httpClient.get(
      process.env.REACT_APP_API_URL + "professional"
    );
    if (response.data.result == "success") {
      // console.log(response.data);
      dispatch(setProfessionalStateToSuccess(response.data.data));
      console.log(response.data.data)
    } else if (response.data.result === "error") {
      dispatch(setProfessionalStateToFailed());
      swal("Error!", response.data.message, "error");
    }
  };
};

// UPDATE operation
// Fetch Professional by ID
export const getProfessionalById = (id) => {
  return async (dispatch) => {
    dispatch(setProfessionalStateToFetching());
    const response = await httpClient.get(
      process.env.REACT_APP_API_URL + "professional/" + id
    );
    if (response.data.result == "success") {
      dispatch(setProfessionalStateToSuccess(response.data.data));
    } else if (response.data.result === "error") {
      dispatch(setProfessionalStateToFailed());
      swal("Error!", response.data.message, "error");
    }
  };
};

// Then Update
export const update = (values, history) => {
  return async (dispatch) => {
    dispatch(setProfessionalStateToFetching());
    const response = await httpClient.put(
      process.env.REACT_APP_API_URL + "professional",
      values
    );
    if (response.data.result == "success") {
      dispatch(setProfessionalStateToClear());
      history.goBack();
      dispatch(index());
    } else if (response.data.result === "error") {
      dispatch(setProfessionalStateToFailed());
      swal("Error!", response.data.message, "error");
    }
  };
};

// DELETE operation
export const remove = (id) => {
  return async (dispatch) => {
    console.log("remove");
    dispatch(setProfessionalStateToFetching());
    const response = await httpClient.delete(
      process.env.REACT_APP_API_URL + "professional/" + id
    );
    if (response.data.result == "success") {
      dispatch(setProfessionalStateToSuccess());
      dispatch(index());
    } else if (response.data.result === "error") {
      dispatch(setProfessionalStateToFailed());
      swal("Error!", response.data.message, "error");
    }
  };
};