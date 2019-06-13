import React, { Component } from "react";
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import PropTypes from 'prop-types';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiaW5mb2FtYXpvbmlhIiwiYSI6InItajRmMGsifQ.JnRnLDiUXSEpgn7bPDzp7g'; // Set your mapbox token here

const Overlay = styled.section`
  .map-overlay-container {
    position: absolute;
    width: 25%;
    top: 0;
    left: 0;
    padding: 10px;
    z-index: 1;
  }
  .map-overlay {
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    background-color: #fff;
    border-radius: 3px;
    padding: 10px;
    box-shadow:0 1px 2px rgba(0,0,0,0.20);
  }
  .map-overlay h2, .map-overlay p {
    margin: 0 0 10px;
  }`;

  var title = {}
  var description = {}

  var locations = [{
  "id": "2",
  "title": "The Bronx",
  "description": "This is where hip-hop was born, where the Yankees became a dynasty and where you can find New York City's leading zoo and botanical garden.",
  "camera": {
  center: [-73.8709, 40.8255],
  zoom: 12.21,
  pitch: 50
  }
  }, {
  "id": "3",
  "title": "Brooklyn",
  "description": "No matter how hip it looks on TV, NYC's most populous borough is best experienced in person. Read on to find out about live music, Prospect Park, Nets basketball and more.",
  "camera": {
  center: [-73.9499, 40.6260],
  bearing: -8.9,
  zoom: 11.68
  }
  }, {
  "id": "1",
  "title": "Manhattan",
  "description": "Even if you think you know Manhattan—its world-class museums, fine dining and unforgettable views—the borough always has something new and exciting in store.",
  "camera": {
  center: [-74.0070, 40.7437],
  bearing: 25.3,
  zoom: 11.5
  }
  }, {
  "id": "4",
  "title": "Queens",
  "description": "Taste food from around the globe, watch Mets baseball and US Open tennis, see cutting-edge art and more in one of the world's most diverse places.",
  "camera": {
  center: [-73.8432, 40.6923],
  bearing: 36,
  zoom: 11.37
  }
  }, {
  "id": "5",
  "title": "Staten Island",
  "description": "Take a free ferry ride to an island getaway filled with historic architecture, stunning views, gardens and many family-friendly attractions.",
  "camera": {
  center: [-74.1991, 40.5441],
  bearing: 28.4,
  zoom: 11.64
  }
  }, {
  "title": "Boroughs of new york",
  "description": "New York City is made up of five boroughs: the Bronx, Brooklyn, Manhattan, Queens and Staten Island. Each one has enough attractions—and enough personality—to be a city all its own.",
  "camera": {
  center: [-74.0315, 40.6989],
  zoom: 9.68,
  bearing: 0,
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
      }
    }
  }
  componentDidMount() {
    // Display the last title/description first
    title = document.getElementById('location-title');
    description = document.getElementById('location-description');
    title.innerHTML = locations[locations.length - 1].title;
    description.innerHTML = locations[locations.length - 1].description;
    const scope = this;
    const map = this._map.getMap()
    
    map.on('load', function() {
      map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": {
        "type": "vector",
        "url": "mapbox://mapbox.8ibmsn6u"
        },
        "source-layer": "original",
        "paint": {
        "fill-color": "#fd6b50",
        "fill-opacity": 0.25
        },
        "filter": ["==", "borocode", ""]
        }, 'settlement-subdivision-label');

        // Start the playback animation for each borough
        scope.playback(0,map);
    })
      
  }
  componentWillUnmount() {

  }
  componentWillReceiveProps(nextProps) {

  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  highlightBorough(code,map) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    console.log('highlightBorough')
    console.log(code)
    map.setFilter('highlight', ["==", "borocode", code]);
  }

  playback(index,map) {
    title.innerHTML = locations[index].title;
    description.innerHTML = locations[index].description;
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
    const {viewport,settings} = this.state;
    const defaultMapStyle = 'mapbox://styles/mapbox/streets-v10';
    return (
      <div>
        <Overlay class='map-overlay-container'>
          <div class='map-overlay'>
            <h2 id='location-title'></h2>
            <p id='location-description'></p>
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