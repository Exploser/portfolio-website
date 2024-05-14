import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

import headerImg1 from "../assets/img/header-img1.svg";
import headerImg2 from "../assets/img/header-img2.svg";
import headerImg3 from "../assets/img/header-img3.svg";

import { useEffect, useState } from "react";
import "animate.css";
import TrackVisibility from 'react-on-screen';

const roleImages = {
    "Web Developer": headerImg1,
    "Software Engineer": headerImg2,
    "Frontend Engineer": headerImg3,
};


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(100);
    const period = 2000;
    const [headerImg, setHeaderImg] = useState(roleImages["Web Developer"]); // Initialize with the first role image

    useEffect(() => {
        const toRotate = Object.keys(roleImages); // Get roles from the roleImages object
        const handleTyping = () => {
            const currentWord = toRotate[loopNum % toRotate.length];
            const currentLength = text.length;
            const isFull = currentLength === currentWord.length;
            const isEmpty = currentLength === 0;

            if (isDeleting) {
                setText(currentWord.substring(0, currentLength - 1));
                setDelta(prevDelta => Math.max(50, prevDelta / 2));
            } else {
                setText(currentWord.substring(0, currentLength + 1));
                setDelta(prevDelta => prevDelta + (isFull ? period : 0));
            }

            if (isFull && !isDeleting) {
                setIsDeleting(true);
                setDelta(period);
            } else if (isEmpty && isDeleting) {
                setIsDeleting(false);
                setLoopNum(prevLoopNum => prevLoopNum + 1);
                setDelta(100);
                setHeaderImg(roleImages[currentWord]); // Update the image when the word changes
            }
        };

        const ticker = setInterval(handleTyping, delta);

        return () => clearInterval(ticker);
    }, [text, delta, isDeleting, loopNum]);
    
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={8}>
                        <TrackVisibility>
                            <div className={'animate__animated animate__lightSpeedInLeft'}>
                                <span className="tagline">Welcome to my Portfolio!</span>
                                <h1>{`Hi! I'm Abhijeet `}</h1>
                                <h1><span className="wrap profile-txt"> a {text}</span></h1>
                                <p>Specializing in writing clean, decoupled, and testable code. Skilled in Object-Oriented Programming and versed in Agile and SCRUM methodologies. Committed to continuous learning.</p>
                                <div id="button-box">
                                    <button onClick={() => console.log('Connect')}>Connect!<ArrowRightCircle size={25} /> </button>
                                </div>
                            </div>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={4}>
                        <img src={headerImg} alt="Header"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}