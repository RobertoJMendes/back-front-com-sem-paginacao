import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
* {
    margin:0px;
    padding:0px;
    font-family:'poppins';
}
body{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
}
`
export default GlobalStyle;