import styled from 'styled-components';
import {backgroundColor, textColor, linkColor} from '../Theme';
import media from '../MediaQueries'

const ExperienceStyles = styled.section`
    background-color: ${backgroundColor};
    margin: 0 auto;
    padding: 17rem 2rem 4rem;
    color: ${linkColor};

    article {
        margin: 0 auto;
        max-width: 92rem;
    }

    p {
        padding-bottom: 4rem;
        font-size: 1.75rem;
        line-height: 1.25;
        ${media.brotherbear`
            font-size: 2rem;
        `}
    }

    h3 {
        margin-bottom: 3rem;
        padding-bottom: 1rem;
        border-bottom: 0.1rem solid ${props => props.theme.resumeHrColor};
        font-family: shackleton-condensed, serif;
        font-size: 2.2rem;
        font-weight: bold;
        text-transform: uppercase;
        ${media.brotherbear`
            font-size: 2.8rem;
        `}
    }

    ul.resume__listing--list {
        li {
            font-size: 1.75rem;
            line-height: 1.2;
            ${media.brotherbear`
                font-size: 2rem;
            `}
        }
        li.resume__listing--title {
            padding-bottom: 0.4rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            h4 {
                font-size: 2rem;
                ${media.brotherbear`
                    font-size: 2.3rem;
                `}
            }
        }
        li.resume__listing--dates {
            padding-bottom: 0.4rem;
        }
        li.resume__listing--job {
            padding-bottom: 0.8rem;
            font-weight: bold;
        }
        li.resume__listing--desc {
            padding-bottom: 3.4rem;
        }
    }
`

export default ExperienceStyles
