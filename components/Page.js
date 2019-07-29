import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Theme from './Theme';
import Footer from './Footer';
import GlobalStyle from './Global';

const StyledPage = styled.div`
  height: 100%;
`

class Page extends Component {
  render() {
    return(
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta/>
          <a href="#main__content" className="main__content--link">Skip to main content</a>
          <Header/>
          <main id="main__content" role="main">
            {this.props.children}
          </main>
          <Footer/>
        </StyledPage>

      </ThemeProvider>
    )
  }
}

export default Page
