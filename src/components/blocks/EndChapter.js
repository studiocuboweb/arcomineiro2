import React, { Component } from "react";
import styled, { css } from "styled-components";
import { media } from "styles/utils";
import { margins } from "./utils";

const phabletML = '4vw';
const desktopML = '8vw';

const Wrapper = styled.div`
  padding: 1rem 0;
  background: #f7f7f7;
  margin: 0 3vw;
  font-size: .6em;
  position: relative;
  z-index: 1;
  border: 3px solid #FEEFAF;
  border-bottom: 12px solid #FEEFAF;
  width: 90vw;
  ${media.desktop`
    width: 51vw;
    // margin: 0 3vw;
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
    margin: 0 1vw;
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
    width: 85vw;
    margin-left: 2vw;
    ${media.phablet`
      width: 80vw;
      margin-left: ${phabletML};
    `}
    ${media.desktop`
      width: 55%;
      margin-right: 45%;
    `}
  }
  .end-chapter-content > strong {
    margin-left: 2vw;
    ${media.phablet`
      margin-left: ${phabletML};
    `}
  }
  .end-chapter-content > .image-wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
    ${media.phablet`
      flex-direction: row;
      margin-left: ${phabletML};
    `}
  }
  // .end-chapter-content > .image-wrapper > iframe {
  //   ${media.phone`
  //     width: 100%;
  //   `}
  // }
  .graph-description {
    font-size: .9rem;
    opacity: .6;
    width: 85vw;
    margin-left: 3vw;
    ${media.phablet`
      margin-left: 0;
    `}
  }
`;
export default ({ children }) => (
  <Wrapper>
    <span className="end-chapter-content">{children}</span>
  </Wrapper>
);