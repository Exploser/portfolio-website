import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import neovimTool from "../assets/img/tech/neovim-logo.svg";
import githubTool from "../assets/img/tech/github-logo.svg";
import androidStudioTool from "../assets/img/tech/google-android-logo.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { isVisible } from "@testing-library/user-event/dist/utils";
import TrackVisibility from "react-on-screen";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className='skill-bx wow zoomIn'>
                      <TrackVisibility>
                      {({ isVisible }) =>
                        <div className={isVisible? "skills-txt animate__animated animate__rubberBand" : ""}>
                          <h2>Tools</h2>
                          <p>I am proficient with a range of essential tools and continuously seek out new technologies to stay ahead in my field.</p>
                        </div>
                      }
                      </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className={ isVisible ?  "owl-carousel owl-theme skill-slider animate__animated animate__fadeInDown" : ""}>
                            <div className="item">
                                <img src={neovimTool} alt="Neovim" />
                                <h5>Neovim</h5>
                            </div>
                            <div className="item">
                                <img src={githubTool} alt="GitHub" />
                                <h5>GitHub</h5>
                            </div>
                            <div className="item">
                                <img src={androidStudioTool} alt="Google Android Studio" />
                                <h5>Google Android Studio</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
      )

}