import styled from 'styled-components'

const ResumeStyles = styled.section`
    background-color: ${props => props.theme.resumeBgColor};
    margin: 0 auto;
    padding: 0 2rem 4rem;
    color: ${props => props.theme.resumeTextColor};

    article {
        margin: 0 auto;
        max-width: 92rem;
    }

    p {
        padding-bottom: 4rem;
        font-size: 2rem;
        line-height: 1.2;
    }

    h3 {
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        border-bottom: 0.1rem solid ${props => props.theme.resumeHrColor};
        font-family: shackleton-condensed, serif;
        font-size: 2.8rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    ul.resume__listing--list {
        li {
            font-size: 2rem;
            line-height: 1.2;
        }
        li.resume__listing--title {
            padding-bottom: 0.4rem;
            font-weight: bold;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            h4 {
                font-size: 2.3rem;
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

export default ResumeStyles
