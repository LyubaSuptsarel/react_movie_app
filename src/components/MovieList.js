import MovieItem from './MovieItem';


function MovieList(props) {
    const {movieList = []} = props

    return <section className="movies container">
               {movieList.length ? (movieList.map(movie => 
                    <MovieItem 
                        key={movie.id}
                        readMoreHandler={props.readMoreHandler}
                        {...movie} 
                    />)) : (<h4 className="text">Nothing found</h4>)}
    </section>
}

export default MovieList;