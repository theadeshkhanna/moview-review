import React, { Component } from 'react';
import { observer,inject } from "mobx-react";
import classes from './Dashboard.css';
import MovieTile from "./MovieTile/MovieTile";
import Spinner from "../UI/Spinner/Spinner";

@inject('MovieStore')
@observer
class Dashboard extends Component {

    state = {
        exists: false,
        message: 'Please fill details then submit'
    };

    handleMovieSubmit = (e) => {
        e.preventDefault();

        let movieName = e.target.movie.value;

        if (movieName === '') {
            this.setState({
                exists: true
            });
        } else {

            if (movieName.indexOf(' ') >= 0) {
                movieName = movieName.split(' ').join('+');
            }

            const payload = {
                "name" : movieName
            };

            this.props.MovieStore.fetchMovie(payload);
        }
    };

    render() {

        let tile = null;

        if (this.props.MovieStore.isloading === false) {
            tile = (
                <div className={classes.LeftItem}>
                    <Spinner />
                </div>
            );
        } else if (this.props.MovieStore.isloading === true) {

            if (this.props.MovieStore.movie === null) {
                tile = (
                    <div>
                        <img src={require("../../assets/search.png")} alt="search" className={classes.Search}/>
                        <p className={classes.Error}>{this.props.MovieStore.error ? this.props.MovieStore.error : null}</p>
                    </div>
                );
            } else {
                tile = (
                    <div className={classes.LeftItem}>
                        <MovieTile movie={this.props.MovieStore.movie}/>
                    </div>
                );
            }
        } else {
            tile = <img src={require("../../assets/search.png")} alt="search" className={classes.Search}/>
        }

        return (
            <div>
                <div className={classes.Content}>
                    <form onSubmit={(e) => this.handleMovieSubmit(e)} className={classes.Dashboard}>
                        <input type="text" placeholder="name of movie" name="movie"/>
                        <button>Find</button>
                    </form>
                    {tile}
                </div>
                <div>
                    <p className={classes.Error}>{this.state.exists ? this.state.message : null}</p>
                </div>
            </div>
        );
    }
}

export default Dashboard;
