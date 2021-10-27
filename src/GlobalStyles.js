import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        font-family: "Poppins", sans-serif;
        overflow-x:hidden;
    }

    :root{
        /* Font Weights */
        --thick: 900;
        --normal: 700;
        --thin: 500;

        /* Primary Color */
        --DarkBlue: hsl(233, 26%, 24%);
        --LimeGreen: hsl(136, 65%, 51%);
        --BrightCyan: hsl(192, 70%, 51%);

        /* Neutral Color */
        --GrayishBlue: hsl(233, 8%, 62%);
        --LightGrayishBlue: hsl(220, 16%, 96%);
        --VeryLightGray: hsl(0, 0%, 98%);
        --White: hsl(0, 0%, 100%);

    }
/* 
    body{
        font-size: 18px;
    } */
`;

export default GlobalStyle