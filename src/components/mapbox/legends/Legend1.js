import React from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import IlegalMining1 from './components/IlegalMining1'
import IlegalMining2 from './components/IlegalMining2'
import IlegalMining3 from './components/IlegalMining3'

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
        const visibility = this.props.visibility;
        const subcategories = this.props.subCategories;
        return (
            <div key="1" className="input">
                <IlegalMining1 _onChangeHandler={this._onChangeHandler.bind(this)} />
                <IlegalMining2 _onChangeHandler={this._onChangeHandler.bind(this)} />
                <IlegalMining3 _onChangeHandler={this._onChangeHandler.bind(this)} />
            </div>
        );
      }

}

export default LegendCollapse