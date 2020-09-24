import React from 'react';
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route, Redirect } from "react-router-dom";
import ReactGA from 'react-ga';
import * as loginActions from "../src/redux/actions/login.action";
import { useSelector } from "react-redux";
import "./assets/css/index.css";

// Fas Icons Import
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars,faStreetView, faHome, faShieldAlt, faCalendarCheck } from '@fortawesome/free-solid-svg-icons'

// Pages 
import LandingPage from './pages/LandingPage';
import Register from "./pages/auth/RegisterPage";
import Login from "./pages/auth/LoginPage";
import PasswordForgotPage from './pages/auth/password/PasswordForgotPage';
import PasswordResetPage from './pages/auth/password/PasswordResetPage';

// App
import HomePage from './pages/app/HomePage';
import Profile from "./pages/app/ProfilePage";
import ProfilePage from "./pages/app/profile/ProfilePage";

// Patient
import PatientPage_create from './pages/app/PatientPage/Patient_create';
import PatientPage_index from './pages/app/PatientPage/Patient_index';
import PatientPage_update from './pages/app/PatientPage/Patient_update';

// Appointment
import AppointmentPage_create from './pages/app/AppointmentPage/Appointment_create';
import AppointmentPage_index from './pages/app/AppointmentPage/Appointment_index';
import AppointmentPage_update from './pages/app/AppointmentPage/Appointment_update';

// CRUD template
import CRUDPage_create from './pages/app/CRUDPage/CRUD_create';
import CRUDPage_index from './pages/app/CRUDPage/CRUD_index';
import CRUDPage_update from './pages/app/CRUDPage/CRUD_update';

import LoginRegisterPage from './pages/auth/LoginRegisterPage';

// Start Icons
library.add(fab, faBars, faStreetView, faHome, faShieldAlt, faCalendarCheck)

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const App = () => {
  useSelector(({ loginReducer }) => loginReducer);
  const SecuredRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        // ternary condition

        loginActions.isLoggedIn() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );

  return (
        <Switch>
          <Route exact path="/" component={LandingPage}/>

          {/* Auth Pages */}
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={LoginRegisterPage} />
          <Route exact path="/login/:notify?" component={Login} />
          <Route exact path="/password-reset/:token" component={PasswordResetPage} />
          <Route exact path="/password/forgot" component={PasswordForgotPage} />

          {/* User Pages */}
          <SecuredRoute exact path="/profile" component={ProfilePage} />
          <SecuredRoute exact path="/profile/update" component={Profile} />
          <SecuredRoute exact path="/home" component={HomePage} />

          {/* Patient Pages */}
          <SecuredRoute exact path="/pacientes/update/:id" component={PatientPage_update} />
          <SecuredRoute exact path="/pacientes/new" component={PatientPage_create} />
          <SecuredRoute exact path="/pacientes/" component={PatientPage_index} />

          {/* Appointment Pages */}
          <SecuredRoute exact path="/consultas/update/:id" component={AppointmentPage_update} />
          <SecuredRoute exact path="/consultas/new" component={AppointmentPage_create} />
          <SecuredRoute exact path="/consultas/" component={AppointmentPage_index} />

          {/* Crud Pages */}
          <SecuredRoute exact path="/crud/update/:id" component={CRUDPage_update} />
          <SecuredRoute exact path="/crud/new" component={CRUDPage_create} />
          <SecuredRoute exact path="/crud/" component={CRUDPage_index} />
        </Switch>
  );
}

export default App;