import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home'
import DashboardOnePrivateRoutes from './DashboardOnePrivateRoutes'
import DashboardTwoPrivateRoutes from './DashboardTwoPrivateRoutes'
import LoginDashboardOne from './pages/DashboardOne/Auth/Login'
import LoginDashboardTwo from './pages/DashboardTwo/Auth/Login'
import {Gaurd} from './Gaurd'


const Routes = (props) => {
    console.log(props)
    return (
        <Switch>
        <Route  exact path="/" render={ props=>(
       <Redirect to={{pathname: '/home'}} />
         )} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard-one/login" component={LoginDashboardOne} />
          <Route path="/dashboard-two/login" component={LoginDashboardTwo} />
          <Gaurd  path="/dashboard-one" token='dashboardOne' routeRedirect='/dashboard-one/login' component={DashboardOnePrivateRoutes} /> 
          <Gaurd  path="/dashboard-two" token='dashboardTwo' routeRedirect='/dashboard-two/login' component={DashboardTwoPrivateRoutes} /> 

          </Switch>
    );
}

export default Routes;
