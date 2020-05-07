import React, { Component, Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import Dashboard from "../Dashboard/Dashboard";
import { Switch, Route} from 'react-router-dom';

class Layout extends Component {

    render() {
        return(
            <Fragment>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
