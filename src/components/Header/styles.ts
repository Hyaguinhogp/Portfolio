import styled from "styled-components";
import { DefaultContainer, DefaultContent } from "../../styles/global";

export const HeaderContainer = styled(DefaultContainer)`

`

export const HeaderContent = styled(DefaultContent)`

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;

    }

    .header-mobile {
    }

    .header-name {
        font-size: var(--font-03);
        color: var(--theme-03);
        font-weight: 600;
    }

    .header-button {
        width: 30px;
        height: 30px;
        color: var(--theme-04);
    }

    .header-desktop {
        display: none;
    }

    @media(min-width: 1200px) {

        .header-mobile {
            display: none;
        }

        .header-desktop {
            display: flex;
        }

        .header-links {
            display: flex;
            width: 50%;
            justify-content: space-between;
        }

        .header-link {
            font-size: var(--font-04);
            font-weight: 300;
            letter-spacing: 1.1px;
        }
    }
`