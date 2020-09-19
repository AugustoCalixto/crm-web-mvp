import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import IntlMessages from 'util/IntlMessages';
import * as registerActions from "../actions/register.action";
import {hideMessage} from "../actions";
import CircularProgress from "@material-ui/core/CircularProgress";
import {NotificationContainer, NotificationManager} from "react-notifications";

const SignUp = (props) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const authUser = useSelector(({auth}) => auth.authUser);
  const {loading, message} = useSelector(({commonData}) => commonData);

  useEffect(() => {
    if (props.message) {
      setTimeout(() => {
        dispatch(hideMessage());
      }, 3000);
    }
    if (authUser !== null) {
      props.history.push('/');
    }
  }, [props.message, authUser])

  return (
    <div
      className="app-login-container d-flex justify-content-center align-items-center animated slideInUpTiny animation-duration-3">
      <div className="app-login-main-content">
        <div className="app-logo-content d-flex align-items-center justify-content-center">
          <Link className="logo-lg" to="/" title="Jambo">
            <img src={require("assets/icons/ms-icon-150x150.png")} alt="jambo" title="jambo"/>
          </Link>
        </div>

        <div className="app-login-content">
          <div className="app-login-header">
            <h1>Registrar</h1>
          </div>

          <div className="mb-4">
            <h2>Crie uma conta para acessar a plataforma CRM.</h2>
          </div>

          <div className="app-login-form">
            <form method="post" action="/">
              <TextField
                type="text"
                label="Nome"
                onChange={(event) => setName(event.target.value)}
                fullWidth
                defaultValue={name}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="email"
                onChange={(event) => setEmail(event.target.value)}
                label={<IntlMessages id="appModule.email"/>}
                fullWidth
                defaultValue={email}
                margin="normal"
                className="mt-0 mb-2"
              />

              <TextField
                type="password"
                onChange={(event) => setPassword(event.target.value)}
                label="Senha"
                fullWidth
                defaultValue={password}
                margin="normal"
                className="mt-0 mb-4"
              />

              <div className="mb-3 d-flex align-items-center justify-content-between">
                <Button variant="contained" onClick={(values) => {
                  dispatch(registerActions.register(values, props.history));
                }} color="primary">
                  Registrar
                </Button>
                <Link to="/login">
                  Eu já tenho uma conta.
                </Link>
              </div>

            </form>
          </div>
        </div>

      </div>

      {
        loading &&
        <div className="loader-view">
          <CircularProgress/>
        </div>
      }
      {message && NotificationManager.error(message)}
      <NotificationContainer/>
    </div>
  )
};


export default SignUp;
