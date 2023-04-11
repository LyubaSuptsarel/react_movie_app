import Movie from './Movie';


function MovieAbout(props) {
    const {movie = {}} = props

    return <section className="movies container">
               {movie.length ? (movie.map(mov => 
                    <Movie 
                        key={mov.id}
                        
                        {...mov} 
                    />)) : (<h4 className="text">Nothing found</h4>)}
    </section>
}

export default MovieAbout;