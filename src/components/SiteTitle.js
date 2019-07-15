import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { media, color } from 'styles/utils';
import { Link } from 'react-router-dom';

const logos = [
  require('images/novo_logo/logo_paraiso_branca.svg'),
  require('images/novo_logo/logo_paraiso_preta.svg')
];

const Title = styled.h1`
  display: block;
  margin: 0;
  font-size: .8em;
  line-height: 1.3;
  font-family: "Cinzel";
  color: #111;
  font-weight: normal;
  .logo {
    border-radius: 100%;
    float: left;
    margin-right: -.5em;
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
    line-height: 1.3;
  }
  .title-item {
    display: inline-block;
    padding-right: .25em;
    font-size: .8em;
    white-space: nowrap;
    line-height: 1;
    &.title-1 {
      font-size: 1.75em;
      font-weight: 700;
    }
    &.title-2 {
      font-size: 1.75em;
      font-weight: 400; 
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
      <div className="site-title">
        <Title {...props}>
          <Link to="/">
            <span className="logo">
              <img src={logos[logoIndex]} align="right" alt=" " />
            </span>
            <span className="title-text">
              <span className="title-item title-1">
                <FormattedMessage
                  id="general.siteTitle1"
                  defaultMessage="Venezuela," />
              </span>
              <br />
              <span className="title-item title-2">
                <FormattedMessage
                  id="general.siteTitle2"
                  defaultMessage="THE SMUGGLERS" />
              </span>
              <br />
              <span className="title-item title-1">
                <FormattedMessage
                  id="general.siteTitle3"
                  defaultMessage="PARADI$E" />
              </span>
            </span>
          </Link>
        </Title>
      </div>
    )
  }
}

export default SiteTitle;
