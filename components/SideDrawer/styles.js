import styled from 'styled-components'
import media from '../MediaQueries'

const SideDrawerStyles = styled.nav`
    padding-top: 1rem;
    transform: translateX(-100%);
    transition: transform 0.2s ease-out;
    &.open {
        transform: translateX(0);
    }
    z-index: 300;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.sidebarBgColor};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem 2rem 2rem;

    h1 {
        padding-bottom: 2rem;
        color: ${props => props.theme.sidebarTextColor};
        font-family: shackleton-condensed, serif;
        font-size: 3.9rem;
        line-height: 1.33;
        display: flex;
        justify-content: space-between;
        ${media.brotherbear`
            font-size: 5.2rem;
        `}
        a {
            color: ${props => props.theme.sidebarLinkColor};
            text-decoration: none; 
        }
    }

    li {
        padding-bottom: 2rem;
    }
    li a {
        color: ${props => props.theme.sidebarLinkColor};
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
    }
`

export default SideDrawerStyles

const DrawerToggleButtonStyles = styled.button`
    background: transparent;
    border: none;
    color: ${props => props.theme.sidebarLinkColor};
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
`

export {DrawerToggleButtonStyles}
