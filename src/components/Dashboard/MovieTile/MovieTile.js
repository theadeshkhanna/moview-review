import React, {Component} from 'react';
import { toJS } from "mobx";
import List from "../../UI/List/List";
import { observer, inject } from 'mobx-react';
import Spinner from "../../UI/Spinner/Spinner";
import classes from './MovieTile.css';

@inject('BookmarkStore')
@observer
class MovieTile extends Component {

    AddBookmarkHandler = (movieObject) => {
        this.props.BookmarkStore.AddBookmark(movieObject);
    };

    render() {
        const movieObject = toJS(this.props.movie);

        let tile = null;

        if (this.props.BookmarkStore.error !== null) {
            tile = (
                <p className={classes.Error}>{this.props.BookmarkStore.error}</p>
            );
        } else {
            if (this.props.BookmarkStore.isloading === false) {
                tile = (
                    <Spinner />
                );
            } else {
                tile = (
                    <div className={classes.Tile}>
                        <div className={classes.Left}>
                            <h2 className={classes.Head}>{movieObject.Title}</h2>
                            <div className={classes.Small}>
                                <p>Runtime: {movieObject.Runtime}</p>
                                <p>ImdbRating: {movieObject.imdbRating}/10</p>
                            </div>
                            <List content={movieObject.Genre.split(", ")}/>
                            <List content={movieObject.Actors.split(", ")}/>
                            <div className={classes.Big}>
                                <p>{movieObject.Plot}</p>
                            </div>
                            {
                                this.props.bookmarked ?
                                <button className={classes.Disabled} disabled>Added to Wishlist</button> :
                                <button onClick={() => this.AddBookmarkHandler(movieObject)} className={classes.Submit}>Add To WatchList</button>
                            }
                        </div>
                        <div className={classes.Right}>
                            <img src={movieObject.Poster} alt="movie poster" className={classes.Poster}/>
                        </div>
                    </div>
                );
            }
        }

        return tile;
    }
}

export default MovieTile;
