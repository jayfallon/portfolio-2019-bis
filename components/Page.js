import React, {Component} from 'react'
import styled from 'styled-components';
import Meta from './Meta';
import GlobalStyle from './Global';
import SideDrawer from './SideDrawer';

const StyledPage = styled.div`
  height: 100%;
`

class Page extends Component {

  state = {
    sideDrawerOpen: false,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  }

  drawerCloseClickHandler = () => {
    this.setState({sideDrawerOpen: false});
  }

  render() {
    return(
      <StyledPage>
        <GlobalStyle />
        <Meta/>
        <SideDrawer show={this.state.sideDrawerOpen} hide={this.drawerCloseClickHandler}/>
        <a href="#main__content" className="main__content--link">Skip to main content</a>
        {/* <Header drawerClickHandler={this.drawerToggleClickHandler}/> */}
        <a name="pageTop" id="pageTop"/>
        {this.props.children}
      </StyledPage>
    )
  }
}

export default Page
