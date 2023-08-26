import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import fonts from "./fonts/fonts.css";

export const GlobalStyle = createGlobalStyle`

${reset}

${fonts}

html {
  font-size: 16px;
  min-width: 320px;
}

body {
  font-family: "Noto Sans KR";
  font-weight: 500;
}


* {
  box-sizing: border-box;
  vertical-align: middle;
}

.bold-text {
  font-family: "Yeongdeok";
}

.header-text {
  font-family: "Intel";
}

//   desktop 규격
@media screen and (min-width: 1024px) {
  html {
    font-size: 16px;
  }
}

//   tablet 규격 
@media screen and (max-width: 1023px) {
  html {
    font-size: 14px;
  }
}

//   mobile 규격 
@media screen and (max-width: 540px) {
  html {
    font-size: 12px;
  }
}
`;
