import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export  const Gaurd = ({ component: Component, token:Token, ...rest}) => (
    <Route {...rest} render={props => (
        localStorage.getItem(Token)
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/', state: { from: props.location } }} />
    )} />
)
