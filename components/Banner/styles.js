import styled from 'styled-components';
import media from '../MediaQueries';
import {backgroundColor, textColor, linkColor} from '../Theme';

const HomeBannerStyles = styled.section`
    
    padding: 4rem 2rem 4rem;
    
    color: ${textColor};
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    ${media.brotherbear`
        padding: 10rem 2rem;
    `}

    article {
        margin: 16rem auto 0;
        max-width: 96rem;
    }
    
    p {
        font-size: 1.8rem;
    }

    h2 {
        margin: 2rem 0;
        max-width: 49.6rem;
        font-size: 5.4rem;
        font-weight: bold;
        line-height: 1.1;
        text-transform: uppercase;
    }
`
export default HomeBannerStyles
