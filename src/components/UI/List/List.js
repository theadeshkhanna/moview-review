import React from 'react';
import classes from './List.css';

const List = (props) => {
    return (
        <ul className={classes.List}>
            {
                props.content.map((item, i) => {
                    return <li key={i} className={classes.ListItem}>{item}</li>
                })
            }
        </ul>
    );
};

export default List;
