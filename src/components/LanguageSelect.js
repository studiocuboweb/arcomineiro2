import React, { Component } from 'react';
import styled from 'styled-components';
import { throws } from 'assert';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

const WrapperHome = styled.section`
  .custom-select {
    /* The container must be positioned relative: */
    position: relative;
  }

  .custom-select select {
    display: none; /*hide original SELECT element: */
  }

  .select-selected {
    background-color: DodgerBlue;
  }

  /* Style the arrow inside the select element: */
  .select-selected:after {
    position: absolute;
    content: "";
    top: 14px;
    right: 10px;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    border-color: #fff transparent transparent transparent;
  }

  /* Point the arrow upwards when the select box is open (active): */
  .select-selected.select-arrow-active:after {
    border-color: transparent transparent #fff transparent;
    top: 7px;
  }

  /* style the items (options), including the selected item: */
  .select-items div,.select-selected {
    color: #ffffff;
    padding: 8px 16px;
    border: 1px solid transparent;
    border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
    cursor: pointer;
  }

  /* Style items (options): */
  .select-items {
    position: absolute;
    background-color: DodgerBlue;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 99;
  }

  /* Hide the items when the select box is closed: */
  .select-hide {
    display: none;
  }

  .select-items div:hover, .same-as-selected {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const WrapperStory = styled.section`

`;

const languages = [{'id':'en','label':'English'}, {'id':'pt','label':'Português'}, {'id':'es','label':'Español'}];


class LanguageSelect extends Component {

    constructor(){
      super()
      this.handleChange = this.handleChange.bind(this);
      this.closeAllSelect = this.closeAllSelect.bind(this);
      this.count = 0;

      this.state = {
        redirect: false,
        language: 'en',
      }
      this.location = "";

      var location_2 = document.location.href;
      if (location_2.search('story') > -1 || location_2.search('share') > -1 || location_2.search('about') > -1) {
        console.log('entrou no if')
        this.defaultStyle = WrapperStory;
      } else {
        console.log('entrou no else')
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
        /* JAVASCRIPT TO CUSTOMIZE SELECT COMPONENT */
        /* REFERENCE: https://www.w3schools.com/howto/howto_custom_select.asp */
        var x, i, j, selElmnt, a, b, c;
        /* Look for any elements with the class "custom-select": */
        x = window.document.getElementsByClassName("custom-select");
        console.log('x')
        console.log(x)
        for (i = 0; i < x.length; i++) {
          selElmnt = x[i].getElementsByTagName("select")[0];
          console.log('entrou no loop')
          console.log(selElmnt)
          /* For each element, create a new DIV that will act as the selected item: */
          a = document.createElement("DIV");
          a.setAttribute("class", "select-selected");
          a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
          x[i].appendChild(a);
          /* For each element, create a new DIV that will contain the option list: */
          b = document.createElement("DIV");
          b.setAttribute("class", "select-items select-hide");
          for (j = 1; j < selElmnt.length; j++) {
            /* For each option in the original select element,
            create a new DIV that will act as an option item: */
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                /* When an item is clicked, update the original select box,
                and the selected item: */
                var y, i, k, s, h;
                s = e.target.parentNode.parentNode.getElementsByTagName("select")[0];
                h = e.target.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                  if (s.options[i].innerHTML == e.target.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = e.target.innerHTML;
                    y = e.target.parentNode.getElementsByClassName("same-as-selected");
                    for (k = 0; k < y.length; k++) {
                      y[k].removeAttribute("class");
                    }
                    e.target.setAttribute("class", "same-as-selected");
                    break;
                  }
                }
                h.click();
            }.bind(this));
            b.appendChild(c);
          }
          x[i].appendChild(b);
          var actualSelect = window.document.getElementsByClassName('select-selected');
          // console.log(actualSelect[0].textContent);
          var currentTarget = actualSelect[0].textContent;
          a.addEventListener("click", function(e) {
            console.log('entrou no clique')
            /* When the select box is clicked, close any other select boxes,
            and open/close the current select box: */
            e.stopPropagation();
            this.closeAllSelect(e);
            e.target.nextSibling.classList.toggle("select-hide");
            e.target.classList.toggle("select-arrow-active");
            console.log(e.target.textContent)
             
            if (this.count++ > 0) {
              console.log(currentTarget)
              if (currentTarget != e.target.textContent) {
                this.handleChange(e)
                this.count = 0;
              }
            } else {
              currentTarget = e.target.textContent;
            }
            console.log(this.count);
          }.bind(this));
        }
        /* If the user clicks anywhere outside the select box,
        then close all select boxes: */
        document.addEventListener("click", this.closeAllSelect);
        /* END SELECT COMPONENT CUSTOMIZATION */
    }

    closeAllSelect(elmnt) {
      console.log('closeall')
      /* A function that will close all select boxes in the document,
      except the current select box: */
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
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
        console.log(Wrapper);
        return (
      <Wrapper>
        {this.renderRedirect()}
        <div className='custom-select' style={{'width':'200px'}}>
          <select onChange={this.handleChange} value={this.state.language}>
              <option value=''>Select a language:</option>
              {languages.map((value, index) => {
                  var _selected=false;
                  if (this.location.search('lang='+value)) {
                      _selected=true;
                  }

                  return <option value={value.id}>{value.label}</option>
              })}
          </select>
        </div>
      </Wrapper>
    )}
  }
  
  export default (LanguageSelect);