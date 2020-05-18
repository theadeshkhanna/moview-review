import React from 'react';

const List = (props) => {
    return (
        <ul>
            {
                props.content.map((item, i) => {
                    return <li key={i}>{item}</li>
                })
            }
        </ul>
    );
};

export default List;
