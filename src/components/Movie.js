function Movie(props) {
    if(!props.title) {
        return <p className="text container">Movie not found</p>
    }
    const {
        title: title,
        release_date: year,
        id: id,
        popularity: rating,
        poster_path: poster,
        overview: about,
        backdrop_path: background,
    } = props;

    return (
        <div className="movie" id={id}>
           <div className="bg"  style={{
            backgroundImage: `url( https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${background})`,
           }}></div>
        <div className="container single-movie">
            <div className="card-image">
                    {
                poster === null ? <img className="movie-img" src={`https://via.placeholder.com/210x320&text=${title}`} alt="poster" /> 
                : <img className="movie-img" src = {`https://image.tmdb.org/t/p/w200/${poster}`} alt="poster" />
                }
            </div>
            <div className="card-content">
            <h5 className="text">{title}</h5>
            <span className="text single-text">Reliesed date: {year}</span>
            <span className="text single-text">Rating: {rating}</span>
            <p className="text single-text">{about}</p>
        </div>
        </div>
        </div>
    )
}

export default Movie;