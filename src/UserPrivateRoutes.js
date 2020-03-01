import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Profile from './pages/User/Profile'
import  Header from './layout/user/header'



export default function UserPrivateRoutes(props) {
    return (
        <div>
            <Header props={props}/>
         <Switch>
    <Route exact path={`${props.match.path}/view-profile`}  component={Profile} />
    <Route  exact path={props.match.path} render={ props=>(
       <Redirect to={{pathname: `${props.match.path}/view-profile` }} />
         )} />
 
    </Switch>     
        </div>
    )
}
