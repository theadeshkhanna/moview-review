import React from 'react';
import classes from './About.css';

const About = () => {
  return (
      <div className={classes.About}>
          <img src={require('../../assets/about.png')} alt="about" className={classes.Image}/>
          <div className={classes.Content}>
              <p>
                  This is currently the first version of MovieReview App.
              </p>
              <p>
                  <span className={classes.React}><a href="https://reactjs.org" target="_blank"> ReactJS</a></span>
                  &nbsp;is used as a Javascript library to make UI
                  and the server side is written using
                  <span className={classes.Laravel}><a href="https://laravel.com/" target="_blank"> Laravel</a></span>.
              </p>
              <p>
                  For managing state
                  <span className={classes.Mobx}><a href="https://mobx.js.org/README.html" target="_blank"> Mobx </a></span>
                  is used and the database used is
                  <span className={classes.Omdb}><a href="http://www.omdbapi.com/" target="_blank"> omdb api</a></span>.
              </p>
          </div>
      </div>
  );
};

export default About;
