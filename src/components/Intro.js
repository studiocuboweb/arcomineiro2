import React, { Component } from "react";
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from "styles/utils";
import { injectIntl, intlShape } from "react-intl";
import { withRouter } from "react-router-dom";
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

  var locations = [
  {
      "id": 1,
      "slide": 2,
      "title": "intro.title2",
      "description":"intro.text2",
      "camera": {
        center: [-67.305707, 5.711382],
        zoom: 6.04,
        bearing: 0,
        pitch: 30.00
      },
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO','CO-VE_admin-0-boundary']
  }, {
      "id": 2,
      "slide": 3,
      "title": "intro.title3",
      "description":"intro.text3",
      "camera": {
        center: [-71.144278, 11.172461],
        zoom: 5.49,
        bearing: 0,
        pitch: 60.00
      },
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO','CO-VE_admin-0-boundary']
  }, {
      "id": 0,
      "slide": 4,
      "title": "intro.title4",
      "description":"intro.text4",
      "camera": {
        center: [-69.441990, 11.761046],
        zoom: 7.57,
        bearing: 0,
        pitch: 10.00
      },
      "showLayers":['cidadesfronteraCO']
  }, {
      "id": 3,
      "slide": 5,
      "title": "intro.title5",
      "description":"intro.text5",
      "camera": {
      center: [-41.682555, 27.970897],
      zoom: 3.32,
      bearing: 0,
      pitch: 30.00
      },
      "showLayers":['NL_admin-0-boundary']
  },{
    "id": 0,
    "slide": 1,
    "title": "intro.title1",
    "description":"intro.text1",
    "camera": {
    center: [-66.484489, 6.917248],
    zoom: 4.77,
    bearing: 0,
    pitch: 0
    },
    "showLayers":['']
}];
// const map = '';
class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 6.917248,
        longitude: -66.484489,
        zoom: 4.77,
      },
      center: [-66.484489, 6.917248],
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
    const scope = this;
    const map = this._map.getMap()
    var location = this.props.intl.locale
    console.log('location 2')
    console.log(location)
    if (location != 'en' && location != 'es' && location != 'pt') {
      location = 'en';
    }
    map.on('load', function() {
      map.setLayoutProperty('country-label-', 'text-field', ['get', 'name_'+location]);
      map.addLayer({
        "id": "highlight",
        "type": "fill",
        "source": {
          "type": "vector",
          "url": "mapbox://infoamazonia.1w2pvk3g"
          },
          "source-layer": "Arrows_merged_Yap-4dsic3",
          "paint": {"fill-color": "hsl(344, 91%, 50%)"},
          "filter": ["==", "id", ""]
        });

        scope.playback(locations.length - 1,map);
    })
      
  }

  _onViewportChange = viewport => {
    this.setState({viewport});
  }

  highlightBorough(code,map) {
    // Only show the polygon feature that cooresponds to `borocode` in the data
    map.setFilter('highlight', ["==", "id", code]);
  }

  playback(index,map) {
    if (index == (locations.length - 1)) {
      map.setLayoutProperty('PNYapacana_nacionales_LABEL', 'visibility', 'none');
      map.setLayoutProperty('PNYapacana_nacionales', 'visibility', 'none');
      map.setLayoutProperty('cidadesfronteraCO', 'visibility', 'none');
      map.setLayoutProperty('NL_admin-0-boundary', 'visibility', 'none');
      map.setLayoutProperty('CO-VE_admin-0-boundary', 'visibility', 'none');
    }

    locations[index].showLayers.sort().map( function(currentLayer,subindex) {
      var lastLayerArr = locations[(index-1 < 0 ? locations.length - 1 : index-1)].showLayers.sort();
      var lastLayer = lastLayerArr[subindex];
      //hide currents layers
      if (lastLayer != undefined) {
        map.setLayoutProperty(lastLayer, 'visibility', 'none');
      }
      
      //show currents layers
      if (currentLayer != undefined) {
        map.setLayoutProperty(currentLayer, 'visibility', 'visible');
      }
    })
    //debugger;
    this.setState({content:{title:locations[index].title,description:locations[index].description}});
    const scope = this;
    this.highlightBorough(locations[index].id ? locations[index].id : '',map);
    map.flyTo(locations[index].camera);
    map.once('moveend', function() {
        // Duration the slide is on screen after interaction
        window.setTimeout(function() {
        // Increment index
        index = (index + 1 === locations.length) ? 0 : index + 1;
        scope.playback(index,map);
      }, 6000); // After callback, show the location for 6 seconds.
    });
  }

  render() {
    const {intl} = this.props;
    const {viewport,settings,content} = this.state;
    console.log('location');
    console.log(this.props.intl.locale);
    //inglês
    var defaultMapStyle = 'mapbox://styles/infoamazonia/cjxut7brt9j801cnt63yld5em';
    if (this.props.intl.locale.search('es') > -1) {
      //espanhol
      defaultMapStyle = 'mapbox://styles/infoamazonia/cjxv0o61x05h11cpdwbarjjyf';
    } else if (this.props.intl.locale.search('pt') > -1) {
      //portugues
      defaultMapStyle = 'mapbox://styles/infoamazonia/cjxv0spzv1l451cs2l5b6y12u';
    }
    console.log('mapa')
    console.log(defaultMapStyle)
    return (
      <div>
        <Overlay>
          <div class='map-overlay'>
            <p id='location-description'><FormattedMessageFixed id={content.description} defaultMessage="description" /></p>
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

Intro.propTypes = {
  intl: intlShape.isRequired
};

export default injectIntl(withRouter(Intro));