import styled from 'styled-components'

const FooterStyles = styled.footer`
    background-color: ${props => props.theme.footerBgColor};
    color: ${props => props.theme.footerTextColor};
    section.footer__content {
        margin: 0 auto;
        padding: 10rem 2rem 40rem;
        max-width: 96rem; 

        h3 {
            font-size: 4.8rem;
            font-weight: bold;
            line-height: 1.25;
            text-transform: uppercase;
        }

        nav {
            padding-top: 2rem;
            display: flex;
            justify-content: space-between;

            a {
                color: ${props => props.theme.footerLinkColor};
                font-size: 1.8rem;
                text-decoration: none;
            }

            ul {
                display: flex;
            }

            li {
                margin-right: 3.5rem;
            }
        }
    }
`

export default FooterStyles
