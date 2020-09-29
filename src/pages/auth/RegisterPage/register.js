import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import * as registerActions from "./../../../redux/actions/register.action";
import { useDispatch } from "react-redux";
import { Grid, Button, Card, Typography, FormControlLabel, Checkbox, Input } from "@material-ui/core";
import styled from "styled-components";

import Logo from "./images/logo.png";

const SignupSchemaPatient = Yup.object().shape({
  first_name: Yup.string().required("Campo obrigatório"),
  last_name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas não são idênticas."
  ),
});

const SignupSchemaProfessional = Yup.object().shape({
  first_name: Yup.string().required("Campo obrigatório"),
  last_name: Yup.string().required("Campo obrigatório"),
  email: Yup.string().email("Email inválido").required("Campo obrigatório"),
  RG: Yup.string().required("Campo obrigatório"),
  CPF: Yup.string().required("Campo obrigatório"),
  CRP: Yup.string().required("Campo obrigatório"),
  password: Yup.string().required("Campo obrigatório"),
  confirm_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "As senhas não são idênticas."
  ),
});

const RegisterPage = styled(Grid)`
  background: -webkit-linear-gradient(to right, #025373, #50a0bf);
  background: linear-gradient(to right, #025373, #50a0bf);
  min-height: 100vh;
`;

const StyledButton = styled(Button)`
  background: #50a0bf !important;
  color: white !important;
`

