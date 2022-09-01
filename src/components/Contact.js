import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return(
        <div className="contact">
            <div className="contact_socials">
                <h1>reach me on social media</h1>
                <div className="links">
                    <a href="https://www.linkedin.com/in/nikola-pivac-7700551bb/" className="soclink">
                        <FontAwesomeIcon icon={faLinkedin} className="socicon"/>
                        <p>linkedin</p>
                    </a>
                    <a href="https://www.facebook.com/nikola.pivac98/" className="soclink">
                        <FontAwesomeIcon icon={faFacebook} className="socicon"/>
                        <p>facebook</p>
                    </a>
                    <a href="https://www.instagram.com/nikolapivac/" className="soclink">
                        <FontAwesomeIcon icon={faInstagram} className="socicon"/>
                        <p>instagram</p>
                    </a>
                </div>
            </div>
            <div className="contact_mail">
                <h1>send me an e-mail</h1>
                <a href="https://gmail.com" className="mail">
                    <FontAwesomeIcon icon={faEnvelope} className="mailicon"/>
                    <p>nikola.pivac98@gmail.com</p>
                </a>
            </div>
        </div>
    )
}

export default Contact;