import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderIntro from 'components/HeaderIntro';
import Content from 'components/Content';
import IntroTransaction from 'components/IntroTransaction';

const Wrapper = styled.div`
  .logo_overlay {
    position:absolute;
    z-index:9999999;
    width:100%;
    text-align:right;
  }
`;

class PageIntro extends Component {
  render () {
      return (
    <Wrapper>
      <div class='logo_overlay'>
        <HeaderIntro /> 
      </div>
      <Content>
        {this.props.children}
      </Content>
      <IntroTransaction />
    </Wrapper>
  )}
}


export default PageIntro;
