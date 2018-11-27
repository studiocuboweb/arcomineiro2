import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const Wrapper = styled.div`
  padding: 1rem;
  background: #f7f7f7;
  font-size: .6em;
  position: relative;
  z-index: 1;
  ${media.desktop`
    border: 3px solid #FEEFAF;
    border-bottom: 12px solid #FEEFAF;
    width: 45vw;
    margin: 0 6vw;
    margin-bottom: 1.5rem;
    ${props => css`
      float: ${props.float || "left"};
    `}
  `}
  ${media.desktopHD`
    margin-bottom: 2rem;
  `}
  .end-chapter-content {
    max-width: 500px;
    margin: 0 auto;
    position: relative;
    display: block;
    ${media.desktopHD`
      max-width: 640px;
    `};
  }
  .end-chapter-content > div {
    font-weight: bold !important;
  }
  .end-chapter-content > .pull-left {
    display: block;
    width: 50%;
    margin-right: 50%;
  }
  .end-chapter-content > .pull-right {
    display: block;
    width: 50%;
    margin-left: 50%;
  }

  .graph-description { //move to main css file (?)
    font-size: 1.2rem;
    opacity: .6;
  }
`;
export default ({ children }) => (
  <Wrapper>
    <span className="end-chapter-content">{children}</span>
  </Wrapper>
);