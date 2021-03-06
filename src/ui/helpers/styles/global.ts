import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  outline: none;
  box-sizing: border-box;
  font-family: "Press Start 2P";
  font: inherit;
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
};

body {
  display: grid;
  align-items: center;
  background: ${(props) => props.theme.colors.background.primary};
  height: 100vh;
};

@media (min-width: 400px) {
  body {
    justify-content: center;
  }
};
`;
