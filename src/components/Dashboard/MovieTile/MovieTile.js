import React, {Component} from 'react';
import { toJS } from "mobx";
import List from "../../UI/List/List";
import { observer, inject } from 'mobx-react';
import Spinner from "../../UI/Spinner/Spinner";

@inject('BookmarkStore')
@observer
class MovieTile extends Component {

    AddBookmarkHandler = (movieObject) => {
        this.props.BookmarkStore.AddBookmark(movieObject);
    };

    render() {
        const movieObject = toJS(this.props.movie);

        let tile = null;

        if (this.props.BookmarkStore.isloading === false) {
            tile = (
                <div>
                    {console.log(movieObject)}
                    <h2>{movieObject.Title}</h2>
                    <img src={movieObject.Poster} alt="movie poster" />
                    <List content={movieObject.Genre.split(", ")}/>
                    <List content={movieObject.Actors.split(", ")}/>
                    <p>{movieObject.Plot}</p>
                    <Spinner />
                    <br />
                    <br />
                    <br />
                </div>
            );
        } else {
            tile = (
                <div>
                    {console.log(movieObject)}
                    <h2>{movieObject.Title}</h2>
                    <img src={movieObject.Poster} alt="movie poster" />
                    <List content={movieObject.Genre.split(", ")}/>
                    <List content={movieObject.Actors.split(", ")}/>
                    <p>{movieObject.Plot}</p>
                    <button onClick={() => this.AddBookmarkHandler(movieObject)}>Add Bookmark</button>
                    <br />
                    <br />
                    <br />
                </div>
            );
        }

        return tile;
    }
}

export default MovieTile;
