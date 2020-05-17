import React from 'react';
import { toJS } from "mobx";

const MovieTile = (props) => {

    const movieObject = toJS(props.movie);

    let genre = movieObject.Genre;

    return (
        <div>
            {console.log(movieObject)}
            <h2>{movieObject.Title}</h2>
            <img src={movieObject.Poster} alt="movie poster" />
            <p>{ genre }</p>
            {console.log(genre.split(", "))}
        </div>
    );
};

export default MovieTile;
