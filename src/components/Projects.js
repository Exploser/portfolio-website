import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const webProjects = [
        {
            title: "Tweets Scheduler",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg1,
        },
        {
            title: "Tweets Scheduler2",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg2,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Tweets Scheduler3",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg3,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Tweets Scheduler4",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg3,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Tweets Scheduler5",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg2,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
    ];

    const otherProjects = [
        {
            title: "Tweets Scheduler1",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg3,
        },
        {
            title: "Tweets Scheduler2",
            description: "A simple web-app to schedule your tweets",
            builtWith: "Ruby on Rails and Bootstrap.",
            imgUrl:projImg2,
        },
    ]

    const modelProjects = [
        {
            title: "Keep it UP!",
            description: "Keyboard wallmount stand, no screws and no hassel",
            imgUrl:projImg2,
        }
    ]

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility partialVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? 'animate__animated animate__bounce' : ""}>
                                    <h2>Projects</h2>
                                    <p>This is another typing test cause my Lorem aint working can't be bother to fix it sory I will fix it when I am done with the project I promise. ;)</p>
                                </div>
                            }
                        </TrackVisibility>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="projects-1">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="projects-1">Web Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="projects-2">Other Projects</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="projects-3">3D Models</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="projects-1">
                                                <Row>
                                                    {
                                                        webProjects.map((projects, index) => {
                                                            return (
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
                                                        otherProjects.map((projects, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...projects}
                                                                />
                                                            );
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="projects-3">
                                                <Row>
                                                    {
                                                        modelProjects.map((projects, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...projects}
                                                                />
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
            <img className="background-image-right" src={colorSharp2} alt="Background"></img>
        </section>
    );
}