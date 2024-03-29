import styled, { css } from 'styled-components';
import media from '../MediaQueries';
import { backgroundColor, textColor, linkColor } from '../Theme';

const HeaderStyles = styled.header`
  background-color: ${backgroundColor};
  width: 100%;
  position: fixed;
  section.header__content {
    margin: 0 auto;
    padding: 1rem 2rem 1rem;
    max-width: 96rem;
    ${media.brotherbear`
            padding: 4rem 2rem 3rem;
        `}
  }
  h1 {
    padding-bottom: 1rem;
    color: ${textColor};
    font-family: shackleton-condensed, serif;
    font-size: 3.9rem;
    line-height: 1.33;
    display: flex;
    justify-content: space-between;
    ${media.brotherbear`
            padding-bottom: 2rem;
            font-size: 5.2rem;
        `}
    a {
      color: ${linkColor};
      text-decoration: none;
    }
  }

  nav {
    display: flex;
    justify-content: space-between;
    h3 {
      color: ${textColor};
      font-size: 2rem;
    }
    ul.header__nav {
      display: none;
      ${media.brotherbear`
                display: flex;
                justify-content: space-between;
            `}
    }
    li {
      margin-left: 3.5rem;
      font-size: 2rem;
      i.far {
        margin-left: 0.2rem;
        font-size: 1.5rem;
      }
    }
    a {
      color: ${linkColor};
      text-decoration: none;
    }
  }
`;
export default HeaderStyles;

const DrawerToggleButtonStyles = styled.button`
  background: transparent;
  border: none;
  color: ${textColor};
  cursor: pointer;
  ${media.brotherbear`
        display: none;
    `}
  &:focus {
    outline: none;
  }

  i.far {
    font-size: 3rem;
    line-height: 1.33;
  }
`;

export { DrawerToggleButtonStyles };
