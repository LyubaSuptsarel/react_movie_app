import React from 'react';
import MovieList from '../components/MovieList';
import Preloader from '../components/Preloader';
import { Link } from 'react-router-dom';
import Movie from '../components/Movie';

const API_KEY = process.env.REACT_APP_API_KEY;

class Latest extends React.Component {
    state = {
        show: "index",
        movieList : [],
        movie: {},
        loading: true,
    }
    componentDidMount() {
        let url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=2`;
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
            <div className='container'>
            <Link to="/react_movie_app" className="text hover"><i className="material-icons hover tiny">arrow_back</i>Home page</Link>
            </div>
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

export { Latest };