import styled from 'styled-components';
import media from '../MediaQueries';
import { backgroundColor, textColor, linkColor } from '../Theme';

const SideDrawerStyles = styled.nav`
  background-color: ${backgroundColor};
  padding: 1rem 2rem 2rem;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  transform: translateX(-100%);
  transition: transform 0.2s ease-out;
  &.open {
    transform: translateX(0);
  }

  h1 {
    padding-bottom: 2rem;
    color: ${textColor};
    font-family: shackleton-condensed, serif;
    font-size: 3.9rem;
    line-height: 1.33;
    display: flex;
    justify-content: space-between;
    ${media.brotherbear`
            font-size: 5.2rem;
        `}

    a {
      color: ${linkColor};
      text-decoration: none;
    }
  }

  li {
    padding-bottom: 2rem;
  }

  li a {
    color: ${linkColor};
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
  }
`;

export default SideDrawerStyles;

const DrawerToggleButtonStyles = styled.button`
  background: transparent;
  border: none;
  color: ${linkColor};
  cursor: pointer;
  ${media.brotherbear`
        display: none;
    `}
  &:focus {
    outline: none;
  }

  i.fal {
    font-size: 3rem;
    line-height: 1.33;
  }
`;

export { DrawerToggleButtonStyles };
