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
                <li className={classes.RJs}>ReactJS</li>
                <li className={classes.NJs}>NodeJS</li>
                <li className={classes.Lara}>Laravel</li>
                <li className={classes.Flut}>Flutter</li>
                <li className={classes.Ae}>Adobe After effects</li>
            </ul>
            <br />
            <p className={classes.Intro}>catch me on - </p>
            <ul className={classes.Social}>
                <li className={classes.Facebook}><a href="https://www.facebook.com/profile.php?id=100005620998347"><img src={require("../../assets/logo-facebook.svg")}/></a></li>
                <li className={classes.Instagram}><a href="https://www.instagram.com/the_adesh_khanna/"><img src={require("../../assets/logo-instagram.svg")}/></a></li>
                <li className={classes.Linkedin}><a href="https://www.linkedin.com/in/adesh-khanna-66060216b"><img src={require("../../assets/logo-linkedin.svg")}/></a></li>
                <li className={classes.Stackoverflow}><a href="https://stackoverflow.com/users/11675539/adesh-khanna?tab=profile"><img src={require("../../assets/logo-stackoverflow.svg")}/></a></li>
                <li className={classes.Github}><a href="https://github.com/theadeshkhanna"><img src={require("../../assets/logo-github.svg")}/></a></li>
            </ul>
        </div>
    );
};

export default KnowTheDeveloper;
