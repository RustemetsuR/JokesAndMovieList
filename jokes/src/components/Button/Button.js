import React from 'react';

const Button = props => {
    return (
        <>
            <button onClick={props.getJokes}>Get Jokes</button>
        </>
    )
};

export default Button;