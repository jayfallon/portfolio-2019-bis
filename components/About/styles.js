import styled from 'styled-components'
import media from '../MediaQueries'

const AboutStyles = styled.section`
    margin: 0 auto;
    padding: 0 2rem 4rem;
    max-width: 96rem;
    color: #fff;

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
        border-bottom: 0.1rem solid #262C2E;
        font-size: 1.6rem;
        text-transform: uppercase;
    }
`
export default AboutStyles
