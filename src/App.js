import React, { Component } from 'react';
import classes from './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './container/Layout/Layout';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
