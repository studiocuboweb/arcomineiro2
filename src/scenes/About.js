import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import {
  injectIntl,
  intlShape,
  defineMessages,
  FormattedMessage
} from "react-intl";
import Page from "components/Page";
import Container from "components/blocks/Container";
import Paragraph from "components/blocks/Paragraph";
import Title from "components/blocks/Title";
import GeneralBlock from "components/blocks/GeneralBlock";
import "styles/about.css";

import { Link } from "react-router-dom";

const messages = defineMessages({
  title: {
    id: "about.title",
    defaultMessage: "About"
  },
  siteTitle: {
    id: "head.title",
    defaultMessage: "Digging into the Mining Arc"
  }
});

const Button = styled.div`
  widht:100%;
  margin-top:50px;
  text-align: center;
  a{
    margin:0 auto;
    font-family: 'Merriweather', serif;
    font-size: 0.5em;
    -webkit-letter-spacing: 0.1rem;
    -moz-letter-spacing: 0.1rem;
    -ms-letter-spacing: 0.1rem;
    letter-spacing: 0.1rem;
    display: inline-block;
    color: #000;
    border: 1px solid #000;
    text-align: center;
    padding: 0.75rem 1rem;
    font-weight: 600;
    width: 210px;
    text-transform: uppercase;
  }
`;

const About = ({ intl, lastPath }) => {
  const title = intl.formatMessage(messages.title);
  const siteTitle = intl.formatMessage(messages.siteTitle);
  return (
    <Page>
      <Helmet>
        <title>
          {title} | {siteTitle}
        </title>
      </Helmet>
      <section className="content">
        <Container>
          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continuar lendo"
                    />
                  </Link>
              }
            </div>
          </Button>
          <Paragraph big>
            <FormattedMessage
              id="about.intro"
              defaultMessage="Amazônia Saqueada é um panorama da situação da mineração ilegal em seis países da Amazônia. As análises e casos apresentados estão baseados em dados da plataforma {MineriaIlegal}."
              values={{
                MineriaIlegal: (
                  <strong>
                    <a href="https://mineria.amazoniasocioambiental.org/" target="_blank">Minería Ilegal</a>
                  </strong>
                )
              }}
            />
          </Paragraph>
          <Paragraph big>
            <FormattedMessage
              id="about.intro2"
              defaultMessage="Este relatório digital publicado no dia 30 de novembro foi feito em aliança por:"
            />
          </Paragraph>
          <GeneralBlock>
              <img src={require('images/partners/ISA_min.png')} title='RAISG' alt='RAISG' style={{'margin':'0 2rem 0 0'}}  align="left" />
              <img src={require('images/partners/infoamazonia-p.png')} title='Infoamazonia' alt='Infoamazonia' style={{'margin':0,'height':'41px'}} />
          </GeneralBlock>
          <GeneralBlock>
            <strong>
              <FormattedMessage
                id="about.pub_partners"
                defaultMessage="Publishing partners"
              />
            </strong>
            <p>
              <img src={require('images/partners/ecociencia_min.png')} title='Ecociencia' alt='Ecociencia' style={{'margin':0}} align="left"/> <img src={require('images/partners/fan.png')} title='FAN' alt='FAN' style={{'margin':0}} align="left" /> <img src={require('images/partners/Gaia_min_png.png')} title='Gaia' alt='Gaia' style={{'margin':0}} align="left" /> <img src={require('images/partners/IBC_min_png.png')} title='IBC' alt='IBC' style={{'margin':0}} align="left" /> <img src={require('images/partners/Imazon_min_png.png')} title='Imazon' alt='Imazon' style={{'margin':0}} align="left" /> <img src={require('images/partners/provita_min_png.png')} title='Provita' alt='Provita' style={{'margin':0}} align="left"/> <img src={require('images/partners/Wataniba_min_png.png')} title='Wataniba' alt='Wataniba' style={{'margin':0}} />
            </p>
          </GeneralBlock>
          <Paragraph>
            <strong>
              <FormattedMessage
                id="about.photos_videos"
                defaultMessage="Photos & videos"
              />
            </strong>
            <br />
            Editor - Gustavo Faleiros<br />
            Editora Imagens e Mapas - Juliana Mori<br />
            Desenvolvimento Web - StudioCubo<br />
          </Paragraph>
          <Button>
            <div>
              {
                lastPath &&
                  <Link to={lastPath}>
                    <span className="fa fa-arrow-left" />
                    <FormattedMessage
                      id="about.close"
                      defaultMessage="Continuar lendo"
                    />
                  </Link>
              }
            </div>
          </Button>
          <hr />
          <Paragraph small>
            <FormattedMessage
              id="about.license"
              defaultMessage="Except for the maps, which have different licenses, all the content published at this website is licensed using the Creative Commons BY-ND 4.0 license. For any other use, please write us at contact@infoamazonia.org"
            />
          </Paragraph>
        </Container>
      </section>
    </Page>
  );
};

About.propTypes = {
  intl: intlShape.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    lastPath: state.context.lastPath
  };
};

export default injectIntl(connect(mapStateToProps, null)(About));