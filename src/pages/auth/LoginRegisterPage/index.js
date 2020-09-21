import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as loginActions from "../../../redux/actions/login.action";
import * as registerActions from "./../../../redux/actions/register.action";
import { server } from "../../../redux/constants";

import "./style.css";

const LoginSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, "username is Too Short!")
    .max(50, "username is Too Long!")
    .required("Username is Required"),
  password: Yup.string().required("Password is required"),
});

const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, "username is Too Short!")
      .max(50, "username is Too Long!")
      .required("username is Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Both password need to be the same"
    ),
  });

const LoginRegisterPage = (props) => {
  const dispatch = useDispatch();
  const loginReducer = useSelector(({ loginReducer }) => loginReducer);

  useEffect(() => {
    if (localStorage.getItem(server.TOKEN_KEY) != null) {
      return props.history.push("/home");
    }
    let notify = props.match.params["notify"];
    if (notify !== undefined) {
      if (notify === "error") {
        swal("Activation Fail please try again !", "", "error");
      } else if (notify === "success") {
        swal("Activation Success your can login !", "", "success");
      }
    }

    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  }, []);

  const showForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) => {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Fazer Login</h1>
        {/* <div class="social-container">
          <a href="#" class="social">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
        <span>or use your account</span> */}
        <>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Nick de Usuário"
          />
          {errors.username && touched.username ? (
            <small id="passwordHelp" class="text-danger">
              {errors.username}
            </small>
          ) : null}
        </>
        <>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Senha"
          />
          {errors.password && touched.password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.password}
            </small>
          ) : null}
        </>
        <div class="row">
          <div class="icheck-primary">
            <input type="checkbox" id="remember" />
            <label for="remember">Lembre de Mim</label>
          </div>
        </div>
        <div class="row">
          <button type="submit" disabled={isSubmitting}>
            Entrar
          </button>
        </div>
      </form>
    );
  };

  function showFormSignUp({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) {
    return (
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            value={values.username}
            className="form-control"
            placeholder="Nome de Usuário"
            className={
              errors.username && touched.username
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.fullname && touched.fullname ? (
            <small id="passwordHelp" class="text-danger">
              {errors.username}
            </small>
          ) : null}
        </>
        <>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            value={values.email}
            className={
              errors.email && touched.email
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Email"
          />
          {errors.email && touched.email ? (
            <small id="passwordHelp" class="text-danger">
              {errors.email}
            </small>
          ) : null}
        </>
        <>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
            className="form-control"
            placeholder="Senha"
            className={
              errors.password && touched.password
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.password && touched.password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.password}
            </small>
          ) : null}
        </>
        <>
          <input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            className={
              errors.confirm_password && touched.confirm_password
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Confirme sua Senha"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.confirm_password}
            </small>
          ) : null}
        </>

        <div className="row">
          <div className="col-md-12">
            <button
              disabled={isSubmitting}
              type="submit"
            >Confirmar
            </button>
          </div>
          {/* /.col */}
        </div>
      </form>
    );
  }

  return (
    <>
      <div class={`container loginRegisterForm`} id="container">
        <div class="form-container sign-up-container">
            <Formik
                initialValues={{
                    fullname: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(registerActions.register(values, props.history));
                    setSubmitting(false);
                }}
                validationSchema={SignupSchema}
                >
                {(props) => showFormSignUp(props)}
            </Formik>
        </div>
        <div class="form-container sign-in-container">
            <Formik
                initialValues={{
                    username: "",
                    password: "",
                }}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(loginActions.login(values, props.history));
                    setSubmitting(false);
                }}
                validationSchema={LoginSchema}
                >
                {/* {this.showForm()}            */}
                {(props) => showForm(props)}
            </Formik>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Bem vindo de volta!</h1>
              <p>
                Para manter conectado por favor faça login com suas informações pessoais
              </p>
              <button class="ghost" id="signIn">
                Login
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Oi, amigo!</h1>
              <p>Entre com suas informações e comece sua jornada com a gente!</p>
              <button class="ghost" id="signUp">
                Registrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginRegisterPage;
