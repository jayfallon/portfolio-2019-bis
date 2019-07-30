import styled from 'styled-components'

const SideDrawerStyles = styled.nav`
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    &.open {
        transform: translateX(0);
    }
    z-index: 300;
    height: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 4rem 2rem;
    ul {
        padding-top: 4rem;
    }
    li {
        padding-bottom: 2rem;
    }
    a {
        color: #333;
        font-size: 2rem;
        font-weight: bold;
        text-decoration: none;
    }
`

export default SideDrawerStyles
