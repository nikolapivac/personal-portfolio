import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="home">
            <div className="home_info">
                <h1 className="home_info_name">NIKOLA PIVAC</h1>
                <p className="home_info_job">computing engineer</p>
                <p className="home_info_asp">aspiring web developer</p>
                <Link to={"/about-me"}><button className="home_info_btn">get to know me</button></Link>
            </div>
        </div>
    )
}

export default Home;