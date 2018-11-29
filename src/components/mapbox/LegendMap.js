import React, {PureComponent} from 'react';
import {fromJS} from 'immutable';
import MAP_STYLE1 from './styles/Map1.json';
import MAP_STYLE2 from './styles/Map2.json';
import "styles/mapbox.css";
import LegendCollapse from './LegendCollapse';
import {Collapse} from 'react-collapse';


const styles = {
  map1: MAP_STYLE1,
  map2: MAP_STYLE2
};

//const categories = ['labels', 'roads', 'mineriailegal-pt-5owfra', 'parks', 'water', 'background'];

const categories = ['LEGENDA1 PONTOS_mineriailegal-pt-5owfra','LEGENDA2 RIOS_mineriailegal-ln-67gxaf','LEGENDA3 AREAS_mineriailegal-pl-6rfpha','Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4 MINERACAO-LEGALZ4_mineria-pl'];

const notShowInLegend = {'map1':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais','LEGENDA4 MINERACAO-LEGALZ4_mineria-pl'],
'map1_5':['Para-MASCARA_div-politica-departamental','COLOMBIA-MASCARA_div-politica-pais','BOLIVIA-MASCARA_div-politica-pais']
};

// Layer id patterns by category
const layerSelector = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': /LEGENDA1 PONTOS_mineriailegal-pt-5owfra/,
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': /LEGENDA2 RIOS_mineriailegal-ln-67gxaf/,
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': /LEGENDA3 AREAS_mineriailegal-pl-6rfpha/,
  'Para-MASCARA_div-politica-departamental': /Para-MASCARA_div-politica-departamental/,
  'COLOMBIA-MASCARA_div-politica-pais': /COLOMBIA-MASCARA_div-politica-pais/,
  'BOLIVIA-MASCARA_div-politica-pais': /BOLIVIA-MASCARA_div-politica-pais/,
  'LEGENDA4 MINERACAO-LEGALZ4_mineria-pl': /LEGENDA4 MINERACAO-LEGALZ4_mineria-pl/
};

const subCategories = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': {
    'activo':'ico_circle-11_active2'
    ,'inactive':'ico_circle-11_inactive2'
    ,'s.i':'ico_circle-11_noinfo2'
    ,'activo (local. aproximada)':'ico_circle-stroked-11_active2'
    ,'inactivo (local. aproximada)':'ico_circle-stroked-11_inactive2'
    ,'s.i (local. aproximada)':'ico_circle-stroked-11_noinfo2'
  },
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': {
    'rios':'#b350f1'
  },
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': {
    'activo':'hsl(260, 100%, 73%)'
    ,'inactivo':'#492173'
    ,'s.i':'#733dd1'    
  },
  'LEGENDA4 MINERACAO-LEGALZ4_mineria-pl': {
    'em exploração':'#29dbc3'
    ,'solicitud':'#037587'
    ,'potencial':'#012f37'  
    ,'s.i':'#000000'    
  }
}

const layerLabels = {
  'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': 'pontos de mineração ilegal',
  'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': 'rios com mineração ilegal',
  'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': 'áreas de mineração ilegal',
  'LEGENDA4 MINERACAO-LEGALZ4_mineria-pl': 'áreas de mineração legal'
};

// Layer color class by type
const colorClass = {
  line: 'line-color',
  fill: 'fill-color',
  background: 'background-color',
  symbol: 'text-color'
};

const defaultContainer = ({children}) => <div className="control-panel">{children}</div>;

export default class StyleControls extends PureComponent {

