function Footer() {
    return <footer className="footer page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="text">PopCornMovies</h5>
                <p className="text-lighten-4 text">"Through hardship to the stars."</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container text">
            © {new Date().getFullYear()} Copyright Text
            <a className="text-lighten-4 right text hover" href="https://github.com/LyubaSuptsarel" target="_blank">Git Repository</a>
            </div>
          </div>
        </footer>
}

export default Footer;