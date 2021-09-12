import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
body{
    margin:0;
    padding:0;
 
    background-color: #030205;
    color:#faf7ff;
    font-size: 10px;
    font-family: 'DM Sans', sans-serif;
}
a{
    text-decoration:none;
    color:#faf7ff;
    margin-bottom: 3px;
    position: relative;
}
a:hover{
    color:#666;
    transition: all 0.3s ease-in-out;

}
a::after{
    content:"";
    position:absolute;
    left:0;
    bottom:0;
    width:100%;
    height:2px;
    background: #666;
    transform: scaleX(0);
    transform-origin:right;
    transition: transform 0.3s ease-in;

  }
  a:hover::after{
      transform: scaleX(1);
      transform-origin:left;
  }

    
    
    
    `;

export default GlobalStyle;