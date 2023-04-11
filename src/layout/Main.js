import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import InputSearch from '../components/InputSearch';
//import MovieSlider from '../components/MovieSlider';

class Main extends React.Component {
    state = {
        movieList : []
    }
    componentDidMount() {
        let url = 'https://api.themoviedb.org/3/movie/popular?api_key=ebc687e794bde48877175af742341af2';
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.results}))
    }
    searchMovies = (stringResults) => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=ebc687e794bde48877175af742341af2&query=${stringResults}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.results}))
    }
    render () {
        const { movieList } = this.state;
        return <main className="main container">
            <InputSearch searchMovies={this.searchMovies} />
            <div>
            <h4 className="text">Popular</h4>
            
            {
                movieList.length ? (<MovieList movieList={this.state.movieList} />)
                : <Preloader />
            }
            </div>
        </main>
    }
}


export default Main;