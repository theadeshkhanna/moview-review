import React from 'react';

const Bookmark = (props) => {
    return (
        <div>
             <p>{props.item.title}</p>
             <img src={props.item.poster} alt="movie poster" />
             <p>{props.item.runtime}</p>
             <p>{props.item.rating}</p>
        </div>
    );
};

export default Bookmark;
