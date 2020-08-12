import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {

     shouldComponentUpdate(nextProps){
        console.log('[Post] shouldComponentUpdate');
        return(this.props.title !== nextProps.title);
    }

    componentDidUpdate(){
        console.log('Movie did update')
    }

    render() {
        return (
            <div className='movie-div'>
                <input className="movie-title" value={this.props.title} onChange={this.props.change} />
                <button className="movie-del-btn" onClick={this.props.del}>Del</button>
            </div>
        );
    }
}

export default Movie;