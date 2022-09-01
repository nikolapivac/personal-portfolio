import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({project}) => {
    return(
        <div className="project_card">
            <img className="project_card_image" src={project.image} />
            <div className="project_card_info">
                <h1>{project.name}</h1>
                <p><strong>Built using: </strong>{project.stack}</p>
                <p><strong>Description: </strong>{project.desc}</p>
                <div className="card_btns">
                    <a href={project.github}><button className="card_btn"><FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;Code</button></a>
                    <a href={project.live}><button className="card_btn"><FontAwesomeIcon icon={faEye} />&nbsp;&nbsp;Live</button></a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;