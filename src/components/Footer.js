import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_info">
                2022 - nikola pivac
            </div>
            <div className="footer_socials">
                <a href={"https://www.linkedin.com/in/nikola-pivac-7700551bb/"}><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href={"https://github.com/nikolapivac"}><FontAwesomeIcon icon={faGithub} /></a>
                <a href={"https://www.facebook.com/nikola.pivac98/"}><FontAwesomeIcon icon={faFacebook} /></a>
                <a href={"https://www.instagram.com/nikolapivac/"}><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
        </div>
    )
}

export default Footer;