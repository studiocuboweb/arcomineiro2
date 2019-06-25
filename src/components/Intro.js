import React, { Component } from "react";
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from "styles/utils";
import { FormattedMessage } from "react-intl";
import FormattedMessageFixed from "components/blocks/FormattedMessageFixed";


const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g'; // Set your mapbox token here

const Overlay = styled.section`
  ${media.phone`
    position: static;
    margin-top:1rem;
    padding: 10px;
    z-index: 1;
  `}
  ${media.phablet`
    position: static;
    margin-top:1rem;
    padding: 10px;
    z-index: 1;
  `}
  ${media.desktop`
    position: absolute;
    width: 25%;
    top: 40%;
    left: 0;
    padding: 10px;
    z-index: 1;
  `}
  ${media.desktopHD`
    position: absolute;
    width: 25%;
    top: 40%;
    left: 0;
    padding: 10px;
    z-index: 1;
  `}
  .map-overlay {
    font-size: .9rem;
    background-color: #fff;
    padding: 15px;
    ${media.phone`
      box-shadow: none;
      margin-top: 35px;
    `}
    ${media.phablet`
      box-shadow: none;
      margin-top: 35px;
    `}
    ${media.desktop`
      box-shadow:0 1px 2px rgba(0,0,0,0.20);
    `}
    ${media.desktopHD`
      box-shadow:0 1px 2px rgba(0,0,0,0.20);
    `}
  }
  .map-overlay h2, .map-overlay p {
    margin: 0 0 10px;
  }`;

  var title = {}
  var description = {}

  var locations = [{
  "id": 1,
  "title": "intro.title1",
  "description":"intro.text1",
  "camera": {
  center: [-64.284679, 5.541481],
  zoom: 5.85,
  }
  }, {
  "id": 2,
  "title": "intro.title2",
  "description":"intro.text2",
  "camera": {
  center: [-64.284679, 5.541481],
  bearing: -8.9,
  zoom: 5.85,
  }
  }, {
  "id": 1,
  "title": "intro.title3",
  "description":"intro.text3",
  "camera": {
  center: [-64.284679, 5.541481],
  zoom: 5.85,
  }
  }, {
  "id": 2,
  "title": "intro.title4",
  "description":"intro.text4",
  "camera": {
  center: [-64.284679, 5.541481],
  bearing: -8.9,
  zoom: 5.85,
  }
  }, {
  "id": 1,
  "title": "intro.title5",
  "description":"intro.text5",
  "camera": {
  center: [-74.1991, 40.5441],
  bearing: -8.9,
  zoom: 5.85,
  }
  }, {
  "title": "intro.title6",
  "description":"intro.text6",
  "camera": {
  center: [-74.0315, 40.6989],
  zoom: 5.85,
  bearing: -8.9,
  pitch: 0
  }
  }];
// const map = '';
class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 40.6989,
        longitude: -74.0315,   
        minZoom: 9,
        maxZoom: 16,   
        zoom: 9.68
      },
      settings: {
        dragPan: false,
        dragRotate: false,
        scrollZoom: false,
        touchZoom: false,
        touchRotate: false,
        keyboard: false,
        doubleClickZoom: false,
        minZoom: 0,
        maxZoom: 20,
        minPitch: 0,
        maxPitch: 85
      },
      content: {
        title:locations[locations.length - 1].title,
        description:locations[locations.length - 1].description
      }
    }
  }
  componentDidMount() {
    // Display the last title/description first
    console.log("DidMount");
    console.log(locations[locations.length - 1].title);
    this.setState({content:{title:locations[locations.length - 1].title,description:locations[locations.length - 1].description}});
    const scope = this;
    const map = this._map.getMap()
    
    map.on('load', function() {
      map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": {
          "type": "vector",
          "url": "mapbox://infoamazonia.axa8vv2c"
          },
            "source-layer": "arrows3-3yd3g3",
            "paint": {
              "fill-color": "#fd6b50",
              "fill-opacity": 1
          },
          "filter": ["==", "id", ""]
        });

        // Start the playback animation for each borough
        scope.playback(0,map);
    })
      
  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  highlightBorough(code,map) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    console.log('highlightBorough')
    console.log(code)
    map.setFilter('highlight', ["==", "id", code]);
  }

  playback(index,map) {
    this.setState({content:{title:locations[index].title,description:locations[index].description}});
    const scope = this;
    this.highlightBorough(locations[index].id ? locations[index].id : '',map);
     
    // Animate the map position based on camera properties
    map.flyTo(locations[index].camera);
     
    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
        // Increment index
        index = (index + 1 === locations.length) ? 0 : index + 1;
        scope.playback(index,map);
      }, 3000); // After callback, show the location for 3 seconds.
    });
  }

  render() {
    const {viewport,settings,content} = this.state;
    //const defaultMapStyle = 'mapbox://styles/mapbox/streets-v10';
    const defaultMapStyle = 'mapbox://styles/infoamazonia/cjxaz1yr742441cqm9vozuovl';
    return (
      <div>
        <Overlay>
          <div class='map-overlay'>
            <h2 id='location-title'><FormattedMessageFixed id={content.title} defaultMessage="title" /></h2>
            <p id='location-description'><FormattedMessageFixed id={content.description} defaultMessage="description" /></p>
            <small>Text credit: <a target='_blank' href='http://www.nycgo.com/neighborhoods'>nycgo.com</a></small>
          </div>
        </Overlay>
        <ReactMapGL
          {...viewport}
          {...settings}
          ref={(c) => this._map = c}
          mapStyle={defaultMapStyle}
          onViewportChange={this._onViewportChange}
          mapboxApiAccessToken={MAPBOX_TOKEN} >
        </ReactMapGL>
      </div>
    );
  }
}

Intro.propTypes = {
  viewportDimensions: PropTypes.object
};

export default (Intro);