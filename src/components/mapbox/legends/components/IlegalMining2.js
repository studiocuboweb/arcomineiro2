import React, { Component } from 'react';
import {Collapse} from 'react-collapse';
import { FormattedMessage } from "react-intl";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
    .checkboxCustom {
        background-color: #ffffff;
    }
    input {
        display: none;
    }
    label:before {
        content: "";
        width: 14px;
        height: 14px;
        border: solid 1px #a9a9a9;
        border-radius: 3px;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        left: -.5rem;
        top: .2rem;

    }
    label:after {
        content: "";
        width: 14px;
        height: 14px;
        border: solid 1px #a9a9a9;
        border-radius: 3px;
        display: inline-block;
        box-sizing: border-box;
        position: relative;
        left: -10.6rem;
        top: .2rem;

    }
    input:checked + label:before {
        background-color: white;
    }
    input:checked + label:after {
        background-color: #c500f2;
    }
`


let checked = true;
class IlegalMining1 extends Component {

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

    _onChangeHandler = (name,event) => {
        if (!checked) {
            checked = true;
        } else {
            checked = false;
        }

        event.target.checked = checked;
        this.props._onChangeHandler(name,this.props.parentScope,checked)
    }

    render () {
        return (
            <Wrapper>
                <input type="checkbox" id="rios" className="checkboxCustom" defaultChecked={true} onChange={this._onChangeHandler.bind(this,'LEGENDA2 RIOS_mineriailegal-ln-67gxaf')} />
                <label for="rios" style={{pointerEvents:'auto',cursor:'pointer',zIndex:'-100',marginLeft:'.5rem'}}>
                    <FormattedMessage id="legend1.title2" defaultMessage="legend1">
                    {(txt) => (txt)}
                    </FormattedMessage>
                </label>
            </Wrapper>
        )
    }
}

export default IlegalMining1;