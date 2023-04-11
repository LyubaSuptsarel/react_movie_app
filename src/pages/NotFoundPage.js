import { Link } from "react-router-dom";

function NotFoundPage() {
    return <div className="container main">
                <h3 className="text">This page not found</h3>
                <div>
                    <Link to="/react_movie_app" className="text hover"><i className="material-icons hover tiny">arrow_back</i>Home page</Link>
                </div>
    </div>
}

export { NotFoundPage };