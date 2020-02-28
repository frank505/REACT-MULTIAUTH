import React from 'react';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './pages/Home'
import UserPrivateRoutes from './UserPrivateRoutes'
import AdminPrivateRoutes from './AdminPrivateRoutes'
import {Gaurd} from './Gaurd'


const Routes = (props) => {
    console.log(props)
    return (
        <Switch>
        <Route  exact path="/" render={ props=>(
       <Redirect to={{pathname: '/home'}} />
         )} />
          <Route path="/home" component={Home} />
          <Gaurd  path="/user" token='user' component={UserPrivateRoutes} /> 
          <Gaurd  path="/admin" token='admin' component={AdminPrivateRoutes} /> 

          </Switch>
    );
}

export default Routes;
