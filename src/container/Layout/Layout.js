import React, { Component, Fragment } from 'react';
import Navigation from '../../components/Navigation/Navigation';
import Landing from '../../components/Landing/Landing';
import Dashboard from "../../components/Dashboard/Dashboard";
import { Switch, Route} from 'react-router-dom';
import SignIn from "../../components/Auth/SignIn/SignIn";
import { observer, inject } from 'mobx-react';
import SignUp from "../../components/Auth/SignUp/SignUp";
import Authenticate from "../../components/Auth/PrivateRoute/AuthGuard";
import Bookmarks from "../../components/Bookmarks/Bookmarks";

@inject('AuthStore')
@observer
class Layout extends Component {

    render() {

        return(
            <Fragment>
                <Navigation />
                <Switch>
                    <Route path="/" exact component={Landing} />
                    <Route path="/sign-in" exact component={SignIn} />
                    <Route path="/sign-up" exact component={SignUp} />
                    <Authenticate path="/dashboard" exact component={Dashboard} />
                    <Authenticate path="/my-bookmarks" exact component={Bookmarks} />
                </Switch>
            </Fragment>
        );
    }
}

export default Layout;
