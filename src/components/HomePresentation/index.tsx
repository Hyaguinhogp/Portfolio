import { HomePresentationContainer, HomePresentationContent } from "./styles";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

const HomePresentation = () => {
    return (
        <HomePresentationContainer>
            <HomePresentationContent>
                <div className="presentation__top-container">
                    <figure className="presentation-image"></figure>
                    <div className="social-media__container">
                        <AiFillGithub className="social-icon" />
                        <AiFillLinkedin className="social-icon" />
                        <AiFillInstagram className="social-icon" />
                    </div>
                </div>

                <div className="presentation__bottom-container">
                    <h1 className="presentation-title">Hi, I am <span className="highlight">Full Stack</span> Developer!</h1>
                    <button className="presentation-button">See my projects</button>
                </div>
            </HomePresentationContent>
        </HomePresentationContainer>
    )
}

export default HomePresentation;