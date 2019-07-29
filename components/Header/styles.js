import styled from 'styled-components'
import media from '../MediaQueries'

const HeaderStyles = styled.header`
    background-color: ${props => props.theme.headerBgColor};
    section.header__content {
        margin: 0 auto;
        padding: 4rem 2rem;
        max-width: 96rem;
    }
    h1 {
        color: ${props => props.theme.headerLinkColor};
        font-family: shackleton-condensed, serif;
        font-size: 3.9rem;
        line-height: 1.33;
        ${media.brotherbear`
            font-size: 5.2rem;
        `}
        a {
            color: ${props => props.theme.headerLinkColor};
            text-decoration: none; 
        }
    }

    nav {
        display: flex;
        justify-content: space-between;
        h3 {
            color: ${props => props.theme.headerTextColor};
            font-size: 2rem;
        }
        ul {
            display: flex;
            justify-content: space-between;
        }
        li {
            margin-right: 3.5rem;
            font-size: 2rem;
        }
        a {
            color: ${props => props.theme.headerLinkColor};
            text-decoration: none;
        } 
    }
`
export default HeaderStyles
