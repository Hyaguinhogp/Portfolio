import { BackgroundContainer } from "./styles";
import { ReactComponent as Blob} from "../../assets/blob.svg";

const Background = () => {
    return (
        <BackgroundContainer>
            <Blob />
            <Blob />
        </BackgroundContainer>
    )
}

export default Background;