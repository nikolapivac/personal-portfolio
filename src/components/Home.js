import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../images/home.webp";

const Home = () => {
    return(
        <div className="home">
            <div className="home_info">
                <h1 className="home_info_name">Nikola Pivac</h1>
                <p className="home_info_job">computing engineer</p>
                <p className="home_info_asp">aspiring web developer</p>
                <Link to={"/about-me"}><button className="home_info_btn">about me</button></Link>
            </div>
            <div className="home_image">
                <img alt="home" src={HomeImage} />
            </div>
        </div>
    )
}

export default Home;