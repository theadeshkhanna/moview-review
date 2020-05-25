import React from 'react';
import classes from './Landing.css';
import {Link} from "react-router-dom";

const Landing = () => {
    return (
        <div className={classes.Landing}>
            <div className={classes.Head}>
                <h2>Welcome to MovieReview, </h2>
                <br />
                <h1>Search and view reviews of 10,000+ movies.</h1>
                <br />
                <h3>SignUp for free and be started..</h3>
            </div>
            <Link to="/sign-up" className={classes.LandButton}>Sign Up</Link>
        </div>
    );
};

export default Landing;
