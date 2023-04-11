import React from 'react';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import MovieItem from './MovieItem';


class MovieSlider extends React.Component {  
    render() {  
          return (  
            <div>  
                <div className='container-fluid' >            
                <OwlCarousel items={3}  
                className="owl-carousel"  
                loop
                center
                autoplay
                autoplayTimeout = '3000'
                nav  
                lazyLoad
                margin={10} >  
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/fNTtVbqI92abEKAgz2ynurCUne.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/gbGHezV6yrhua0KfAgwrknSOiIY.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/ay8SLFTMKzQ0i5ewOaGHz2bVuZL.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/fNTtVbqI92abEKAgz2ynurCUne.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/gbGHezV6yrhua0KfAgwrknSOiIY.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/ay8SLFTMKzQ0i5ewOaGHz2bVuZL.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/kuf6dutpsT0vSVehic3EZIqkOBt.jpg" /></a>
                    <a href="#"><img className="owl-lazy movie-img" data-src = "https://image.tmdb.org/t/p/w200/6E4LopmCMUXcMLIv7o3jw1xQrgJ.jpg" /></a>
                </OwlCarousel>  
                </div>  
            </div>  
          )  
        }  
} 


export default MovieSlider;