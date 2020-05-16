import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import classes from './Dashboard.css';
import MovieTile from "../MovieTile/MovieTile";
import Spinner from "../UI/Spinner/Spinner";

@inject('MovieStore')
@observer
class Dashboard extends Component {
    render() {

        let name = this.props.history.location.search.split('=')[1].replace("%20", " ");

        let tile = null;

        if (this.props.MovieStore.isloading === false) {
            tile = <Spinner />
        } else {
            tile = (
                <MovieTile movie={this.props.MovieStore.movie}/>
            );
        }

        return (
            <div>
                <h2 className={classes.Head}>Hey, {name}</h2>
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
