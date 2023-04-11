import React from 'react';
import { useEffect, useState } from 'react';

function BackToTop() {
    const [backToTop, setBackToTop] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 300) {
                setBackToTop(true)
            } else {
                setBackToTop(false)
            }
        })
    }, [])

    return <div className="App">
                {backToTop && (
                <a href="#header" className="hover text scroll"><i className="material-icons medium">arrow_upward</i></a>)}
           </div>
}

export default BackToTop;