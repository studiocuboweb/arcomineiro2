import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import Header from 'components/Header';
import ArticleNav from 'components/Nav';
import Content from 'components/Content';

const Wrapper = styled.div`
  #intro_transtion_overlay {
    position:fixed;
    display:block;
    padding:0;
    margin:0;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    z-index:8888017;
    background:rgba(0,0,0,0);
    text-align: center;
  }
  #intro_transtion_overlay.active {
    -webkit-transition: background .5s ease-out;
    -moz-transition: background .5s ease-out;
      -o-transition: background .5s ease-out;
          transition: background .5s ease-out;
    background:rgba(0,0,0,1);
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

class PageIntro extends Component {

  constructor(){
    super()
    this.handleScroll = this.handleScroll.bind(this);
    this.setRedirect = this.setRedirect.bind(this);
  }

  state = {
    redirect: false
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      console.log('redirecionado');
      return <Redirect to='/story' />
    }
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll, { passive: true })
    window.addEventListener('touchmove', this.handleScroll, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll)
    window.removeEventListener('touchmove', this.handleScroll)
  }

  handleScroll() {
    document.getElementById('intro_transtion_overlay').classList.add("active");
    setTimeout(function() {
      this.setRedirect()
    }.bind(this), 500)
  }
  setRedirect() {
    this.setState({
      redirect: true
    })
  }
  render () {
      return (
    <Wrapper>
      {this.renderRedirect()}
      <Content>
        {this.props.children}
      </Content>
      <div id="intro_transtion_overlay"><span>scroll down<p><i class="arrow down"></i></p></span></div>
    </Wrapper>
  )}
}


export default PageIntro;
