import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header">
            <div className="header_logo">
                <Link to={"/"} className="logo">np</Link>
            </div>
            <div className="header_nav">
                <Link to={"/about-me"} className="header_nav_item">about</Link>
                <Link to={"/projects"} className="header_nav_item">projects</Link>
                <Link to={"/contact"} className="header_nav_item">contact</Link>
            </div>
        </div>
    )
}

export default Header;