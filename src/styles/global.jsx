import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        font-size: 14px;
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.text};
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    body {
        text-align: center;
        font-family: sans-serif;
        background: ${props => props.theme.colors.background};
        color: ${props => props.theme.colors.text};
    }
`

export {GlobalStyles};