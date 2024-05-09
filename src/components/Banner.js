import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio!</span>
                        <h1>{`Hi! I'm Abhijeet `}<span className="wrap">{`text`}</span></h1>
                        <p>Sample text to test my typing speed and to also fill out this section of the page</p>
                        <button onClick={() => console.log('Connect')}>Connect!<ArrowRightCircle size={25} /> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Image"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}