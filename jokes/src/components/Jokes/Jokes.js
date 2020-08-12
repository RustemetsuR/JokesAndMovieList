import React from 'react';
import Joke from '../Joke/Joke';

const Jokes = props => {
    const jokeList = props.jokes.map(joke =>{
        return(
          <Joke key={joke.id} title={joke.joke}/>
        )
      });
    return (
        <div>
            {jokeList}
        </div>
    )
};

export default Jokes;