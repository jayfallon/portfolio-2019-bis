import React, { Component } from 'react';
import styled from 'styled-components';
import Meta from './Meta';
import GlobalStyle from './Global';
import SideDrawer from './SideDrawer';

const StyledPage = styled.div`
  height: 100%;
`;

class Page extends Component {
  render() {
    return (
      <StyledPage>
        <GlobalStyle />
        <Meta />
        <a href="#main__content" className="main__content--link">
          Skip to main content
        </a>
        <a name="pageTop" id="pageTop" />
        {this.props.children}
      </StyledPage>
    );
  }
}

export default Page;