export default (props) => {
  const dispatch = useDispatch();
  const [isPatient, setIsPatient] = useState(false);
  const [isProfessional, setIsProfessional] = useState(false);
  const history = useHistory();

  const handleChangePatient = () => {
    setIsPatient(!isPatient)
    setIsProfessional(false)
  }

  const handleChangeProfissional = () => {
    setIsProfessional(!isProfessional)
    setIsPatient(false)
  }

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // Form Patient
  function showFormPatient({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) {
    return (
      <form onSubmit={handleSubmit} className="my-4">
        <Typography variant="h6" className="text-center">Preencha com suas informações e já use a plataforma!</Typography>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="text"
            name="first_name"
            onChange={handleChange}
            value={values.first_name}
 
            placeholder="Nome"
            className={
              errors.first_name && touched.first_name
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.first_name && touched.first_name ? (
            <small id="passwordHelp" class="text-danger">
              {errors.first_name}
            </small>
          ) : null}
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="text"
            name="last_name"
            onChange={handleChange}
            value={values.last_name}
 
            placeholder="Sobrenome"
            className={
              errors.last_name && touched.last_name
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.last_name && touched.last_name ? (
            <small id="passwordHelp" class="text-danger">
              {errors.last_name}
            </small>
          ) : null}
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
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
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
 
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
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            className={
              errors.confirm_password && touched.confirm_password
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Confirme a Senha"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.confirm_password}
            </small>
          ) : null}

          <Input
            hidden
            type="text"
            name="level"
            onChange={handleChange}
            value="patient"
          />
        </div>

        <div className="row">
          <div className="col-md-10 mx-auto">
            <StyledButton
              variant="contained"
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Confirmar
            </StyledButton>
            {/* <Button
              variant="contained"
              type="Button"
              onClick={() => {
                this.props.history.push("/entrar");
              }}
              className="btn btn-default btn-block btn-flat"
            >
              already member?
            </Button> */}
          </div>
          {/* /.col */}
        </div>
      </form>
    );
  }

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // Form Professional
  function showFormProfessional({
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    setFieldValue,
    isSubmitting,
  }) {
    return (
      <form onSubmit={handleSubmit} className="my-4">
        <Typography variant="h6" className="text-center">Preencha com suas informações e já use a plataforma!</Typography>
        <div className="col-md-10 mx-auto my-2">

          <Input
            type="text"
            name="first_name"
            onChange={handleChange}
            value={values.first_name}
 
            placeholder="Nome"
            className={
              errors.first_name && touched.first_name
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.first_name && touched.first_name ? (
            <small id="passwordHelp" class="text-danger">
              {errors.first_name}
            </small>
          ) : null}
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="text"
            name="last_name"
            onChange={handleChange}
            value={values.last_name}
            placeholder="Sobrenome"
            className={
              errors.last_name && touched.last_name
                ? "form-control is-invalid"
                : "form-control"
            }
          />
          {errors.last_name && touched.last_name ? (
            <small id="passwordHelp" class="text-danger">
              {errors.last_name}
            </small>
          ) : null}
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
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
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
              type="text"
              name="RG"
              onChange={handleChange}
              value={values.RG}
   
              placeholder="RG"
              className={
                errors.fullname && touched.fullname
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
              type="text"
              name="CPF"
              onChange={handleChange}
              value={values.CPF}
   
              placeholder="CPF"
              className={
                errors.fullname && touched.fullname
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
              type="text"
              name="CRP"
              onChange={handleChange}
              value={values.CRP}
   
              placeholder="CRP"
              className={
                errors.fullname && touched.fullname
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
            {errors.CRP && touched.CRP ? (
            <small id="CRPHelp" class="text-danger">
              {errors.CRP}
            </small>
          ) : null}
        </div>
        {/* <div className="col-md-10 mx-auto my-2">
          <Input
              type="text"
              name=""
              onChange={handleChange}
              value={values}
   
              placeholder=""
              className={
                errors.fullname && touched.fullname
                  ? "form-control is-invalid"
                  : "form-control"
              }
            />
        </div> */}
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={values.password}
 
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
        </div>
        <div className="col-md-10 mx-auto my-2">
          <Input
            type="password"
            name="confirm_password"
            onChange={handleChange}
            className={
              errors.confirm_password && touched.confirm_password
                ? "form-control is-invalid"
                : "form-control"
            }
            placeholder="Confirme a Senha"
          />
          {errors.confirm_password && touched.confirm_password ? (
            <small id="passwordHelp" class="text-danger">
              {errors.confirm_password}
            </small>
          ) : null}


          <Input
            hidden
            type="text"
            name="level"
            onChange={handleChange}
            value="professional"
          />
        </div>

        <div className="row">
          <div className="col-md-10 mx-auto">
            <StyledButton
              variant="contained"
              disabled={isSubmitting}
              type="submit"
              className="btn btn-primary btn-block btn-flat"
            >
              Confirmar
            </StyledButton>
            {/* <Button
              variant="contained"
              type="Button"
              onClick={() => {
                this.props.history.push("/entrar");
              }}
              className="btn btn-default btn-block btn-flat"
            >
              already member?
            </Button> */}
          </div>
          {/* /.col */}
        </div>
      </form>
    );
  }

  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  return (
    <RegisterPage
      container
      justify="center"
      alignItems="center"
      alignContent="center"
    >
      <Grid item className="register-box" sm="8">
        <Grid container className="register-logo" justify="center">
          <Grid item className="mt-4">
            <img
              alt=""
              src={Logo}
              style={{ maxHeight: "20vh" }}
              className="d-block ml-auto"
            />
          </Grid>
        </Grid>
        <Card className="card">
          <Grid className="card-body register-card-body">
            <Grid>
              <Typography variant="h4" className="login-box-msg">
                Que bom você está aqui!
              </Typography>
              <Typography variant="h6" style={{ textAlign: "center" }}>
                Cadastre-se agora na plataforma Alpha e ganhe uma série de bônus
                exclusivos.
              </Typography>
            </Grid>
            <Grid container>
              <Grid item container sm="4" className="my-3">
                <Grid item sm="4"></Grid>
                <Grid item sm="8">
                  <Typography>
                    Acesso antecipado gratuito de todas as funcionalidades.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container sm="4" className="my-3">
                <Grid item sm="4"></Grid>
                <Grid item sm="8">
                  <Typography>
                    Acompanhar bem próximo o desenvolvimento da plataforma.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container sm="4" className="my-3">
                <Grid item sm="4"></Grid>
                <Grid item sm="8">
                  <Typography>
                    Desconto em vários planos extras futuros.
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justify="center">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isPatient}
                      onChange={() => handleChangePatient()}
                      color="primary"
                    />
                  }
                  label="Sou Paciente"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={isProfessional}
                      onChange={() => handleChangeProfissional()}
                      color="primary"
                    />
                  }
                  label="Sou Psicólogo"
                />
              </Grid>
            </Grid>

            <Grid>
              {isPatient && (
                <Formik
                  initialValues={{
                    username: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    values.level = "patient";
                    dispatch(registerActions.register(values, props.history));
                    setSubmitting(false);
                    history.push("/entrar");
                  }}
                  validationSchema={SignupSchemaPatient}
                >
                  {(props) => showFormPatient(props)}
                </Formik>
              )}
              {isProfessional && (
                <Formik
                  initialValues={{
                    username: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    confirm_password: "",
                  }}
                  onSubmit={(values, { setSubmitting }) => {
                    values.level = "professional";
                    dispatch(registerActions.register(values, props.history));
                    setSubmitting(false);
                    history.push("/entrar");
                  }}
                  validationSchema={SignupSchemaProfessional}
                >
                  {(props) => showFormProfessional(props)}
                </Formik>
              )}
            </Grid>
          </Grid>
          {/* /.form-box */}
        </Card>
        {/* /.card */}
      </Grid>
    </RegisterPage>
  );
};
