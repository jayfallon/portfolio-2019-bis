import styled from 'styled-components'
import media from '../MediaQueries'

const FooterStyles = styled.footer`
    background-color: ${props => props.theme.footerBgColor};
    color: ${props => props.theme.footerTextColor};
    section.footer__content {
        margin: 0 auto;
        padding: 0rem 2rem 40rem;
        max-width: 96rem; 

        h3 {
            font-size: 4.8rem;
            font-weight: bold;
            line-height: 1.25;
            text-transform: uppercase;
        }

        h5 {
            font-size: 2.2rem;
            line-height: 1.25;
            a {
                color: ${props => props.theme.footerLinkColor};
                text-decoration: none;
            }
        }

        nav {
            padding-top: 2rem;
            justify-content: space-between;
            ${media.brotherbear`
                display: flex;
            `}

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

            p.footer__link--top {
                padding-top: 3rem;
                ${media.brotherbear`
                    padding-top: 0;
                `}
            }
        }
    }
`

export default FooterStyles
