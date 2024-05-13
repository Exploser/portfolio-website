import { Col, Container, Row } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import linkedinIcon from '../assets/img/nav-icon1.svg'
import githubIcon from '../assets/img/nav-icon2.svg'
import thangsIcon from '../assets/img/nav-icon3.svg'

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={logo} alt="logo" id="footer-logo"></img>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                            <a href="https://www.linkedin.com/in/abhijeetsthakur/"><img src={linkedinIcon} alt="" /></a>
                            <a href="https://github.com/Exploser"><img src={githubIcon} alt="" /></a>
                            <a href="https://thangs.com/designer/Expl0ser"><img src={thangsIcon} id="thangs-logo" alt="" /></a>
                        </div>
                    </Col>
                        <p>Icons provided by <a href="https://iconscout.com/icons/ruby" class="text-underline font-size-sm" target="_blank">Ruby</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a></p>
                </Row>
            </Container>
        </footer>
    )
}