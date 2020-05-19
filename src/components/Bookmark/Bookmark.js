import React from 'react';

const Bookmark = (props) => {
    return (
        <div>
             <p>{props.item.Title}</p>
             <img src={props.item.Poster} alt="movie poster" />
             <p>{props.item.Runtime}</p>
             <p>{props.item.Rating}</p>

        </div>
    );
};

export default Bookmark;
