import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

const logos = [
  require('images/logo-arco.png'),
  require('images/logo-arco.png')
];

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: .8em;
  line-height: 1;
  font-family: "Cinzel";
  color: #111;
  font-weight: normal;
  .logo {
    border-radius: 100%;
    float: left;
    margin-right: -.5em;
    width: 6em;
    margin-top: -.1em;
  }
  a {
    color: inherit;
    &:hover,
    &:active,
    &:focus {
      color: inherit;
    }
  }
  ${media.desktop`
    font-size: 1.4em;
  `}
  img {
    width: 100%;
    height: auto;
    ${media.tablet`
      margin-right: 2vw;
    `}
  }
  .title-text {
    float: left;
  }
  .title-item {
    display: inline-block;
    padding-right: .25em;
    font-size: .8em;
    white-space: nowrap;
    &.title-1 {
      font-size: .75em;
      padding-left: .75em;
    }
    &.title-2 {
      font-size: .5em;
    }
    &.title-3 {
      display: block;
      letter-spacing: -.03em;
      font-size: 1.6em;
      font-weight: 700;
      padding: 0;
    }
  }
`

class SiteTitle extends Component {
  render () {
    const { props } = this;
    const logoIndex = props.logo || 0;
    return (
      <div className="site-title clearfix">
        <Title {...props}>
          <Link to="/">
            <span className="logo">
              <img src={logos[logoIndex]} align="right" alt="Digging into the Mining Arc" />
            </span>

          </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
