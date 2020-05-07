import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.css';

const Navigation = (props) => {
    return (
        <div className={classes.Navigation}>
            <nav className={classes.Nav}>
                <ul className={classes.LeftNav}>
                    <li><Link to="/">MovieReview</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/know-the-developer">Know the Developer</Link></li>
                </ul>
                <ul className={classes.RightNav}>
                    <li><Link to="/sign-in">Sign In</Link></li>
                    <li><Link to="/sign-out">Sign Up</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
