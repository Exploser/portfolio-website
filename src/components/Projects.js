import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import projImg2 from "../assets/img/project-img2.png"
import projImg3 from "../assets/img/project-img3.png"
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import TrackVisibility from "react-on-screen";

// Logos
import railsLogo from "../assets/img/tools/rails-logo.svg";
import bootstrapLogo from "../assets/img/tools/bootstrap-logo.svg";
import mongoLogo from "../assets/img/tools/mongo-logo.svg";
import expressLogo from "../assets/img/tools/express-logo.svg";
import reactLogo from "../assets/img/tools/react-logo.svg";
import nodeLogo from "../assets/img/tools/node-js-logo.svg";

import tweetsSchedulerLogo from "../assets/img/project-images/tweets-scheduler-logo.png"
import exploserBlogsLogo from "../assets/img/project-images/exploser-blogs-logo.svg"


export const Projects = () => {

    const webProjects = [
        {
            title: "Tweets Scheduler",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:tweetsSchedulerLogo,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Personal Blogs",
            description: "A simple blogs web-app to upload your blogs.",
            builtWith: [
                { tech: "MongoDB", img: mongoLogo },
                { tech: "Express JS", img: expressLogo },
                { tech: "React", img: reactLogo },
                { tech: "Node JS", img: nodeLogo },
            ],  
            imgUrl:exploserBlogsLogo,
            projectUrl: "https://github.com/Exploser/Personal-Blog-Site",
        },
        {
            title: "Tweets Scheduler3",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:projImg3,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Tweets Scheduler4",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:projImg3,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
        {
            title: "Tweets Scheduler5",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:projImg2,
            projectUrl: "https://github.com/Exploser/Posts-Scheduler",
        },
    ];

    const otherProjects = [
        {
            title: "Tweets Scheduler1",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:projImg3,
        },
        {
            title: "Tweets Scheduler2",
            description: "A simple web-app to schedule your tweets",
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
            imgUrl:projImg2,
        },
    ]

    const modelProjects = [
        {
            title: "Keep it UP!",
            description: "Keyboard wallmount stand, no screws and no hassel",
            imgUrl:projImg2,
            builtWith: [
                { tech: "Ruby on Rails", img: railsLogo },
                { tech: "Bootstrap", img: bootstrapLogo }
            ],
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