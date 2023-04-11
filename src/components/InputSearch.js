import { useState } from "react";
import { Link } from "react-router-dom";

const InputSearch = (props) => {
    
    const [search, setSearch] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            props.searchMovies(search);
        }
    }

    return <div className="row container">
        <div className="col s12">
            <div className="choose">
                <Link to="/Latest" className="choose-button"><i className="material-icons icon">camera</i><p className="text">Latest</p></Link>
                <Link to="/Toprated" className="choose-button"><i className="material-icons icon">mood</i><p className="text">Top Rated</p></Link>
                <Link to="/Popular" className="choose-button"><i className="material-icons icon">storage</i><p className="text">Popular</p></Link>
            </div>
            <div className="input-field">
                <input
                    type="text"
                    className="validate"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleKey}
                    placeholder="Enter movie title..."
                />
                <button onClick={() => props.searchMovies(search)}
                    type="button"
                    className="input-btn"><i className="material-icons hover text">search</i>
                </button>
            </div>
        </div>
    </div>
}

export default InputSearch;