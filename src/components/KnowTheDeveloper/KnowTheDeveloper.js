import React from 'react';
import classes from './KnowTheDeveloper.css';

const KnowTheDeveloper = () => {
    return (
        <div className={classes.View}>
            <img src={require("../../assets/me.jpg")} className={classes.Me}/>
            <p className={classes.Intro}>I am Adesh Khanna</p>
            <p className={classes.Intro}>and i am a web and mobile developer</p>
            <br />
            <p className={classes.Intro}>some of my skills are - </p>
            <br />
            <ul className={classes.Skills}>
                <li>ReactJS</li>
                <li>NodeJS</li>
                <li>Laravel</li>
                <li>Flutter</li>
                <li>Adobe After effects</li>
            </ul>
            <br />
            <p className={classes.Intro}>catch me on - </p>
            <ul className={classes.Social}>
                <li><a href="#"></a><img src={require("../../assets/logo-facebook.svg")}/></li>
                <li><a href="#"></a><img src={require("../../assets/logo-instagram.svg")}/></li>
                <li><a href="#"></a><img src={require("../../assets/logo-linkedin.svg")}/></li>
                <li><a href="#"></a><img src={require("../../assets/logo-stackoverflow.svg")}/></li>
            </ul>
        </div>
    );
};

export default KnowTheDeveloper;
