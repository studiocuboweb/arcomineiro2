import React, { Component } from 'react';
import styled from 'styled-components';
import { media, color } from 'styles/utils';
import { NavLink, Link } from 'react-router-dom';

import SiteTitle from './SiteTitle';

const logos = [
  require('images/logo-arco.png'),
];

const Wrapper = styled.header`
  flex: 0 0 auto;
  padding: .5rem 1rem;
  .header-content {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
    text-align:right;
    clear: both;
  }
  .background-logo {
    width:100%;
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
    padding: 1vw 0vw;
  `}
  ${media.desktopHD`
    padding: 1vw 0vw;
  `}
`

class HeaderIntro extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <Wrapper>
        <div className="header-content">
          <div class="background-logo">
            <Link to="/">
              <span className="logo">
                <img src={logos[logoIndex]} align="right" alt="Venezuela, the smugglers paradi$e" />
              </span>

            </Link>
          </div>
        </div>
      </Wrapper>
    )
  }
}

export default HeaderIntro;
