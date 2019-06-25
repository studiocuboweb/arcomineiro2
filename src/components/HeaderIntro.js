import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';

import SiteTitle from './SiteTitle';

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: .5rem 1rem;
  .header-content {
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
    text-align:right;
    clear: both;
  }
  .background-logo {
    background:rgb(255,255,255,1);
    padding:1rem;
    ${media.phone`
      padding:0rem;
    `}
    ${media.tablet`
      padding:0rem;
    `}
    ${media.phablet`
      padding:1rem;
    `}
    ${media.desktop`
      padding:1rem;
    `}
    ${media.desktopHD`
      padding:1rem;
    `}
  }
  ${media.phablet`
    padding: 1rem;
    font-size: 1em;
  `}
  ${media.desktop`
    padding: 1.5vw 8vw;
  `}
  ${media.desktopHD`
    padding: 1.5vw 10vw;
  `}
  .site-title {
    flex: 1 1 100%;
    font-size: .6em;
  }
`

class HeaderIntro extends Component {
  render () {
    return (
      <Wrapper>
        <div className="header-content">
          <div class="background-logo">
            <SiteTitle logo="1" />
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default HeaderIntro;
