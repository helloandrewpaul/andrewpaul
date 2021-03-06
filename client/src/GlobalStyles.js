import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`

body{
    margin: 0;
    padding: 0;
    background-color: #030205;
    color: #faf7ff;
    font-family: 'DM Sans', sans-serif;
}

a{
    text-decoration: none;
    color: #faf7ff;
    margin-bottom: 3px;
    position: relative;
    transition: all 0.3s ease-in-out;
}

a:hover{
    color:#666;
}
`;

export default GlobalStyle;