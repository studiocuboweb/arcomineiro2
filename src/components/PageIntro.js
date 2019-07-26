import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderIntro from 'components/HeaderIntro';
import Content from 'components/Content';
import {isIOS} from "react-device-detect";
import IntroTransaction from 'components/IntroTransaction';
import "styles/fullbg_video.css";
import { Redirect,withRouter } from "react-router-dom";

const Wrapper = styled.div`
  .logo_overlay {
    position:absolute;
    z-index:9999999;
    width:100%;
  }
  #background-video {
    position: fixed;
    right: 0;
    bottom: 0;
    max-width: 100%;
    max-height: 100%;
    z-index:-1;
  }
`;

class PageIntro extends Component {

  constructor(){
    super()
    this.handleOnEnded = this.handleOnEnded.bind(this);
    this.state = {
      redirect: false
    }
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/story?show=intro' />
    }
  }

  setRedirect() {
    this.setState({
      redirect: true
    })
  }

  componentDidMount() {
    if (isIOS) {
      document.getElementById('background-video').play();
    }
  }

  handleOnEnded() {
    setTimeout(function() {
      document.getElementById('intro_transtion_overlay').classList.add("active");
      setTimeout(function() {
        this.setRedirect()
      }.bind(this), 2600)
    }.bind(this), 1500)
  }
  render () {
      return (
    <Wrapper>
      {this.renderRedirect()}
      <div class='logo_overlay'>
        <HeaderIntro />
      </div>
      <Content>
        {isIOS ? (
          <div id="intro_transtion_overlay">
            <video autoPlay muted playsInline id="background-video" onEnded={this.handleOnEnded}>
              <source src={require("images/video_bg.mp4")} type="video/mp4" />
            </video>
          </div>
        ) : (
          this.props.children
        )}

      </Content>
      <IntroTransaction />
    </Wrapper>
  )}
}

export default withRouter(PageIntro);
