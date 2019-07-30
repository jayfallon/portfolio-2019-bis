import styled from 'styled-components'
import media from '../MediaQueries'

const HeaderStyles = styled.header`
    background-color: ${props => props.theme.headerBgColor};
    width: 100%;
    position: fixed;
    section.header__content {
        margin: 0 auto;
        padding: 1rem 2rem 1rem;
        max-width: 96rem;
        ${media.brotherbear`
            padding: 4rem 2rem 1rem;
        `}
    }
    h1 {
        padding-bottom: 2rem;
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
        }
        a {
            color: ${props => props.theme.headerLinkColor};
            text-decoration: none;
        } 
    }
`
export default HeaderStyles

const DrawerToggleButtonStyles = styled.button`
    background: transparent;
    margin-right: 2rem;
    width: 3rem;
    height: 2.4rem;
    border: none;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    ${media.brotherbear`
        display: none;
    `}
    &:focus {
        outline: none;
    }

    div.toggleButtonLine {
        background-color: #fff;
        width: 3rem;
        height: 0.3rem;
    }
`

export {DrawerToggleButtonStyles}

