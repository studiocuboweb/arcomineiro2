import React, { Component } from 'react';
import styled from 'styled-components';
import { throws } from 'assert';

const WrapperHome = styled.section`

`;

const WrapperStory = styled.section`

`;

const languages = [{'id':'en','label':'English'}, {'id':'pt','label':'Português'}, {'id':'es','label':'Español'}];


class LanguageSelect extends Component {

    constructor(){
      super()
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        redirect: false,
        language: 'en',
      }
      this.location = "";

      var location_2 = document.location.href;
      if (location_2.search('story') || location_2.search('share') || location_2.search('about')) {
        this.defaultStyle = WrapperStory;
      } else {
        this.defaultStyle = WrapperHome;
      }
    }

  
    renderRedirect = () => {
      if (this.state.redirect) {
          var location = "";
        if (this.state.language == 'pt') {
            location = '?lang=pt';
        } else if (this.state.language == 'es') {
            location = '?lang=es';
        } else {
            location = '?lang=en';
        }
        document.location.href = location;
        //return <Redirect push={true} to={location} />
      }
    }
  
    componentDidMount() {
        this.location = document.location.href;
        var querystring = window.location.search;

        if (querystring.search('lang=') > -1) {
            this.setState({language: querystring.split('=')[1]})
        } else {
            this.setState({language: 'en'})
        }
 
    }

    handleChange(ev) {
        if (ev.target.value != '') {
            this.setState({
                language: ev.target.value
              })    
        }
        this.setRedirect()
      
    }
    setRedirect() {
      this.setState({
        redirect: true
      })
    }

    render () {
        const Wrapper = this.defaultStyle;
        return (
      <Wrapper>
        {this.renderRedirect()}
        <select onChange={this.handleChange} value={this.state.language}>>
            <option value=''>Select a language:</option>
            {languages.map((value, index) => {
                var _selected=false;
                if (this.location.search('lang='+value)) {
                    _selected=true;
                }

                return <option value={value.id}>{value.label}</option>
            })}
        </select>
      </Wrapper>
    )}
  }
  
  export default (LanguageSelect);