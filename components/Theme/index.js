import theme from 'styled-theming';

const Colors = {
  curious: '#2b8cc4',
  daisyBush: '#4c2c92',
  endeavour: '#005ea5',
  iron: '#dee0e2',
  java: '#24bcb3',
  meadow: '#23b564',
  orange: '#e97406',
  razzmatazz: '#e60050',
  rollingStone: '#6f777b',
  scarlett: '#ff2500',
  shiraz: '#b10e1e',
  silverSand: '#bfc1c3',
  white: '#ffffff',
  woodsmoke: '#0b0c0c',
  yellowOrange: '#ffbf47',
  shiraz: '#b10e1e',
  razzmatazz: '#e60050',
  meadow: '#23b564',
  purple: '#2e358b',
  lightPurple: '#6f72af',
  brightPurple: '#912b88',
  pink: '#f499be',
  red: '#b10e1e',
  brightRed: '#df3034',
  jaffa: '#f47738',
  brown: '#b58840',
  lightGreen: '#85994b',
  green: '#006435',
  turquoise: '#28a197',
  lightBlue: '#2b8cc4',
  gray01: '#6f777b',
  gray02: '#bfc1c3',
  gray03: '#dee0e2',
  gray04: '#f8f8f8',
  hitGray: '#a1acb2',
  porcelain: '#FCFDFD',
  outerSpace: '#262C2E',
};

const backgroundColor = theme('mode', {
  light: Colors.porcelain,
  dark: Colors.woodsmoke,
});

const textColor = theme('mode', {
  light: Colors.woodsmoke,
  dark: Colors.porcelain,
});

const linkColor = theme('mode', {
  light: Colors.woodsmoke,
  dark: Colors.porcelain,
});

export { backgroundColor, textColor, linkColor };

const Theme = {
  pageBgColor: Colors.outerSpace,
  pageTextColor: Colors.porcelain,

  headerDkBgColor: Colors.woodsmoke,
  headerDkLinkColor: Colors.porcelain,
  headerDkTextColor: Colors.porcelain,
  headerLtBgColor: Colors.porcelain,
  headerLtLinkColor: Colors.woodsmoke,
  headerLtTextColor: Colors.woodsmoke,

  mainContentLinkBgColor: Colors.yellowOrange,
  mainContentLinkColor: Colors.woodsmoke,

  mainContentBgColor: Colors.woodsmoke,

  bannerHomeTextColor: Colors.porcelain,

  footerBgColor: Colors.woodsmoke,
  footerLinkColor: Colors.porcelain,
  footerTextColor: Colors.porcelain,

  resumeTextColor: Colors.woodsmoke,
  resumeBgColor: Colors.porcelain,
  resumeHrColor: Colors.outerSpace,

  sidebarBgColor: Colors.porcelain,
  sidebarTextColor: Colors.woodsmoke,
  sidebarLinkColor: Colors.woodsmoke,
};

export default Theme;

export { Colors };
