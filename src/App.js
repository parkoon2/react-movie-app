import React, { Component } from 'react';
import './App.css';
import Movie from './Movie'

class App extends Component {

  // Render: componentWillMount() -> render() ->  componentDidMount()
  // Update: componentWillRecieveProps() -> shouldComponentUpdate() === true -> componentWillUpdate() -> render() -> componentDidUpdate() 

  state = {

  }

  componentWillMount() {
    console.log('componentWillMount')
    // api 작업 요청!
  }
  componentDidMount() {
    console.log('componentDidMount')

    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: '매트릭스',
            poster: 'http://2korea.hani.co.kr/files/attach/images/64/981/316/001.jpg',
          },
          {
            title: '악마를 보았다',
            poster: 'https://t1.daumcdn.net/cfile/tistory/1707070D4C7271CCA9',
          },
          {
            title: '집으로',
            poster: 'https://upload.wikimedia.org/wikipedia/ko/thumb/c/ce/%EC%A7%91%EC%9C%BC%EB%A1%9C_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg/250px-%EC%A7%91%EC%9C%BC%EB%A1%9C_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
          }
        ]
      })
    }, 3000)
  }

  _renderMovies = () => {
    let movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />
    })
    return movies
  }
  render() {
    console.log('render')
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;
