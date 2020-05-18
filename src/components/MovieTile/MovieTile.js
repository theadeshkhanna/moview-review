import React from 'react';
import { toJS } from "mobx";
import List from "../UI/List/List";

const MovieTile = (props) => {

    const movieObject = toJS(props.movie);

    return (
        <div>
            {console.log(movieObject)}
            <h2>{movieObject.Title}</h2>
            <img src={movieObject.Poster} alt="movie poster" />
            <List content={movieObject.Genre.split(", ")}/>
            <List content={movieObject.Actors.split(", ")}/>
            <p>{movieObject.Plot}</p>

        </div>
    );
};

export default MovieTile;
