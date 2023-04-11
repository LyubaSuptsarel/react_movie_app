import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import InputSearch from '../components/InputSearch';
import Movie from '../components/Movie';

const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends React.Component {
    state = {
        show: "index",
        movieList : [],
        movie: {},
        loading: true,
    }
    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=2`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieList: data.results ? data.results : [],
                    loading: false});
                });
    }
    searchMovies = (stringResults) => {
        this.setState({loading: true})
        let url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${stringResults}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movieList: data.results ? data.results : [],
                    loading: false});
                });
    }
    handleReadMore = (id) => {
        this.setState({
            loading: true,
            show: "movie"
        });
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    movie: data.title ? data : {},
                    loading: false
                });
            });
    }
    render () {
        const { movieList, loading } = this.state;
        return <main className="main">
            <h4 className="text container">Movies for your leisure</h4>
            <InputSearch searchMovies={this.searchMovies} />
            {this.state.loading ? 
                (<Preloader />)
                : this.state.show === "movie" ?
                (<Movie {...this.state.movie} />)
                : (<MovieList movieList={movieList}
                readMoreHandler={this.handleReadMore} />)
            }
        </main>
    }
}

export { Home };