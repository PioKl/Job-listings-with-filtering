import React from 'react';
import "../style/Footer.scss";
const Footer = (props) => {
    return (
        <>
            {props.isLoaded &&
                <footer className="footer">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="footer__link">Frontend Mentor</a>.
                    Coded by <a href="https://github.com/PioKl" target="_blank" rel="noopener noreferrer" className="footer__link">Piotr Kłosowski</a>.
                </footer>
            }
        </>
    );
}

export default Footer;