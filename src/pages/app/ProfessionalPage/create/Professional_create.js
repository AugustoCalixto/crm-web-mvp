import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import * as CRUDActions from "../../../../redux/actions/crud.action";
import { server } from "../../../../redux/constants";

import LayoutApp from '../../../../layouts/LayoutApp';
// import "./CRUD_create.css";

const Create_Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "POS name is Too Short!")
    .max(22, "POS name is Too Long!")
    .required("POS name is Required"),
  serial_number: Yup.string()
    .min(2, "Serial number is Too Short!")
    .max(22, "Serial number is Too Long!")
    .required("Serial number is Required"),
});

const CRUDPage_create = (props) => {
  const dispatch = useDispatch();
  const crudReducer = useSelector(
    ({ crudReducer }) => crudReducer
  );

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) === null) {
      return props.history.push("/entrar");
    }
  }, []);

  const showForm = ({
      values,
      errors,
      touched,
      handleChange,
      handleSubmit,
      isSubmitting,
    }) => {
      return (
        <form onSubmit={handleSubmit}>
          <div className="form-group input-group has-feedback">
            <input
              type="text"
              name="alias"
              onChange={handleChange}
              value={values.alias}
              className="form-control"
              placeholder="POS Machine Alias Name"
              className={
                errors.alias && touched.alias
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
            {errors.alias && touched.alias ? (
              <small id="passwordHelp" class="text-danger">
                {errors.alias}
              </small>
            ) : null}
          </div>
          <div className="form-group input-group has-feedback">
            <input
              type="text"
              name="serial_number"
              onChange={handleChange}
              value={values.serial_number}
              className="form-control"
              placeholder="Serial Number"
              className={
                errors.serial_number && touched.serial_number
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user"></span>
              </div>
            </div>
            {errors.serial_number && touched.serial_number ? (
              <small id="passwordHelp" class="text-danger">
                {errors.serial_number}
              </small>
            ) : null}
          </div>
          <div class="row">
            <div class="offset-md-8 col-4">
              <button
                type="submit"
                disabled={isSubmitting}
                class="btn btn-primary btn-block"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      );
    };  

    return (
        <LayoutApp>
            <div className="container-fluid">
              <div className="container">
                <div className="page-container">
                <div className="register-box">
                  <div className="card">
                    <div className="card-body register-card-body">
                      <p className="login-box-msg">Add Pos Machine Data</p>
          
                      <Formik
                        initialValues={{
                          alias: "",
                          serial_number: "",
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                    
                          dispatch(CRUDActions.create(values, props.history));
                          setSubmitting(false);
                        }}
                      >
                        
                        {(props) => showForm(props)}
                      </Formik>
                    </div>
                    {/* /.form-box */}
                  </div>
                  {/* /.card */}
                </div>
                </div>
              </div>
            </div>
        </LayoutApp>
      );  
};

export default CRUDPage_create;