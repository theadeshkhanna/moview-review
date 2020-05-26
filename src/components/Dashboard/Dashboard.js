import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import classes from './Dashboard.css';
import MovieTile from "./MovieTile/MovieTile";
import Spinner from "../UI/Spinner/Spinner";

@inject('MovieStore')
@observer
class Dashboard extends Component {

    render() {

        let tile = null;

        if (this.props.MovieStore.isloading === false) {
            tile = (
                <div className={classes.LeftItem}>
                    <Spinner />
                </div>
            );
        } else if (this.props.MovieStore.isloading === true) {
            tile = (
                <div className={classes.LeftItem}>
                    <MovieTile movie={this.props.MovieStore.movie}/>
                </div>
            );
        } else {
            tile = <img src={require("../../assets/search.png")} alt="search" className={classes.Search}/>
        }

        return (
            <div className={classes.Content}>
                <form onSubmit={(e) => this.props.MovieStore.fetchMovie(e)} className={classes.Dashboard}>
                    <input type="text" placeholder="name of movie" name="movie"/>
                    <button>Find</button>
                </form>
                {tile}
            </div>
        );
    }
}

export default Dashboard;
