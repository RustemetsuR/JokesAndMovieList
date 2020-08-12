import React from 'react';
import './Joke.css';

const Joke = props => {
    return (
        <div>
            <h2 className="joke">{props.title}</h2>
        </div>
    )
};

export default Joke;