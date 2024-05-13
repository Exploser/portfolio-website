import { Col } from "react-bootstrap";

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
                    <div>
                        <p><span>{builtWith}</span></p>
                    </div>
                </div>
            </a>
        </Col>
    );
}