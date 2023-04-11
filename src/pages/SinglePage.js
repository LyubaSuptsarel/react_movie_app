import React from 'react';
import Movie, { id } from '../components/Movie';
import Preloader from '../components/Preloader';
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY;

class SinglePage extends React.Component {
    state = {
        movie : {},
        loading: true,
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
        const { movie, loading } = this.state;
        return <main className="main">
        <div className='container'>
            <Link to="/" className="text hover"><i className="material-icons hover tiny">arrow_back</i>Home page</Link>
        </div>
            {this.state.loading ? 
                (<Preloader />)
                : (<Movie {...this.state.movie} />)
            }
        </main>
    }
}

export { SinglePage };