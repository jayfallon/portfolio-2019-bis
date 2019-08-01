import styled from 'styled-components'
import media from '../MediaQueries'
import {backgroundColor, textColor, linkColor} from '../Theme';

const FooterStyles = styled.footer`
    background-color: ${backgroundColor};
    color: ${textColor};
    section.footer__content {
        margin: 0 auto;
        padding: 4rem 2rem;
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
                color: ${linkColor};
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
                color: ${linkColor};
                font-size: 1.8rem;
                text-decoration: none;
            }

            ul {
                ${media.brotherbear`
                    display: flex;
                `}
            }

            li {
                padding-bottom: 1.2rem;
                ${media.brotherbear`
                    margin-right: 3.5rem;
                    padding-bottom: 0;
                `}
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
