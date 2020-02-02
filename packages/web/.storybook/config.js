import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { createGlobalStyle } from "styled-components";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
};
// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = "";
// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname);
};

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Heebo:400,700|Roboto:400,700&display=swap");
  @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSans-kr.css);
  
  *, html, body {
  font-family: "NanumSquare", sans-serif;
  font-size: 16px;
  outline: none;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  word-break: keep-all;
}

html, body, #root {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
}
`;

addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));
addDecorator(withKnobs);

configure(loadStories, module);
