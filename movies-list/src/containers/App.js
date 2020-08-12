import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.movieList = null;
  }

  state = {
    movies: [],
    val: '',
  }

  add = () => {
    if (this.state.val !== '') {
      const time = new Date();
      const sec = time.getSeconds();
      const miliSec = time.getMilliseconds();
      const moviesCopy = [...this.state.movies];
      moviesCopy.push({
        id: sec + '' + miliSec,
        title: this.state.val,
      })
      this.setState({ movies: moviesCopy });
    }
  }

  del = id => {
    const index = this.state.movies.findIndex(m => m.id === id);
    const moviesCopy = [...this.state.movies];
    moviesCopy.splice(index, 1);
    this.setState({ movies: moviesCopy });
    console.log(this.state.movies);
  }

  change = (event, id) => {
    const index = this.state.movies.findIndex(m => m.id === id);
    const moviesCopy = [...this.state.movies];
    const movieCopy = { ...moviesCopy[index] };
    movieCopy.title = event.target.value;
    moviesCopy[index] = movieCopy;

    this.setState({ movies: moviesCopy });
  }

  render() {
    this.movieList = this.state.movies.map(movie => {
      return (
        <Movie key={movie.id} title={movie.title} del={this.del} change={event => this.change(event, movie.id)} />
      );
    });
    return (
      <div className="App">
        <input className="form-inp" placeholder="Movie..." onChange={event => this.state.val = event.target.value} />
        <button className="add-btn" onClick={this.add}>Add</button>
        <div>
          {this.movieList}
        </div>

      </div>
    );
  }
}

export default App;
