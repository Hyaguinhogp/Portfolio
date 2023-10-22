import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HomePresentationContainer = styled(DefaultContainer)`

`

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
        width: 100%;
        height: 300px;
        border-radius: 30px;
        background-color: var(--grey-02);
    }

    .social-media__container {
        display: flex;
        justify-content: space-between;
        width: 206px;
        padding: 10px;
        border-radius: 30px;
        background-color: var(--theme-02);
    }

    .social-icon {
        width: 30px;
        height: 30px;
        color: var(--theme-03);
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
    }

    @media(min-width: 1200px) {

    }
`