import React, {Component} from 'react';
import { toJS } from "mobx";
import List from "../UI/List/List";
import { observer, inject } from 'mobx-react';

@inject('BookmarkStore')
@observer
class MovieTile extends Component {

    AddBookmarkHandler = (movieObject) => {
        this.props.BookmarkStore.AddBookmark(movieObject);
    };

    render() {
        const movieObject = toJS(this.props.movie);

        return (
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
}

export default MovieTile;
