import styled from 'styled-components';
import media from '../MediaQueries';
import { backgroundColor, textColor, linkColor } from '../Theme';

const AboutStyles = styled.section`
  background-color: ${backgroundColor};
  padding: 17rem 2rem 4rem;
  color: ${textColor};

  article {
    margin: 0 auto;
    max-width: 92rem;
  }

  p {
    padding-bottom: 2rem;
    font-size: 2.2rem;
    line-height: 1.2;
    ${media.brotherbear`
            width: 75%;
        `}
  }

  h3 {
    margin-bottom: 3rem;
    font-size: 4rem;
    font-weight: bold;
    line-height: 1.1;
    text-transform: uppercase;
    ${media.brotherbear`
            width: 66%;
        `}
  }

  p.about__title {
    margin-bottom: 3rem;
    padding-bottom: 1rem;
    width: 100%;
    border-bottom: 0.1rem solid #262c2e;
    font-size: 1.6rem;
    text-transform: uppercase;
  }
`;
export default AboutStyles;
