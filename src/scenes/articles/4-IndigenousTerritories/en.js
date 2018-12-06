import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import StoryMedia from "components/StoryMedia";
import FeaturedText from "components/blocks/FeaturedText";
import Table from "components/blocks/Table";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import Board from "components/blocks/Board";

export default () => (
  <article>
    <Helmet>
    <title>Indigenous Territories | The Amazon Sacked</title>
    </Helmet>
    <Container>
      <Title as="h2">Indigenous Territories</Title>
      <Note>
        <p>
          The impacts of illegal mining on natural resources, mining activities and mineral traffic generate conflicts with indigenous and riverside communities in the Amazon.
        </p>
      </Note>
      
      <Paragraph>
        According to the RAISG's analysis, <StoryMedia
        icon="map"
        media={{
        id: "map-10",
        type: "mapbox",
          data: {
            map: "map5",
            legend:"map5",
            update:"map5",
            showExtraLayers: ['LEGENDATIs-afectadas'],
            coordinates: [-60.274653,-4.525221],
            zoomNumber: 4.66,
            zoomMin: 4,
            zoomMax: 12
          }
        }}>among 6207 indigenous territories, 78 were identified with illegal activities at their limit or in their surroundings.</StoryMedia> The majority of these territories - 64 - is located in Peru. With respect to indigenous lands with activities within the limits, Brazil leads with 18 cases among the 37 identified. In relation to the activities of dredges in rivers in those territories, Colombia has the highest incidence - 30 among the 65 cases investigated.
      </Paragraph>
      <Table>
      <table>
        <tbody>
        <tr>
          <th>Indigenous Territories - status</th>
          <th>quantity</th>
        </tr>
        <tr>
          <td>threat: mining in the limit / environment</td>
          <td>78</td>
        </tr>
        <tr>
          <td>threat: inactive mining within</td>
          <td>90</td>
        </tr>
        <tr>
          <td>pressure: dredges inside / at the limit</td>
          <td>65</td>
        </tr>
        <tr>
          <td>pressure: active mining inside</td>
          <td>37</td>
        </tr>
        <tr>
          <td>Indigenous Territories without known direct affectation</td>
          <td>5.937</td>
        </tr>
        </tbody>
      </table>
      </Table>
      <Paragraph>
        In Colombia, understanding indigenous peoples' perceptions of gold is crucial to understanding the views they hold on mining. Gold is a sacred mineral for the indigenous peoples of the Colombian Amazon because, according to tradition, it is the representation of the sun on earth and constitutes the source of life.
      </Paragraph>
      <Paragraph>
        According to reports collected by Carlos Rodríguez and Sebastián Rubiano (Tropenbos International, Colombia (2016)),<ExternalLink href="https://www.academia.edu/24382243/Entre_ilusiones_ambiciones_y_decepciones._Los_efectos_sociales_culturales_y_econ%C3%B3micos_de_la_miner%C3%ADa_aur%C3%ADfera_en_el_departamento_de_Amazonas" language="es">to extract this mineral from the earth is to remove the source of their life</ExternalLink>. To extract the precious mineral, shamans needed to seek permission through cures and payments of tobacco and coca. Large scale extraction of the mineral can cause illness or death for those responsible. From their point of view, such mining is seen by the communities as representing disease, problems and death.
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Juan Gabriel Soler / Gaia Amazonas",
            src: require("photos/chapter4/20a_JuanGabrielSoler-GaiaAmazonas_Apaporis2016-2851.jpg")
          }
        }}> Apaporis River: the "raudales" or "cachiveras" are sacred sites for the indigenous peoples of the Colombian Amazon</StoryMedia>. Normally in these sacred sites there are gold deposits, hence the importance of protecting them from extractive activities.
      </Paragraph>
      <Paragraph>
        In testimony in March 1990, 
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Claudio Tavares / ISA",
            src: require("photos/chapter4/20b_Claudio Tavares-ISA_RS22241_ISA4304.jpg")
          }
        }}> Yanomami shaman David Kopenawa</StoryMedia> offered his distinct perspective on exploitation of the mineral. "When gold remains in the cold bowels of the earth, then everything is well. Everything is really good. It is not dangerous. When the white people remove the gold from the earth, they burn it, they stir it around on the fire as if it were flour. This makes smoke come out of it. This creates xawara, which is the smoke of gold. After this xawara wakémi, this "smoke epidemic", spreads across the forest, where the Yanomami live, but also across the white peoples’ lands, everywhere. That's why we're dying. Because of this smoke."
      </Paragraph>
      <Quote author="Davi Kopenawa, Yanomami leader">
        When gold remains in the cold bowels of the earth, then everything is well. Everything is really good. It is not dangerous.
      </Quote>
      <Paragraph>
        Despite millennial beliefs about gold, illegal mining activity has permeated the indigenous territories of the Amazon and altered traditional conceptions of this mineral. Some young people even stop acknowledging traditional authorities, reject the teachings of grandparents and traditional knowledge, and abandon schools to devote themselves to mining activity.
      </Paragraph>
      <Paragraph>
        In this way, the elders, sages and many leaders of indigenous peoples see the influence of mining activity on their territories as a risk to their cultural integrity, traditional management, local government over their territories and the health of their peoples.
      </Paragraph>
      <Paragraph>
        Even cases that began 30 years ago, <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter4/gallery-1/01_RogerioAssis-ISA_RS20033.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/02_RogerioAssis-ISA_RS20040.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/03_RogerioAssis-ISA_RS20042.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/04_RogerioAssis-ISA_RS20034.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/05_RogerioAssis-ISA_RS20032.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/06_RogerioAssis-ISA_RS20029.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/07_RogerioAssis-ISA_RS20045.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/08_RogerioAssis-ISA_RS20043.jpg")
                },
                {
                  src: require("photos/chapter4/gallery-1/09_RogerioAssis-ISA_RS20035.jpg")
                }
              ]
            }
          }}
        >such as the prospector invasions of the Yanomami territories in Brazil and Venezuela,</StoryMedia> still persist, and impacts on health and lifestyles are evident. A current estimate is that five thousand prospectors are illegally in the Brazilian portion alone of the Yanomami Indigenous Land.
      </Paragraph>
      <Paragraph>
        Reports from villages on the banks of the Uiracoera indicate that, between 1987 and 1989, the Yanomami managed to count 2,003 barges operating near the Waikás community. When demarcation of the territory was completed in 1991, prospecting was shut down. However, this began to change in 2010, when new barges arrived on the river. Community leaders tried to prevent the reactivation of prospecting, but the intruders refused to leave arguing that the activity represented their only source of subsistence. <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "lC9kcGKyvBw"
        }
        }}>By the end of 2013, there were already 42 barges and in early 2016, an overflight identified 49.</StoryMedia>
      </Paragraph>
      <Paragraph>
        These reports on activities within the Yanomami territory highlight the way illegal mining activities operate. On the Uiracoera river, evidence shows that a barge operates with two teams each working nine-hour shifts. Each team contains six workers, with a day shift and a night shift. In addition to these twelve workers there is a foreman and a cook.
      </Paragraph>
      <Paragraph>
        The foreman is in the area with the crew, the barge owner in the city. Few owners have more than one barge and a foreman manages only one barge. About 40% of the gold collected by the barge is divided between the workers and the majority goes to the owner.
      </Paragraph>
      <Board>
        <strong>The economics of prospecting</strong>
        <br />prices in grams of gold
        <p>. travel upstream: 10g per person<br />(can be paid later, once gold is found)</p>
        <p>. prostitutes: 3g per half hour</p>
        <p>. beer: 1 small can for 20 reais (US$5) or 0.2g</p>
        <p>. 1 chicken: 80 reais (US$20) or 0.8g</p>
        <p>. haircut: 0,5g</p>
        <p>. 30 minutes of internet access: 0.5g<br />(there are 10 internet access points in the area)</p>
      </Board>
      <Paragraph>Zoom: 
      In Peru, Puerto Luz is one of 10 communities in <StoryMedia
        icon="map"
        media={{
        id: "map-11",
        type: "mapbox",
          data: {
            map: "map6",
            legend:"map6",
            update:"map6",
            showExtraLayers: ['LEGENDATIs-afectadas','ETIQUETA_nombre-tis-afectadas'],
            coordinates: [-70.635005,-11.676347],
            zoomNumber: 7.40,
            zoomMin: 5,
            zoomMax: 12
          }
        }}>the Amarakaeri Communal Reserve that suffers from devastation caused by indiscriminate gold mining.</StoryMedia> Its inhabitants, more than 400 people, live a desperate situation. As is the case in the other nine native communities of the Amarakaeri Communal Reserve, because of the presence of gold mining and the lack of other opportunities, families have been forced into artisanal mining.
      </Paragraph>
      <Paragraph>
        <ExternalLink href="https://larepublica.pe/sociedad/1177491-los-harakbuts-el-pueblo-nativo-que-la-mineria-ilegal-asfixia-en-madre-de-dios" language="es">"We don’t seek gold to get rich, we just want what is needed for our children to study",</ExternalLink> says Virginia Kirihua, 36, who from childhood has seen, first non-Indians and then outsiders, become ever more avid for the shiny pebbles their ancestors confused with corn kernels.
      </Paragraph>
      <Paragraph>
        The Amarakaeri Communal Reserve is part of Peru's protected area system. It seeks to safeguard the cultural values ​​of the <StoryMedia
        icon="map"
        media={{
        id: "map-12",
        type: "mapbox",
          data: {
            map: "map6_1",
            legend:"map6",
            update:"map6_1",
            showExtraLayers: ['LEGENDATIs-afectadas','ETIQUETA_etnias-tis-afectadas'],
            coordinates: [-70.793253,-12.789527],
            zoomNumber: 9.35,
            zoomMin: 7,
            zoomMax: 10
          }
        }}>native Harakmbut communities,</StoryMedia> water quality and quantity, ecological balance and an enabling environment for community development.
      </Paragraph>
      <Paragraph>
        Another illustrative case denounced by affected communities occurs in the province of Zamora Chinchipe, Ecuador. This is an open-pit mining megaproject, Mirador. An analysis produced through a collaboration between the Amazon Conservation Team, Amazon Watch, Amazon Conservation and Ecociencia <ExternalLink href="https://maaproject.org/mirador/" language="es">revealed through satellite images the impact of deforestation between 2009 and the end of 2017, an area of ​​1,307 hectares.</ExternalLink>
      </Paragraph>
      <Paragraph>
        In this case, the impacts from mining are related to concessions. There is an overlap of illegal mining in places with legal mining concessions. In May 2018, the Ministry of the Environment suspended 40% of the activities in Mirador due to environmental violations.
      </Paragraph>
      <Paragraph>
        Known for his opposition to mining, <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Salvador Quishpe, em foto de junho de 2015, da agência Andes",
            src: require("photos/chapter4/24_AgenciaAndes_SalvadorQuishpe.jpg")
          }
        }}>Salvador Quishpe, mayor of Zamora Chinchipe,</StoryMedia> notes that those involved in illegal mining "seem to combine mining with other illegal activities, such as money laundering. This also goes together with criminal acts, that is, persecuting people who speak out against the destruction of nature".
      </Paragraph>
      <Paragraph>
        Quishpe points out that "the problem is that there has never been any planning, and mining concessions are given anywhere. People in the area have also started to search for gold. So, the biggest problem is the lack of any determination as to which area is for what".<br />
        In his opinion, for the communities, the most important problems are environmental. "We do not have a real problem with mining that is done within an approved zone. Whether mining is legal or illegal is not the issue, because as far as contamination is concerned we do not see any difference, the effects of pollution are the same".
      </Paragraph>
      <Quote author="Salvador Quishpe, mayor of an affected area in Ecuador">
        Whether mining is legal or illegal is not the issue, because as far as contamination is concerned we do not see any difference, the effects of pollution are the same
      </Quote>
      <Paragraph>
        With respect to illegal mining, Quishpe highlights the <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "",
            src: require("photos/chapter4/26_Chinapintza_ImgSateliteSentinel2B_20181024.jpg")
          }
        }}>Chinapintza region in the province of Zamora Chinchipe.</StoryMedia> "The other example of illegal mining could be Chinapintza, which is also within an area designated for mining according to our provincial planning. It is illegal, people do not have titles, some have, others do not, most do not, but the contamination is the same."
      </Paragraph>
      <Paragraph>
        In Ecuador, following reform of the Mining Law in 2009, and based on the size of the operation, mining is divided into artisanal, small-scale, medium-scale and large-scale mining under two categories: metallic and non-metallic mining The mining that is growing in Ecuador corresponds to small-scale and artisanal activities, mainly in the southern region.
      </Paragraph>
      <Paragraph>
        In Bolivia and Peru as well, recent mining laws have made the division between illegal and legal mining quite confusing. The approval of the <FileLink
          href={require("documents/chapter4/Ley535_de_mineria_y_metalurgia-2014.pdf")}
          format="pdf"
          size="680KB"
        >Mining and Metallurgy Law No. 535</FileLink> displeased the indigenous leaders of Bolivia. The main complaint concerns the lack of prior consultation of indigenous peoples. In practice, consultation is no longer mandatory.
      </Paragraph>
      <Paragraph>
        "The law strengthens the policy of expanding mining in the Lowlands and reinforces the position of mining areas in indigenous lands, natural parks and areas of high natural value", states a <FileLink
          href={require("documents/chapter4/RESOLUCION-CUMBRE-LEY-MINERA.pdf")}
          format="pdf"
          size="3.7MB"
        >resolution approved by indigenous movements on 5 June 2014</FileLink> under the Confederation of Indigenous Peoples of Bolivia.
      </Paragraph>
    </Container>
  </article>
);
