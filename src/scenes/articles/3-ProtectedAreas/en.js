import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import FullBlock from "components/blocks/Full";
import Note from "components/blocks/Note";
import Table from "components/blocks/Table";

export default () => (
  <article>
    <Helmet>
      <title>Protected Areas | The Amazon Sacked</title>
    </Helmet>
    <Container>
      <Title as="h2">Protected Areas</Title>
      <Note>
        <p>
          As well as the threats to water resources and the health of communities in the Amazon, <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Daniel Paranayba/ISA",
            src: require("photos/chapter3/09_DanielParanayba_ParqueNacionalJamanxim.jpg")
          }
        }}>mining has direct impacts on forests and other tropical</StoryMedia> ecosystems, such as wetlands and the cerrado tropical savannas.
        </p>
      </Note>
      <Paragraph>
          A study carried out between 2001 and 2013 by researchers Nora L. Alvarez Berrios and T. Michel Aide, academics from the University of Puerto Rico - Rio Piedras, suggests that <FileLink
          href={require("documents/chapter3/Alvarez-Berrios_2015_Environ._Res._Lett._10_014006.pdf")}
          format="pdf"
          size="1.7MB"
        >there was an increase in deforestation linked to gold exploration in the main areas of tropical rainforest in the Amazon</FileLink>. In addition, the largest areas of extraction are located within a 10 km radius of 31 protected areas.
      </Paragraph>
      <Paragraph>
        According to the study published in January 2015 in the journal Environmental Research Letters, there was an acceleration of forest loss at sites identified as gold mining locations. The study indicated a loss of 377 km² between 2001 and 2006, whereas between 2007 and 2013 the loss was 1303 km². The three regions identified as being under the greatest pressure were the forests of the Guiana shield, the humid forests of the southwestern Amazon, and the Xingu and Tapajós forests in Brazil.
      </Paragraph>
      <Paragraph>
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter3/gallery-1/01_AlbertoBlanco_NorteSierradeLLema_EdoBolivar_LagunasYPozosDeSaqueMercurioMetilado_P4301277.jpg"),
                  credits: "Alberto Blanco"
                },
                {
                  src: require("photos/chapter3/gallery-1/02_BarbaraFraser_PE_MadreDeDios_IMG_0209.jpg"),
                  credits: "Barbara Fraser"
                },
                {
                  src: require("photos/chapter3/gallery-1/03_Charles_Brewer-Carias_Minas_Gran_Sabana_PNCanaima_Pemon_Edo-Bolivar.jpg"),
                  credits: "Charles Brewer Carias"
                },
                {
                  src: require("photos/chapter3/gallery-1/04_DanielParanayba_FlonaAltamira_Garimpo.jpg"),
                  credits: "Daniel Paranayba/ISA"
                },
                {
                  src: require("photos/chapter3/gallery-1/05_OscarMujica-FZS_PE_LaPampa.jpg"),
                  credits: "Oscar Mujica/FZS Perú"
                },
                {
                  src: require("photos/chapter3/gallery-1/06_JavierMesa_Minas_PNCanaima_EdoBolivar_MG_9204.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-1/07_JavierMesa_Minas_PNCanaima_MG_9193.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-1/08_JavierMesa_Minas_PNCanaima_MG_9195.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-1/09_PN Canaima_Gran Sabana_Javier Mesa_MG_6137.jpg"),
                  credits: "Javier Mesa"
                },
                {
                  src: require("photos/chapter3/gallery-1/10_CharlesBrewerCarias_RioKukenamYLosTepuyesOrientals_2526.jpg"),
                  credits: "Charles Brewer Carias"
                },
                {
                  src: require("photos/chapter3/gallery-1/11_Wataniba_Yapacana2013_IMG_1832.jpg"),
                  credits: "arquivo Wataniba"
                }
              ]
            }
          }}
        >In all countries surveyed by RAISG, there is evidence of damage to natural protected natural areas, </StoryMedia> deforestation, loss of conservation areas and loss of wildlife in rivers, forests and other natural ecosystems.
      </Paragraph>
      <Paragraph>
        According to the RAISG analysis, of <StoryMedia
        icon="map"
        media={{
        id: "map-7",
        type: "mapbox",
          data: {
            map: "map3",
            legend:"map3",
            update:"map3",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados'],
            coordinates: [-61.451458,-4.714880],
            zoomNumber: 4.50,
            zoomMin: 5,
            zoomMax: 10
          }
        }}>649 protected natural areas, 55 have active illegal mining points or dredges within their limits</StoryMedia>. There are still a total of 41 protected natural areas that suffer indirect damage, either in buffer zones or along their boundaries.
      </Paragraph>
      <Table>
        <table>
            <tr>
              <th>Protected Areas - status</th>
              <th>quantity</th>
            </tr>
            <tr>
              <td>threat: mining in the limit / environment</td>
              <td>14</td>
            </tr>
            <tr>
              <td>threat: inactive mining within</td>
              <td>27</td>
            </tr>
            <tr>
              <td>pressure: dredges inside / in the limit</td>
              <td>22</td>
            </tr>
            <tr>
              <td>pressure: active mining inside</td>
              <td>33</td>
            </tr>
            <tr>
              <td>PAs without known direct affectation</td>
              <td>533</td>
            </tr>
          </table>
        </Table>
      <Paragraph>
        One of the most glaring cases of this lack of control is that of the <StoryMedia
        icon="map"
        media={{
        id: "map-8",
        type: "mapbox",
          data: {
            map: "map3",
            legend:"map3",
            update:"map8",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados'],
            coordinates: [-66.806876,3.840280],
            zoomNumber: 9.26,
            zoomMin: 5,
            zoomMax: 14
          }
        }}> Yapacana National Park in Venezuela, near the confluence of the Orinoco and Ventuari rivers</StoryMedia>. Created in 1978, the area protects the Amazonian landscapes of the Orinoco and the Cerro Yapacana. Since the 1980s, gold mining activities within the national park have been known about. However, the illegal situation has become public knowledge as a result of alliances between miners and dissident members of the Colombian guerrillas.
      </Paragraph>
      <Paragraph>
        Recent reports in the Colombian and Venezuelan press have revealed the constant incursions of guerrillas in search of gold, diamond and coltan. There are up to 2,000 people in the Yapacana area. <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "yo0rwK1g9RE"
              }
              }}>A set of satellite images over the period 1989-2016 reveals the progress of deforestation.</StoryMedia>
      </Paragraph>
      <Paragraph>
        In August 2016, a group of academics, religious leaders, journalists and government officials from the state of Amazonas filed the <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/chapter3/INFORME-QUE-PRESENTAN-PERSONAS-Y-ORGANISMOS-DEL-ESTADO-AMAZONA-SOBRE-LA-CORRUPCION-MILITAR-EN-LA-ZONA-_Autoguardado_.pdf")}
        >following complaint in respect of activities in Yapacana:</FileLink>
      </Paragraph>
      <Paragraph>
        "It is the guerrilla that manages all the mines and distributes the gold, as well as retaining the major share to send to Colombia. The armed forces stationed in Amazonas state take a large cut. The Bolivarian National Guard, the Navy and the Air Force periodically travel by helicopter to the mines to receive their share. The environmental degradation is horrendous. Water from the Orinoco in the region is not fit for drinking or food preparation as a result of the mercury dumped in its waters. Anyone who really cares about their health drinks mineral water", states one of the sections of the report.
      </Paragraph>
      <Paragraph>
        Such activity within natural protected areas has also been identified in several forests in the Tapajós river basin in Brazil. <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "SCtFqfIp7U4"
        }
        }}>During overflights in April 2017</StoryMedia>, a team from the Instituto Socioambiental (ISA) registered the rapid transformation of the Novo, Branco and Jamanxim rivers. In a stretch inside the Altamira National Forest, a 6.5 km-long mining area can be seen in the video. According to information obtained by ISA staff, the opening of these mining areas occurred in just three months.
      </Paragraph>
      <Paragraph>
        The advance of mining into the protected areas of the Tapajós basin occurred at a time when the Brazilian government was attempting to pass laws to weaken protection measures. Such destruction also occurs because the responsible government agencies, such as IBAMA (environmental management) and ICMBio (protected areas) are unable to combat it. A report published by Intercept Brazil in June the same year showed how <ExternalLink href="https://theintercept.com/2017/06/13/governo-esta-prestes-a-aprovar-projetos-a-favor-de-grilagem-e-outros-crimes-ambientais/" language="pt">loggers in alliance with prospectors destroyed bridges to prevent access by inspection teams.</ExternalLink>
      </Paragraph>
      <Paragraph>
        Much of the illegal mining of gold and coltan in the Colombian Amazon takes place in major river basins, such as the Putumayo, Caquetá, Apaporis, Guainía and Inírida, and other smaller water courses, such as the Cotuhé and Puré rivers and the Tatu canyon. These activities affect special management areas (indigenous lands, national parks, Ramsar sites and Forest Reserves) and frontier areas of great cultural and environmental importance, or that play an important role in the food sovereignty of local populations.
      </Paragraph>
      <Paragraph>
        This pattern of <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "Omb7-pibnTk"
        }
        }}>destruction along the rivers is also observed in the area around the Tambopata National Reserve, in the department of Madre de Dios, Peru.</StoryMedia> As in the Brazilian areas, what is striking is the speed of expansion. In just six months, both banks of the Malinowski River in the northern part of the reserve were overrun by mining ponds and lakes.
      </Paragraph>
      <Paragraph>
        The MAAP project, using satellite images to monitor the Andean Amazon, found that the <ExternalLink href="https://maaproject.org/2015/tambopat/" language="es">invasion of the Tambopata National Reserve by illegal gold mining began in late 2015.</ExternalLink> "In areas of La Pampa (Balata sector), upper Malinowski and in the Tambopata National Reserve, between January 2017 and February 2018 <ExternalLink href="http://www.actualidadambiental.pe/?p=49390" language="es">the deforestation caused by mining was 1,200 hectares</ExternalLink>, with 651 hectares of this amount occurring between October 2017 and February 2018", states the Actualidad Ambiental del Peru site.
      </Paragraph>
      <Paragraph withMargin>
        <iframe frameborder="0" class="juxtapose" width="100%" height="500" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c09a020c-ec1f-11e8-9dba-0edaf8f81e27"></iframe>
      </Paragraph>
      <Paragraph>
        The situation in Madre de Dios has contributed to the fact that deforestation in Peru has reached levels never previously recorded. According to a study recently released by the Centre for Scientific Innovation of Amazon Research (Cincia), <ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">in just five years 170,000 hectares of forest was lost</ExternalLink>. This figure is at least <ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">30% higher than those previously announced by another monitoring.</ExternalLink>
      </Paragraph>

      <Paragraph>
        In Bolivia, the richest reserves of wildlife and carbon are in the wetlands of the Lowlands and the Yungas. Nevertheless, <StoryMedia
        icon="map"
        media={{
        id: "map-9",
        type: "mapbox",
          data: {
            map: "map4",
            legend:"map4",
            update:"map4",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDATIs-afectadas'],
            coordinates: [-68.327,-14.690],
            zoomNumber: 7.29,
            zoomMin: 6,
            zoomMax: 12
          }
        }}>in the Madidi and Pilón Lajas area there are 41 mining operations</StoryMedia>. Despite the obvious threat posed by mining within the protected area, this activity has been legalized by the government. In a presentation by its director Marco A. Gandarillas Gonzáles, CEDIB showed that in just one year, from 2013 to 2014, more than 194 rights were granted, equivalent to more than 100,000 hectares.
      </Paragraph>
      <Paragraph>
        In the documentary "Guardians of the Forest", produced in September 2016 by the Blue Forest Foundation and Environmental Information Network (RAI), you can see the <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "zAvUPCRPcrk"
        }
        }}>progress of large-scale mining activities in the protected areas of the Madidi.</StoryMedia>
      </Paragraph>
    </Container>
  </article>
);
