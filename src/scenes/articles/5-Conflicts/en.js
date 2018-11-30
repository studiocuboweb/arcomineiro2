import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import EndChapter from "../../../components/blocks/EndChapter";
import RelatedNews from "components/RelatedNews";

export default () => (
  <article>
    <Helmet>
      <title>Conflicts | The Amazon Sacked</title>
    </Helmet>
    <Container>
      <Title as="h2">Conflicts</Title>
      <Note>
        <p>
          Political crises in South America have also contributed to the escalation of conflicts involving indigenous communities and their territories.
        </p>
      </Note>
      <Paragraph>
        <StoryMedia
          media={{
            id: "image-2",
            type: "image",
            data: {
              credits: "Rogério Assis/ISA",
              src: require("photos/chapter4/26_Chinapintza_ImgSateliteSentinel2B_20181024.jpg")
            }
          }}>The impacts of illegal mining are already seen as serious human rights violations.</StoryMedia> Water contamination and the expulsion of indigenous peoples in voluntary isolation are among the indicators of harm to the common good.
      </Paragraph>
      <Paragraph>
        In addition to environmental degradation, the persistence of mining results in cultural and economic impacts. These includes not just the cost to traditional populations of the loss of their activities, but also the costs of remediation of degraded sites.
      </Paragraph>
      <Paragraph>
        Illegal mining is situated within the context of the armed conflict in Colombia, since it constitutes one of the main sources of financing for illegal armed protagonists in the Amazon. Another mechanism by which illegal armed groups have got involved in the activity has been through payments for vaccines or through operating and production fees collected from the miners to allow them to continue their activities.
      </Paragraph>
      <Paragraph>
        In Colombia in 2013, the National Police revealed that more than half of the municipalities where gold was mined in the country contained illegal armed groups, mainly in strategic border areas, due to difficult access and the precarious presence of government institutions in the area.
      </Paragraph>
      <Paragraph>
        According to a report by the El Tiempo newspaper in June 2018, based on calculations by the ministry of defence, "<ExternalLink href="https://www.eltiempo.com/justicia/conflicto-y-narcotrafico/mineria-ilegal-y-cultivos-de-coca-coinciden-en-74-municipios-233006" language="es">in just three years, Colombia saw 78,939 hectares - an area twice the size of Medellín – of ecosystems devastated by illegal gold mining increase to 83,620 hectares</ExternalLink>. This growth, equivalent to six percent, means that despite the warnings, this criminal and predatory phenomenon continues to expand. In addition, the data shows that of the 131 municipalities where alluvial gold is exploited, at least 74 also contain coca plantations".
      </Paragraph>
      <Paragraph>
        In Venezuela, the presence of irregular Colombian armed groups, linked to the ELN and the dissident arm of the FARC, is an open secret. These have been involved in multiple violent incidents in mining areas, especially in the state of Bolivar, as well as attacking and killing Venezuelan soldiers in border areas of the state of Amazonas, near the capital Puerto Ayacucho.
      </Paragraph>
      <Paragraph>
        The frequency of state crackdowns on illegal mining has increased, and with them, violent impacts on populations dependant on the prospecting economy. The common practice for environmental agencies is to <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "XhKSyM0Uk-A"
        }
        }}>destroy mining equipment such as dredges and barges</StoryMedia>. The equipment is burned or confiscated. These actions provoke resistance and, in many cases, acts of reprisal. A recent case that illustrates this was the <ExternalLink href="https://www.youtube.com/watch?v=EUGSTxvaiPg" language="pt">popular revolt in the town of Humaitá in the state of Amazonas, Brazil, where the offices of environmental agencies were burned</ExternalLink> following the seizure of gold mining barges on the Madeira River.
      </Paragraph>
      <Paragraph>
        The pushback by illegal miners in Brazil has received political support at the highest levels. A <ExternalLink href="https://www1.folha.uol.com.br/ambiente/2017/08/1914113-deputado-quer-proibir-ibama-de-destruir-bens-apreendidos.shtml" language="pt">draft law submitted to the National Congress aims precisely to impede control activities by environmental agencies</ExternalLink>, especially the destruction of equipment.
      </Paragraph>
      <Paragraph>
        As previously mentioned, a similar trend can be seen in Bolivia, Ecuador, and Peru, where governments have ceded to the demands of workers involved in irregular gold mining and loosened legislation. This has created a grey zone between illegality and the nature of artisanal mining, which has allowed the legitimization of high impact activities in areas of high importance for conservation and for the survival of indigenous peoples.
      </Paragraph>
      <EndChapter>
        <p className='smaller-txt'>
          "Illegal mining does not consider the future of our children. While we may benefit in the short term, we are destroying the environment, our jungle, our home" says <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credit: "Juan Pinto",
              src: require('photos/chapter5/27_JuanPinto_AgustinOjeda_LiderShirian_Foto2018_Wataniba_9692-2.jpg')
            }
          }}
        >Agustin Ojeda, a Shiriano leader from Bolivar state, Venezuela.</StoryMedia>
        </p>
        <p className='smaller-txt'>
          He points out that the profound change in the way of life of his people and the adoption of new habits have seriously damaged ancestral customs and, in turn, increased health problems.
        </p>
        <Quote author="Agustín Ojeda, Shiriano leader">
          <span>"Illegal mining can kill us." Mining ponds enable the reproduction of mosquitoes that bring diseases such as malaria, and the effect of mercury on water is not taken seriously; mercury not only contaminates the water, but also the fish we eat</span>
        </Quote>
        <p className='smaller-txt'>
          The Shiriano leader adds that most of his community have abandoned their fields. The sowing, clearing and burning seasons are not respected, so the harvest is almost nil. "Nowadays you see Indians buying cassava bread from non-Indians instead of making it".
        </p>
        <p className='smaller-txt'>
          He argues that, given the complicated situation faced by indigenous peoples, a commitment by the responsible authorities to enact agreements that ensure greater welfare and better livelihoods, as well as respecting human rights, must take precedence over anything else. "If the pace of life that we live in Venezuela and the world continues, a time will come when we do not know who we are".
        </p>
      </EndChapter>
      <RelatedNews
        title={"MORE - Explore RAISG's “Illegal Mining” platform"}
        imageUrl={require("images/read-more.png")}
        href={"https://mineria.amazoniasocioambiental.org/"}
      />
    </Container>
  </article>
);
