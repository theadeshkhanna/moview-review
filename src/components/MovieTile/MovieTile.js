import React from 'react';
import { toJS } from "mobx";

const MovieTile = (props) => {

    const movieObject = toJS(props.movie);

    return (
        <div>
            {console.log(movieObject)}
            <h2>{movieObject.Title}</h2>
            <img src={movieObject.Poster} alt="movie poster"/>
            <p>{movieObject.Genre} </p>
        </div>
    );
};

export default MovieTile;
