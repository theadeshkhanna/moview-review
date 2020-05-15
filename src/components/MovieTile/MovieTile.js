import React from 'react';
import { toJS } from "mobx";

const MovieTile = (props) => {
    return (
        <div>
            <img src={toJS(props.movie.Poster)} />
        </div>
    );
};

export default MovieTile;
