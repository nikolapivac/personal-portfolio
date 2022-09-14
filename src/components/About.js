import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareJs, faPython, faHtml5, faCss3Alt, faReact, faNodeJs, faSass, faGitAlt, faNpm } from "@fortawesome/free-brands-svg-icons";
import { } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const About = () => {
    return(
        <div className="about">
            <div className="about_info">
                <h1>hello!</h1>
                <p>
                    I'm Nikola Pivac. I'm a 5th year student studying computer engineering at the <a href="https://www.fesb.unist.hr/">Faculty
                    of Electrical Engineering, Mechanical Engineering and Naval Architecture</a> in Split, Croatia.
                </p>
                <p>
                    I always found web development interesting, especially the front-end part. I was
                    introduced to it in some courses at my college, and decided to teach myself how to build 
                    interesting, good looking and responsive websites. I decided to complete <a href="https://www.theodinproject.com/">The Odin Project </a> 
                    in the summer of 2022 and gained a lot of new <Link className="link" to="/projects">experiences</Link>. Now, I'm ready to start my 
                    web development journey in the real world, and deepen my knowledge.
                </p>
                <p>
                    Let's get in touch. You can check out my <a href="https://github.com/nikolapivac">Github page</a> or contact me <Link className="link" to="/contact">here</Link>.
                </p>
            </div>
            <div className="about_skills">
                <h1>my skills</h1>
                <div className="langtech">
                    <h2>Programming Languages, Technologies and Tools</h2>
                    <div className="lt_items">
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faSquareJs} className="lt_icon"></FontAwesomeIcon>
                            <p>JavaScript</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faPython} className="lt_icon"></FontAwesomeIcon>
                            <p>Python</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faHtml5} className="lt_icon"></FontAwesomeIcon>
                            <p>HTML</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faCss3Alt} className="lt_icon"></FontAwesomeIcon>
                            <p>CSS</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faReact} className="lt_icon"></FontAwesomeIcon>
                            <p>ReactJS</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faNodeJs} className="lt_icon"></FontAwesomeIcon>
                            <p>nodeJS</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faSass} className="lt_icon"></FontAwesomeIcon>
                            <p>Sass</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faGitAlt} className="lt_icon"></FontAwesomeIcon>
                            <p>Git</p>
                        </div>
                        <div className="lt_item">
                            <FontAwesomeIcon icon={faNpm} className="lt_icon"></FontAwesomeIcon>
                            <p>npm</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about_future">
                <h1>what's next?</h1>
                <p>I'm planning on learning other web development Technologies such as
                    Vue.js, Angular and Bootstrap. I'm only a beginner in back-end web development
                    so I'm planning on expanding my knowledge of NodeJS and Express.
                </p>
                <p>
                    I find Artificial Intelligence very interesting. My <a href="https://github.com/nikolapivac/ANPR">bachelor's thesis</a> was based
                    on Automatic Number Plate Recognition and I hope to explore it some more when I start
                    writing my master's thesis. 
                </p>
            </div>
        </div>
    )
}

export default About;