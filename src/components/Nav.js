import React, { Component } from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { media } from 'styles/utils';
import { Collapse } from 'react-collapse';

const Wrapper = styled.nav`
  font-family: "Cinzel", serif;
  font-weight: 600;
  font-size: .4em;
  text-align: left;
  background: #f7f7f7;
  box-shadow: 0 .2rem .5rem rgba(0,0,0,0.05);
  position: relative;
  z-index: 10;
  flex: 0 0 auto;
  ol {
    margin: 0;
    padding: 0;
    li {
      list-style-type: none;
      margin-left: 15px;
      margin-top: 7px;
      margin-bottom: 3px;
      padding: 0;
      line-height: 1;
      overflow: hidden;
      a {
        z-index: 1;
        color: #aaa;
        padding: .5rem;
        text-transform: uppercase;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        border-bottom: 1px solid #ddd;
          transition: all .2s ease-in-out;
          z-index: 2;
        }
        &:hover,
        &:active,
        &:focus {
          color: #333;
        }
        &.active {
          color: #333;
          background: #fff;
          .progress {
            height: 1px;
            background: #f09429;
            box-shadow: 0 0 .5rem #f09429;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 768px) {
    li {
      a {
        font-size: 0.8rem
      }
    }
    ol li {
      padding: 1.1rem 0 1rem .5rem;
    }
  }
  // ${media.phablet`
  //   ol li a {
  //     padding: 1rem 0 1rem .5rem;
  //   }
  // `}
  ${media.tablet`
    font-size: .6em;
  `}
  ${media.desktop`
    text-align: center;
    ol {
      display: table;
      table-layout: fixed;
      width: 100%;
      li {
        display: table-cell;
        position: relative;
        a {
          position: relative;
          display: block;
          .progress {
            display: block;
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            background: #bbb;
          }
        }
      }
    }
    ol li a {
      padding: 1rem 0 1rem .5rem;
    }
  `}
  ${media.desktopHD`
    font-size: .7em;
  `}

  //////////

  
  .menu-icon-wrapper {
    padding: 4px;
    background-color: #F7F7F7;
    border-bottom-right-radius: 2px;
  }
  .menu-toggle {
    height: 11px;
    width: 19px;
    // position: absolute;
    left: 15px;
    top: 5px;
    cursor: pointer;
    margin-left: 0;
    font-size:1.2rem;
    ${media.desktop`
      display: none;
    `}
  }
`

const mapStateToProps = (state, ownProps) => {
  return {
    scrolls: state.context.storyScroll,
    heights: state.context.storyHeight
  }
}

const ProgressBar = connect(mapStateToProps)(({ ...props }) => {
  const { scrolls, heights, path } = props;
  if(path) {
    let progress = 0;
    if(scrolls[path] && heights[path]) {
      progress = scrolls[path]/heights[path]*100;
    }
    return (
      <span className="progress" style={{
        width: progress + '%'
      }} />
    )
  } else {
    return null;
  }
})

class ArticleNav extends Component {

  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.checkResize = this.checkResize.bind(this);
    this.state = {
      collapsed: false
    };
  }

  /**
   * Add event listener
   */
  componentDidMount() {
    if (((typeof window.orientation == "undefined") && (navigator.userAgent.indexOf('IEMobile') == -1))) {
      this.setState({
        collapsed: true
      });
    }
    window.addEventListener("resize", this.checkResize.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener("resize", this.checkResize.bind(this));
  }

  checkResize() {
    console.log('checkresize')
    if (((typeof window.orientation == "undefined") && (navigator.userAgent.indexOf('IEMobile') == -1))) {
      this.setState({
        collapsed: true
      });
    }
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <Wrapper>
      <span className='menu-icon-wrapper'><i className="fa fa-bars menu-toggle" onClick={() => this.toggleNavbar()}></i></span>
      <Collapse isOpened={this.state.collapsed}>
        <ol>
          <li>
            <NavLink exact to="/story">
              <FormattedMessage
                id="articles.title1"
                defaultMessage="title1" />
              <ProgressBar path="/story" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/mercury">
              <FormattedMessage
                id="articles.title2"
                defaultMessage="title2" />
              <ProgressBar path="/story/mercury" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/protected-areas">
              <FormattedMessage
                id="articles.title3"
                defaultMessage="title3" />
              <ProgressBar path="/story/protected-areas" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/indigenous-territories">
              <FormattedMessage
                id="articles.title4"
                defaultMessage="title4" />
              <ProgressBar path="/story/indigenous-territories" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/story/conflicts">
              <FormattedMessage
                id="articles.title5"
                defaultMessage="title5" />
              <ProgressBar path="/story/conflicts" />
            </NavLink>
          </li>
        </ol>
      </Collapse>
      </Wrapper>
    )
  }
}

export default ArticleNav;
