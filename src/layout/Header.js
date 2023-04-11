import logo from '../assets/img/logo.png';
import { Link } from "react-router-dom";
import { useTheme } from '../components/useTheme';

function Header() {
  const { theme, setTheme} = useTheme()

  const handleLightThemeClick = () => {
    setTheme('light')
  }

  const handleDarkThemeClick = () => {
    setTheme('dark')
  }

    return <nav className="header" id="header">
    <div className="nav-wrapper container">
      <div className='logo'>
        <img src={logo} className="logo__img" alt="logo" />
        <a href="#!" className="text logo__text">PopCornMovies</a>
      </div>
      <ul className="right">
        <li><a href="#" className="text" onClick={handleLightThemeClick}><i className="material-icons hover">brightness_low</i></a></li>
        <li><a href="#" className="text"  onClick={handleDarkThemeClick}><i className="material-icons hover">brightness_3</i></a></li>
        <li><Link to="/react_movie_app/profile" className="hover text">Profile</Link></li>
      </ul>
    </div>
  </nav>
}


export default Header;


