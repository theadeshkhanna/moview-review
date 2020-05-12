import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';
import { withRouter } from "react-router-dom";
import { observer, inject } from 'mobx-react';

@inject('AuthStore')
@observer
class Navigation extends Component {

    render() {

        let navi = null;

        if (this.props.AuthStore.auth) {
            navi = (
                <ul className={classes.RightNav}>
                    <li onClick={() => this.props.AuthStore.signOut(this.props)}>Sign Out</li>;
                </ul>
            );
        } else {
            navi = (
                <ul className={classes.RightNav}>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    <li><Link to="/sign-up">Sign Up</Link></li>
                </ul>
            );
        }

        return (
            <div className={classes.Navigation}>
                <nav className={classes.Nav}>
                    <ul className={classes.LeftNav}>
                        <li><Link to="/">MovieReview</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/know-the-developer">Know the Developer</Link></li>
                    </ul>
                    {navi}
                </nav>
            </div>
        );
    }
}

export default withRouter(Navigation);
