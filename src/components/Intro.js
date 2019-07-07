import React, { Component } from "react";
import ReactMapGL from 'react-map-gl';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { media } from "styles/utils";
import { injectIntl, intlShape } from "react-intl";
import { withRouter } from "react-router-dom";
import FormattedMessageFixed from "components/blocks/FormattedMessageFixed";
import IntroEN from 'components/mapbox/intros/styleEN.json';
import IntroES from 'components/mapbox/intros/styleES.json';
import IntroPT from 'components/mapbox/intros/stylePT.json';


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
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO', 'CO-VE_admin-0-boundary', 'Bogota_capital-pais']
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
      "showLayers":['PNYapacana_nacionales_LABEL', 'PNYapacana_nacionales', 'cidadesfronteraCO', 'CO_admin-0-boundary', 'Bogota_capital-pais', 'Medellin_capital-departamento','CO-VE_admin-0-boundary']
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
    center: [-67.013959, 6.436368],
    zoom: 5.60,
    bearing: 0,
    pitch: 0
    },
    "showLayers":['VE_admin-0-boundary','VE_country-label']
}];
// const map = '';
class Intro extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        width: window.innerWidth,
        height: window.innerHeight,
        latitude: 6.436368,
        longitude: -67.013959,
        zoom: 5.60,
      },
      center: [-67.013959, 6.436368],
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
    console.log('componentDidMount')
    var location = this.props.intl.locale
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

        // Start the playback animation for each borough
        //scope.setState({content:{title:locations[locations.length - 1].title,description:locations[locations.length - 1].description}});
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
    console.log('playback')
    console.log(index)
    console.log('slide')
    console.log(locations[index].slide)
    if (index == (locations.length - 1)) {
      console.log('ZEROU O INDEX')
      map.setLayoutProperty('VE_admin-0-boundary', 'visibility', 'none');
      map.setLayoutProperty('VE_country-label', 'visibility', 'none');
      map.setLayoutProperty('PNYapacana_nacionales_LABEL', 'visibility', 'none');
      map.setLayoutProperty('PNYapacana_nacionales', 'visibility', 'none');
      map.setLayoutProperty('cidadesfronteraCO', 'visibility', 'none');
      map.setLayoutProperty('CO-VE_admin-0-boundary', 'visibility', 'none');
      map.setLayoutProperty('Bogota_capital-pais', 'visibility', 'none');
      map.setLayoutProperty('Medellin_capital-departamento', 'visibility', 'none');
      map.setLayoutProperty('NL_admin-0-boundary', 'visibility', 'none');
    }

    locations[index].showLayers.sort().map( function(currentLayer,subindex) {
      var lastLayerArr = locations[(index-1 < 0 ? locations.length - 1 : index-1)].showLayers.sort();
      var lastLayer = lastLayerArr[subindex];
      //hide currents layers
      if (lastLayer != undefined) {
        console.log('lastLayer')
        console.log(lastLayer)
        map.setLayoutProperty(lastLayer, 'visibility', 'none');
      }
      
      //show currents layers
      if (currentLayer != undefined) {
        console.log('currentLayer')
        console.log(currentLayer)
        map.setLayoutProperty(currentLayer, 'visibility', 'visible');
      }
    })
    //debugger;
    this.setState({content:{title:locations[index].title,description:locations[index].description}});
    const scope = this;
    this.highlightBorough(locations[index].id ? locations[index].id : '',map);
    if (index == (locations.length - 1)) {
      // Animate the map position based on camera properties
      console.log('entrou no if')
      window.setTimeout(function() {
        console.log('TIME OUT')
        map.flyTo(locations[index].camera);
      }, 6000); // After callback, show the location for 6 seconds.
    } else {
      console.log('entrou no else')
      map.flyTo(locations[index].camera);
    }
    map.once('moveend', function() {
        console.log('moveend')
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
    console.log(intl.location);
    const {viewport,settings,content} = this.state;
    //var defaultMapStyle = 'mapbox://styles/infoamazonia/cjxnsk3am31lj1cs1v9ycmtzr';
    var defaultMapStyle = IntroEN;
    //const defaultMapStyle = 'mapbox://styles/mapbox/streets-v10';
    if (intl.location == 'es') {
      defaultMapStyle = IntroES;
    } else if (intl.location == 'pt') {
      defaultMapStyle = IntroPT;
    }
    return (
      <div>
        <Overlay>
          <div class='map-overlay'>
            <p id='location-description'><FormattedMessageFixed id={content.description} defaultMessage="description" /></p>
          </div>
        </Overlay>
        {console.log(defaultMapStyle)} 
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