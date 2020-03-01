import React from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'
import Profile from './pages/Admin/Profile'
import  Header from './layout/admin/header'



export default function AdminPrivateRoutes(props) {
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
