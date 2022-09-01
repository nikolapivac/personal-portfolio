import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";

const Header = () => {
    return(
        <>
        <div className="header" id="outer-container">
            <div className="header_logo">
                <Link to={"/"} className="logo">np</Link>
            </div>
            <div className="header_nav">
                <ul>
                    <li><Link to={"/about-me"} className="header_nav_item">about</Link></li>
                    <li><Link to={"/projects"} className="header_nav_item">projects</Link></li>
                    <li><Link to={"/contact"} className="header_nav_item">contact</Link></li>
                </ul>
            </div>
        </div>
        <Sidebar />
        </>
    )
}

export default Header;