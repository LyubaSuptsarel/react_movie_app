function MovieItem(props) {
    const {
        title: title,
        release_date: year,
        id: id,
        popularity: rating,
        poster_path: poster,
        overview: about,
    } = props;

    return <div className="card movie" id={id}>
        <div className="activator card-image waves-effect waves-block waves-light">
                    {
                poster === null ? <img className="movie-img activator" src={`https://via.placeholder.com/210x320&text=${title}`} alt="poster" /> 
                : <img className="movie-img activator" src = {`https://image.tmdb.org/t/p/w200/${poster}`} alt="poster" />
            }
        </div>
        <div className="card-content">
            <span className="card-title grey-text text-darken-4">{title}<a href="#" className="right" onClick={(event) => {
                event.preventDefault(); props.readMoreHandler(id)}}><i className="material-icons">more_vert</i></a></span>
            <span className="left">{year}</span><span className="right">{rating}</span>
        </div>
        <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{title}<i className="material-icons right">close</i></span>
            <p>{about}</p>
        </div>
        </div>
}


export default MovieItem;