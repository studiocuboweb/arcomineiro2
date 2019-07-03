import React, { Component } from 'react';
import styled from 'styled-components';
import { throws } from 'assert';

const Wrapper = styled.section`
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
        console.log(location)
        document.location.href = location;
        //return <Redirect push={true} to={location} />
      }
    }
  
    componentDidMount() {
        this.location = document.location.href;
        console.log('location 2')
        console.log(window.location.search);
        var querystring = window.location.search;
        console.log(querystring.search('lang='))
        if (querystring.search('lang=') > -1) {
            this.setState({language: querystring.split('=')[1]})
        } else {
            this.setState({language: 'en'})
        }
 
    }

    handleChange(ev) {
        console.log("handleChange");
        console.log(ev.target.value);
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
        {console.log(languages)}
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