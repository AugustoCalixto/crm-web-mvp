import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import asyncComponent from '../../util/asyncComponent';

const Routes = ({match}) =>
  <Switch>
    <Route path={`${match.url}`}
          component={asyncComponent(() => import('./HomePage'))}/>
    <Route path={`${match.url}/pacientes`}
      component={asyncComponent(() => import('./CustomerPage'))}/>     
    <Route path={`${match.url}/consultas`}
      component={asyncComponent(() => import('./AppointmentPage'))}/>     
    <Route path={`${match.url}/informacoes`}
      component={asyncComponent(() => import('./AboutPage'))}/>
    <Route path={`${match.url}/sample-page`}
          component={asyncComponent(() => import('./SamplePage'))}/>
    {/*<Route component={asyncComponent(() => import("app/routes/extraPages/routes/404"))}/>*/}
  </Switch>;


export default withRouter(Routes);

