import styled from 'styled-components'

const SideDrawerStyles = styled.nav`
padding-top: 4rem;
    transform: translateX(-100%);
    transition: transform 0.2s ease-out;
    &.open {
        transform: translateX(0);
    }
    z-index: 300;
    width: 100%;
    height: 100%;
    background-color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 4rem 2rem;
    display: flex;
    justify-content: space-between;
    ul {
        
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

    div.sideDrawer__close {
        margin-right: 2rem;
        cursor: pointer;
        font-size: 3rem;
    }
`

export default SideDrawerStyles
