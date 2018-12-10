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
      <title>Áreas Protegidas |  Amazônia saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Áreas Protegidas</Title>
      <Note>
        <p>
          Além das ameaças aos recursos hídricos e à saúde das comunidades na Amazônia, a <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Daniel Paranayba/ISA",
            src: require("photos/chapter3/09_DanielParanayba_ParqueNacionalJamanxim.jpg")
          }
        }}>mineração traz impactos diretos para as florestas e outros ecossistemas tropicais</StoryMedia>, como áreas úmidas e cerrados.
        </p>
      </Note>
      <Paragraph>
        Um estudo realizado entre 2001 e 2013 por pesquisadores Nora L. Alvarez Berrios e T Michel Aide, ambos acadêmicos da Universidade de Puerto Rico - Rio Piedras, sugere que <FileLink
          href={require("documents/chapter3/Alvarez-Berrios_2015_Environ._Res._Lett._10_014006.pdf")}
          format="pdf"
          size="1.7MB"
        >houve um aumento no desmatamento ligado à exploração de ouro nas principais áreas de floresta tropical na Amazônia.</FileLink> Além disso, as maiores áreas de extração estão localizadas em um raio de 10 km de 31 áreas protegidas. 
      </Paragraph>
      <Paragraph>
        De acordo com o trabalho, publicado em janeiro de 2015 no jornal Environmental Research Letters, houve uma aceleração da perda florestal em locais identificados como extração de ouro. Enquanto entre 2001 e 2006, o estudo indicou a perda de 377 km², entre 2007 e 2013 a perda foi de 1303 km². As três regiões identificadas com maior pressão são as florestas dos escudos das Guianas, as florestas úmidas do sudoeste amazônico e as florestas do Xingu e Tapajós no Brasil.
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
        >Em todos os países analisados pela RAISG, existe ​​evidência de danos a áreas naturais protegidas</StoryMedia>, desmatamento, apropriação de terras para a preservação e redução da vida selvagem em rios, florestas e outros ecossistemas naturais.
      </Paragraph>
      <Paragraph>
        De acordo com a análise da RAISG, de <StoryMedia
        icon="map"
        media={{
        id: "map_04",
        type: "mapbox",
          data: {
            map: "map3",
            legend:"legend3",
            update:"map3",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados'],
            coordinates: [-64.770093,-4.650804],
            zoomNumber: 4.00,
            zoomMin: 4,
            zoomMax: 12
          }
        }}>649 áreas naturais protegidas, 55 têm pontos de garimpo ativos ou balsas dentro de seus limites</StoryMedia>. Há ainda um total de 41 áreas naturais protegidas que sofre danos indiretos, seja em áreas de amortecimento ou nas bordas.
      </Paragraph>
      <Table>
        <table>
            <tr>
              <th>Áreas Protegidas -  situação</th>
              <th>quantidade</th>
            </tr>
            <tr>
              <td>ameaça: garimpo no limite/entorno</td>
              <td>14</td>
            </tr>
            <tr>
              <td>ameaça: garimpo inativo dentro</td>
              <td>27</td>
            </tr>
            <tr>
              <td>pressão: balsas dentro/no limite</td>
              <td>22</td>
            </tr>
            <tr>
              <td>pressão: garimpo ativo dentro</td>
              <td>33</td>
            </tr>
            <tr>
              <td>ANP sem afetação direta conhecida</td>
              <td>553</td>
            </tr>
          </table>
        </Table>
      <Paragraph>
        Um dos casos mais significativos desta falta de controle é o <StoryMedia
        icon="map"
        media={{
        id: "map_05",
        type: "mapbox",
          data: {
            map: "map3",
            legend:"legend4",
            update:"map8",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDA bosques-afectados'],
            coordinates: [-66.806876,3.840280],
            zoomNumber: 9.26,
            zoomMin: 5,
            zoomMax: 14
          }
        }}>Parque Nacional de Yapacana, na Venezuela, nas proximidades da confluência entre os rios Orinoco e Ventuari</StoryMedia>. Criada em 1978, a área protege paisagens amazônicas do Orinoco e Cerro Yapacana. Desde a década de 1980, são conhecidas as atividades de mineração de ouro dentro do parque nacional. No entanto, a ilegalidade tornou-se clara com alianças entre os mineiros e membros dissidentes das guerrilhas colombianas.
      </Paragraph>
      <Paragraph>
        Notícias recentes, publicadas na imprensa colombiana e venezuelana, revelaram as constantes incursões de guerrilheiros na busca por ouro, diamante e coltan. Fala-se da presença de até 2.000 homens dentro da área do Yapacana. <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "yo0rwK1g9RE"
              }
              }}>Uma coleção de imagens de satélite para o período 1989-2016 revela o progresso do desmatamento</StoryMedia>.
      </Paragraph>
      <Paragraph>
        Em agosto de 2016, um grupo de acadêmicos, religiosos, jornalistas e autoridades do estado do Amazonas apresentou a <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/chapter3/INFORME-QUE-PRESENTAN-PERSONAS-Y-ORGANISMOS-DEL-ESTADO-AMAZONA-SOBRE-LA-CORRUPCION-MILITAR-EN-LA-ZONA-_Autoguardado_.pdf")}
        >seguinte queixa referente às atividades em Yapacana:</FileLink>
      </Paragraph>
      <Paragraph>
        "A guerrilha é aquela que gerencia todas as minas e distribui ouro, além de ficar com a maior parte enviando-a para a Colômbia. As forças armadas estacionadas no Amazonas têm sua grande fatia. A Guarda Nacional Bolivariana, a Marinha e a Força Aérea de vez em quando vão de helicóptero para as minas para obter a sua parte. A degradação ambiental é bestial e água do Orinoco na região não serve para beber ou comer devido ao mercúrio despejado em suas águas. Quem realmente cuida de sua saúde, consome água mineral ", descreve uma das seções do relatório.
      </Paragraph>
      <Paragraph>
        A ação dentro de áreas naturais protegidas também foi identificada em diversas florestas localizadas na bacia do rio Tapajós, no Brasil. <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "SCtFqfIp7U4"
        }
        }}>Em voos realizados em abril de 2017</StoryMedia>, a equipe do Instituto Socioambiental (ISA) registrou a rápida transformação dos rios Novo, Branco e Jamanxim. Em um trecho dentro da Floresta Nacional de Altamira, um garimpo de 6,5 quilômetros de extensão pode ser avistado no vídeo. Segundo informações obtidas pelos técnicos da ISA, a abertura dessas áreas de mineração ocorreu em apenas três meses.
      </Paragraph>
      <Paragraph>
        O avanço dos garimpos nas áreas protegidas da bacia do Tapajós ocorreu em um momento em que o próprio governo brasileiro estava determinado a propor leis para a redução de medidas de proteção. Além disso, a destruição ocorre sem que os órgãos responsáveis, como o IBAMA e o ICMBio, consigam combatê-la. Um relatório publicado pela Intercept Brasil em junho daquele mesmo ano, revelou como <ExternalLink href="https://theintercept.com/2017/06/13/governo-esta-prestes-a-aprovar-projetos-a-favor-de-grilagem-e-outros-crimes-ambientais/" language="pt">madeireiros em aliança com garimpeiros destruíram pontes para impedir o acesso de equipes de inspeção</ExternalLink>.
      </Paragraph>
      <Paragraph>
        Grande parte da mineração ilegal de ouro e coltan na Amazônia colombiana é desenvolvida em grandes bacias hidrográficas como Putumayo, Caquetá, Apaporis, Guainía e Inírida, e outros corpos d´água menores como os rios Cotuhé, Puré e o cânion Tatu. Estas atividades afetam áreas de gestão especiais (terras indígenas, parques nacionais, Ramsar, Reserva Florestal) e áreas de fronteira que são de grande importância cultural e ambiental, ou desempenham um papel importante na soberania alimentar das populações locais.
      </Paragraph>
      <Paragraph>
        O padrão de <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "Omb7-pibnTk"
        }
        }}>destruição ao longo dos rios também observado nas imediações da Reserva Nacional Tambopata, no departamento de Madre de Dios, Peru</StoryMedia>. O que chama a atenção, assim como nas áreas brasileiras, é a velocidade de expansão. Em apenas um semestre, ambas as margens do rio Malinowski, ao norte da reserva peruana foram tomadas de poças e lagoas para exploração.
      </Paragraph>
      <Paragraph>
        O projeto MAAP, que utiliza imagens de satélite para monitorar a Amazônia Andina identificou que a <ExternalLink href="https://maaproject.org/2015/tambopat/" language="es">invasão da Reserva Nacional Tambopata pela atividade de mineração ilegal de ouro começou no final de 2015</ExternalLink>. "Em áreas de La Pampa (setor Balata), Alto Malinowski e na Reserva Nacional de Tambopata, o <ExternalLink href="http://www.actualidadambiental.pe/?p=49390" language="es">desmatamento causado pela mineração entre janeiro de 2017 e fevereiro 2018 você foi de 1 320 hectares</ExternalLink>, com 651 hectares desse total entre outubro de 2017 e fevereiro de 2018 ", informa o site Actualidad Ambiental del Perú.
      </Paragraph>
      <Paragraph withMargin>
        <iframe frameborder="0" class="juxtapose" width="100%" height="500" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c09a020c-ec1f-11e8-9dba-0edaf8f81e27"></iframe>
      </Paragraph>
      <Paragraph>
        A situação em Madre de Dios contribuiu para que o desmatamento no Peru tenha atingindo níveis nunca registrados. De acordo com um estudo recém-lançado pelo Centro de Inovação Científica Amazônica (CINCIA), <ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">em apenas cinco anos houve uma perda florestal de 170 mil hectares</ExternalLink>. Esse valor é pelo menos <ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">30% maior do que o anunciado anteriormente por outro monitoramento</ExternalLink>.
      </Paragraph>

      <Paragraph>
        Na Bolívia, as reservas mais prósperas de vida selvagem e carbono estão nas zonas úmidas das Tierras Bajas e Yungas. Ainda assim, <StoryMedia
        icon="map"
        media={{
        id: "map_06",
        type: "mapbox",
          data: {
            map: "map4",
            legend:"legend5",
            update:"map4",
            showExtraLayers: ['LEGENDA ANPs-nacionales-afectadas','LEGENDA ANPS-departamentales-afectadas','LEGENDATIs-afectadas'],
            coordinates: [-68.327,-14.690],
            zoomNumber: 7.29,
            zoomMin: 6,
            zoomMax: 12
          }
        }}>na área de Madidi e Pilón Lajas existem 41 operações de mineração</StoryMedia>. Apesar da ameaça óbvia causada pela mineração dentro da área protegida, essa atividade foi legalizada pelo governo. O CEDIB mostrou em uma apresentação por seu diretor Marco A Gandarillas Gonzáles que em apenas um ano, entre 2013 e 2014 mais de 194 direitos foram doados, o que equivale a mais de 100 mil hectares.
      </Paragraph>
      <Paragraph>
        No documentário “Guardiões da Floresta” produzido em setembro 2016 pela Fundação Floresta Azul e Rede de Informação Ambiental (RAI), pode-se ver o <StoryMedia
        media={{
        id: "video-4",
        type: "youtube",
        data: {
          id: "zAvUPCRPcrk"
        }
        }}>progresso das atividades de mineração em grande escala dentro da áreas protegidas de Madidi</StoryMedia>.
      </Paragraph>
    </Container>
  </article>
);
