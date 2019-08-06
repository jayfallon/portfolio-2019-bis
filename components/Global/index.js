import styled, { createGlobalStyle } from 'styled-components';
import Theme, { Colors } from '../Theme';

const GlobalStyle = createGlobalStyle`

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

:root {
    font-size: 65%;
}
html {
  height: 100%; 
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
body {
  background-color: ${Theme.pageBgColor};
  padding-bottom: 36rem;
  height: 100%;
  color: ${Theme.pageTextColor};
  font-family: acumin-pro-condensed, sans-serif;
  font-weight: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
main {
  padding: 0 0;
}

#__next {
  height: 100%;
}

strong {
  font-weight: bold;
}

a.main__content--link {
  margin: 0 !important;
  padding: 1.5rem 2rem;
  width: 0.1rem;
  height: 0.1rem;
  color: ${Theme.mainContentLinkColor};
  font-size: 1.6rem;
  overflow: hidden;
  position: absolute;
  display: block;
  clip: rect(0 0 0 0);
}

a.main__content--link:focus {
  margin: inherit;
  background-color: ${Theme.mainContentLinkBgColor};
  width: auto;
  height: auto;
  white-space: inherit;
  outline: 3px solid ${Theme.mainContentLinkBgColor};
  outline-offset: 0;
  position: static;
  overflow: visible;
  clip: auto;
  clip-path: none;
  -webkit-clip-path: none;
}
`;
export default GlobalStyle;
