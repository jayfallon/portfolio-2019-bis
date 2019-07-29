import styled from 'styled-components'
import media from '../MediaQueries'

const HeaderStyles = styled.section`
    margin: 0 auto;
    max-width: 92rem;
    h1 {
        color: ${props => props.theme.headerLinkColor};
        font-family: shackleton-condensed, serif;
        font-size: 3.9rem;
        line-height: 1.33;
    }
`
export default HeaderStyles
