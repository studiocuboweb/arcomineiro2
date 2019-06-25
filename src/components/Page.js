import React, { Component } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';
import { FormattedMessage } from "react-intl";

const Wrapper = styled.div`
  #intro_transtion_overlay {
    position:fixed;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index:8888017;
    background:rgba(0,0,0,1);
    text-align: center;
  }
  #intro_transtion_overlay.up {
    height: 0;
    transition: height 2s;
  }
  #intro_transtion_overlay>span {
    width:100px;
    padding-bottom:15px;
    position:absolute;
    bottom:0;
    left:0;
    right:0;
    margin: 0 auto;
  }
  #intro_transtion_overlay>span>p {
    width:50px;
    margin: 10px auto;
  }
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  .pages-transition-enter {
    opacity: 0.01;
    transform: translate(1rem, 0);
    position: absolute;
  }
  .pages-transition-enter.pages-transition-enter-active {
    opacity: 1;
    transform: translate(0, 0);
    transition: all 600ms ease-in-out;
  }
  .pages-transition-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .pages-transition-exit.pages-transition-exit-active {
    opacity: 0.01;
    transform: translate(-1rem, 0);
    transition: all 200ms ease-in-out;
    position: absolute;
  }
  a.continue {
    display: block;
    text-align: right;
    color: #333;
    .fa {
      margin-left: 1rem;
      font-size: .8em;
    }
  }
`;
// /
export default class Page extends React.Component {
  componentDidMount() {
    document.getElementById('intro_transtion_overlay').classList.add('up');
  }

  render() {
    return(
      <Wrapper>
        <Header />
        <ArticleNav />
        <Content>
          {this.props.children}
        </Content>
        <div id="intro_transtion_overlay"><span>
          <FormattedMessage
            id="intro.skip"
            defaultMessage="Skip Intro"
          />
          <p><i class="arrow down"></i></p></span></div>
      </Wrapper>
  )}
}
