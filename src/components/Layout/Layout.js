import React, { Component, Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import Landing from '../Landing/Landing';
import Dashboard from "../Dashboard/Dashboard";
import { Switch, Route} from 'react-router-dom';
import SignIn from "../Auth/SignIn/SignIn";
import { observer, inject } from 'mobx-react';
import SignUp from "../Auth/SignUp/SignUp";

@inject('AuthStore')
@observer
class Layout extends Component {

    render() {
        return(
            <Fragment>
                <Navigation state={this.props.AuthStore.auth} />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/sign-in" exact component={SignIn} />
                    <Route path="/sign-up" exact component={SignUp} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
