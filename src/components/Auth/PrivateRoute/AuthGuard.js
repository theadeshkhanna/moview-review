import React from 'react';
import { Route, Redirect } from "react-router";
import { isAuthenticated } from "./Authenticate";

const Authenticate = ({component: Component , ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (isAuthenticated === true) {
                    return <Component {...props} />
                } else {
                    return <Redirect to={{
                        pathname: "/sign-in",
                        state: { from: props.location }
                    }} />
                }
            }
        }/>
    );
};

export default Authenticate;
