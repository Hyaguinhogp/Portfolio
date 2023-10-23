import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";
import HomeImage from "../../assets/home-image.png";

export const HomePresentationContainer = styled(DefaultContainer)``

export const HomePresentationContent = styled(DefaultContent)`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-top: 60px;
    padding-bottom: 60px;

    .presentation__top-container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
    }

    .presentation-image {
        width: 80vw;
        max-width: 500px;
        height: 80vw;
        max-height: 500px;
        border-radius: 30px;
        background-color: transparent;
        background-image: url(${HomeImage});
        background-position: center;
        background-size: cover;
    }

    .social-media__container {
        display: flex;
        justify-content: space-between;
        width: 206px;
        padding: 5px;
        border-radius: 40px;
        background-color: var(--theme-02);
    }

    .social-icon {
        padding: 5px;
        width: 30px;
        height: 30px;
        color: var(--theme-03);
        cursor: pointer;
    }

    .social-icon:hover {
        background-color: #3C966F;
        background-color: var(--theme-00);
        border-radius: 50%;
    }

    .presentation__bottom-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }

    .presentation-title {
        font-size: var(--font-01);
        text-align: center;
    }

    .highlight {
        color: var(--theme-03);
    }

    .presentation-button {
        width: 210px;
        padding: 10px;
        border: 2px solid var(--theme-03);
        border-radius: 30px;
        background-color: transparent;
        color: var(--theme-03);
        cursor: pointer;
    }

    .presentation-button:hover {
        background-color: var(--theme-03);
        color: var(--theme-00);
    }

    @media(min-width: 1200px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        padding-top: 120px;
        padding-bottom: 120px;

        .presentation__bottom-container {
            align-items: start;
            max-width: 40%;
            gap: 40px;
        }

        .presentation-title {
            font-size: var(--font-00);
            text-align: start;
        }

        .presentation__top-container {
            flex-direction: row-reverse;
        }

        .social-media__container {
            flex-direction: column;
            width: fit-content;
            gap: 20px;
            padding: 10px
        }

        .social-icon {
            padding: 10px;
            width: 43px;
            height: 43px;
        }

        .social-icon:hover {
        }

        .presentation-image {
            width: 25vw;
            height: 25vw;
        }
    }
`