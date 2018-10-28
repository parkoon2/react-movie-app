import React from 'react'
import './Movie.css'
import propTypes from 'prop-types'

class Movie extends React.Component {

    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string.isRequired,
    }

    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <MoviePoster poster={this.props.poster}/>
            </div>
        )
    }
}

// class 안에 static으로 해주는 것과 동일!
// Movie.propTypes = {
//     title: propTypes.string,
//     poster: propTypes.string,
// }

class MoviePoster extends React.Component {
    render () {
        return (
            <img src={this.props.poster} alt=""/>
        )
    }
}

export default Movie