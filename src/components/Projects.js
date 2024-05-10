import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"

export const Projects = () => {

    const projects = [
        {
            title: "Tweets Scheduler1",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg1,
        },
        {
            title: "Tweets Scheduler2",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg2,
        },
        {
            title: "Tweets Scheduler3",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg3,
        },
        {
            title: "Tweets Scheduler4",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg3,
        },
        {
            title: "Tweets Scheduler5",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg2,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>This is another typing test cause my Lorem aint working can't be bother to fix it sory I will fix it when I am done with the project I promise. ;)</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="projects-1">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="projects-1">Projects 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="projects-2">Projects 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="projects-3">Projects 3</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="projects-1">
                                <Row>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <ProjectCard
                                                key={index}
                                                {...projects}
                                                />
                                            );
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="projects-2">
                                <Row>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <p>{projects.title}</p>
                                            );
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="projects-3">
                                <Row>
                                    {
                                        projects.map((projects, index) => {
                                            return(
                                                <p>{projects.title}</p>
                                            );
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    );
}