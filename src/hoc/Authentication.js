import React from 'react';
import { observer, inject } from 'mobx-react';
import { Route, Redirect } from "react-router";

const Authenticate = inject('AuthStore')(observer((component , ...rest) => {
    return (
        <Route
            {...rest}
            render={props => props.AuthStore.isAuthenticated() ? (
                <component {...props} />
            ) : (
                <Redirect
                to={{
                    pathname: "/sign-in",
                    state: { from: props.location }
                }}/>
        )
            }/>
    );
}));

export default Authenticate;
