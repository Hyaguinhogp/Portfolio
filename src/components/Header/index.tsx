import { HeaderContainer, HeaderContent } from "./styles";
import { RiMenu2Line } from "react-icons/ri"

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <div className="header header-mobile">
                    <h3 className="header-name">Hyago Matos</h3>
                    <RiMenu2Line className="header-button" />
                </div>

                <div className="header header-desktop">
                    <h3 className="header-name">Hyago Matos</h3>
                    
                    <div className="header-links">
                        <h3 className="header-link">Presentation</h3>
                        <h3 className="header-link">Skills</h3>
                        <h3 className="header-link">Experience</h3>
                        <h3 className="header-link">Projects</h3>
                    </div>
                </div>
            </HeaderContent>
        </HeaderContainer>
    )
}

export default Header;