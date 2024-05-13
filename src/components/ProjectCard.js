import { Col } from "react-bootstrap";
import genericTechLogo from "../assets/img/tools/generic-logo.svg";

export const ProjectCard = ({ title, description, builtWith, imgUrl, projectUrl }) => {
    return (
        <Col sm={6} md={4}>
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="Project" />
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
                <div className="proj-info">
                    {builtWith.map((tech, index) => (
                        <div className="image-container" key={index}>
                            <img src={tech.img || genericTechLogo} alt={tech.tech} />
                            <div className="tooltip">{tech.tech}</div>
                        </div>
                    ))}
                </div>
            </a>
        </Col>
    );
};