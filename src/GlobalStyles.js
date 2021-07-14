import { createGlobalStyle } from "styled-components";
import img from "./assets/bg.jpg";
const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
    height: 100vh;
    background-image: url(${img});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-color: #000;
    color:#fff;
    font-size: 10px;
    font-family: 'DM Sans', sans-serif;
}
a{
    text-decoration:none;
    color:#fff;
    margin-bottom: 3px;
}
a:hover{
    color:#666;
    transition: all 0.3s ease-in-out;

}

 
    
    
    
    `;

export default GlobalStyle;
