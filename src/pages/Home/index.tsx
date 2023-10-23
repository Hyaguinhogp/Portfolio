import Background from "../../components/Background";
import Header from "../../components/Header";
import HomePresentation from "../../components/HomePresentation";
import { HomeContainer } from "./styles";

const Home = () => {
    return(
        <>
            <Background />
            <HomeContainer>
                <Header />
                <HomePresentation />
            </ HomeContainer>
        </>
    )
}

export default Home;