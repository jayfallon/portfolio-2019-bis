import React, {Component} from 'react'
import styled, {ThemeProvider} from 'styled-components';
import Meta from './Meta';
import Header from './Header';
import Theme from './Theme';
import Footer from './Footer';
import GlobalStyle from './Global';
import SideDrawer from './SideDrawer'

const StyledPage = styled.div`
  height: 100%;
`

class Page extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  render() {
    return(
      <ThemeProvider theme={Theme}>
        <StyledPage>
          <GlobalStyle />
          <Meta/>
          <SideDrawer show={this.state.sideDrawerOpen}/>
          <a href="#main__content" className="main__content--link">Skip to main content</a>
          <Header drawerClickHandler={this.drawerToggleClickHandler}/>
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
