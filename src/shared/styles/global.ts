import { createGlobalStyle } from 'styled-components';
import backgroundImg from "../assets/imgs/galaxy.jpg";
export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  body {
    width: "100%";
    height: "100vh";
    background-image: url(${backgroundImg});
    background-repeat: "no-repeat";
    background-position: "center";
    background-size: "cover";
    font-size: 14px;
    color: ${(props) => props.theme.color.primary};
    font-family: sans-serif;
  }
`;
