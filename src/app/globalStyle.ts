import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;


}
body {
  background: #fff;
  display: block;
  height: 100vh;
}
h1,h2,p,span,button{font-family: 'Montserrat', sans-serif;}

`;