  constructor(props) {
    super(props);

    this.defaultMapStyle = fromJS(styles[this.props.map]);
    this._defaultLayers = this.defaultMapStyle.get('layers');

    this._setLegendArray();
    
    this.state = {
      displayLegendBG: {'backgroundColor':'none'}, 
      displayLegend: {'display':'none'},
      visibility: {
        'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': true,
        'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': true,
        'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': true,
        'Para-MASCARA_div-politica-departamental': false,
        'COLOMBIA-MASCARA_div-politica-pais': false,
        'BOLIVIA-MASCARA_div-politica-pais': false,
        'LEGENDA4 MINERACAO-LEGALZ4_mineria-pl': false
      },
      color: {
        'LEGENDA1 PONTOS_mineriailegal-pt-5owfra': '#c0c0c8',
        'LEGENDA2 RIOS_mineriailegal-ln-67gxaf': '#b350f1',
        'LEGENDA3 AREAS_mineriailegal-pl-6rfpha': '#a375ff',
        'Para-MASCARA_div-politica-departamental': '',
        'COLOMBIA-MASCARA_div-politica-pais': '',
        'BOLIVIA-MASCARA_div-politica-pais': '',
        'LEGENDA4 MINERACAO-LEGALZ4_mineria-pl': ''
      }
    };
  }

  componentDidMount() {
    if (this.props.showExtraLayers.length > 0) {
      const visibility = {...this.state.visibility, [this.props.showExtraLayers]: true};
      this.setState({visibility})
      this._updateMapStyle({...this.state,visibility});
    } else { 
      this._updateMapStyle(this.state);
    }
  }

  _onColorChange(name, event) {
    const color = {...this.state.color, [name]: event.target.value};
    this.setState({color});
    this._updateMapStyle({...this.state, color});
  }

  _onVisibilityChange(name,target,parent_scope) {
    const visibility = {...parent_scope.state.visibility, [name]: target};
  
    parent_scope.setState({visibility});
    parent_scope._updateMapStyle({...parent_scope.state, visibility});
  }
  
  _updateMapStyle({visibility, color}) {
    const layers = this._defaultLayers
    .filter(layer => {
      const id = layer.get('id');
      return categories.every(name => visibility[name] || !layerSelector[name].test(id));
    })
    .map(layer => {
      const id = layer.get('id');
      const type = layer.get('type');
      const category = categories.find(name => layerSelector[name].test(id));
      if (category && colorClass[type] && color[category] !== '') {
        return layer.setIn(['paint', colorClass[type]], color[category]);
      }
      return layer;
    });
    this.props.onChange(this.defaultMapStyle.set('layers', layers));
  }

  _setLegendArray() {
    return categories[this.props.legend];
  }

  _renderLayerControl(name) {
    if (notShowInLegend[this.props.legend].indexOf(name) <= -1 && layerLabels[name] != undefined) {
      const {visibility} = this.state;
      return (
          <div>
          <LegendCollapse 
            name={name} 
            label={layerLabels[name]} 
            visibility={visibility[name]}
            subCategories={{subCategories}}
            onVisibilityChange={this._onVisibilityChange}
            parentScope={this}
          />
          </div>
      );
    }
  }
  _toggleLegend() {
    if (this.state.displayLegend['display'] == 'none') {
      this.setState({displayLegend: {'display':'block'}})
      this.setState({displayLegendBG: {'backgroundColor':'#fff'}})
    } else {
      this.setState({displayLegend: {'display':'none'}})
      this.setState({displayLegendBG: {'backgroundColor':'transparent'}})
    }
  }
  render() {
    const Container = this.props.containerComponent || defaultContainer;
    return (
      <Container>
        <div style={this.state.displayLegendBG} className='control-panel-padding'>
          <button className='fa fa-map mapbox_legend-ico mapbox_legend-block mapbox_legend-button' style={{'cursor':'pointer'}} onClick={this._toggleLegend.bind(this)}></button>
          <div style={this.state.displayLegend}>
            <div className='mapbox_legend-align-center'>
              <h5>Legend</h5>
              <a href='#' className='fa fa-window-close mapbox_legend-btn-close' onClick={this._toggleLegend.bind(this)}></a>
            </div>
            <hr />
            { 
              categories.map((name) => this._renderLayerControl(name,this)) 
            }
          </div>
        </div>
      </Container>
    );
  }
}