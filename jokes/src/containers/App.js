import React, { useState, useEffect } from 'react';
import './App.css';
import Jokes from '../components/Jokes/Jokes';
import Button from '../components/Button/Button';

const App = () => {
  const url = 'https://api.chucknorris.io/jokes/random';
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    getJokesFromUrl();
  }, [])

  const getJokesFromUrl = async () => {
    const jokesCopy = [...jokes];
    jokesCopy.length = 0;
    for (let i = 0; i < 3; i++) {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        jokesCopy.push({
          joke: joke.value,
          id: joke.id,
        });
      }
    }
    setJokes(jokesCopy);
  }


  return (
    <div className="App">
      <div className="inp-div">
        <Button getJokes={getJokesFromUrl} />
      </div>
      <Jokes jokes={jokes} />
    </div>
  );
}

export default App;
