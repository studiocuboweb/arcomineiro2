import React from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import IlegalMining1 from './components/IlegalMining1'
import IlegalMining2 from './components/IlegalMining2'
import IlegalMining3 from './components/IlegalMining3'
import LegalMining from './components/LegalMining'

class LegendCollapse extends React.Component {

    constructor(props) {
        super(props);
        
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapse: false,
            arrowClass: 'fa fa-caret-right'
        };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
        if (this.state.collapse) {
            this.setState({arrowClass: 'fa fa-caret-right'})
        } else { 
            this.setState({arrowClass: 'fa fa-caret-down'})
        }
    }

    _onChangeHandler(name,event,checked) {
        this.props.onVisibilityChange(name,checked,this.props.parentScope)
    }

    render() {
        const {legend} = this.props;
        return (
            <div key="1" className="input">
            {console.log("LEGENDA")}
            {console.log(legend)}
            {legend == 'legend1' &&
                <div>
                    <IlegalMining1 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IlegalMining2 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IlegalMining3 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                </div>
            }
            {legend == 'legend2' &&
                <div>
                    <IlegalMining1 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IlegalMining2 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <IlegalMining3 defaultOpened={false} _onChangeHandler={this._onChangeHandler.bind(this)} />
                    <LegalMining defaultOpened={true} _onChangeHandler={this._onChangeHandler.bind(this)} /> 
                </div>
            }
            </div>
        );
      }

}

export default LegendCollapse