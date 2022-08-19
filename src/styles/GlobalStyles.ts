import { createGlobalStyle } from "styled-components";

// import extensions vscode styled components
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        border: 0;
        outline: 0;
        font-family: "Inconsolata", monospace;

    }

    button, a{
        cursor: pointer;
    }

    img {
        width: 30px;
        height: 30px;
    }

    ul li{
        list-style-type: none;
    }

`;
