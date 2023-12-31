import styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`

    :root {
        --theme-00: #1D1F21;
        --theme-01: #02231C;
        --theme-02: #033D31;
        --theme-03: #00FD8F;
        --theme-04: #F2F2EC;

        --grey-00: #0B0D0D;
        --grey-01: #212529;
        --grey-02: #495057;
        --grey-03: #868E96;
        --grey-04: #ADB5BD;
        --grey-05: #CED4DA;
        --grey-06: #DEE2E6;
        --grey-07: #E9ECEF;
        --grey-08: #F1F3F5;
        --grey-09: #F8F9FA;
        --grey-10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        --font-00: 90px;
        --font-01: 60px;
        --font-02: 24px;
        --font-03: 20px;
        --font-04: 16px;
    }

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, input, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font-family: 'Lexend', sans-serif;
        vertical-align: baseline;
    }
    html{
        height: 100%;
    }
    body {
        background-color: var(--theme-00);
        color: var(--theme-04);
        min-height: 100%;
        line-height: 1;
        overflow-x: hidden;
    }

    .modal_active {
        overflow: hidden;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

export const DefaultContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0 20px;
`;

export const DefaultContent = styled.div`
    width: 100%;
    max-width: 1200px;
`;