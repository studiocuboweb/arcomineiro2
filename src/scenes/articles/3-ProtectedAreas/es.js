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
      <title>Áreas Protegidas | La Amazonía saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Áreas Protegidas</Title>
      <Note>
        <p>
          Además de las amenazas para los recursos hídricos y la salud de las comunidades de la Amazonía, la <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "",
            src: require("photos/chapter3/09_DanielParanayba_ParqueNacionalJamanxim.jpg")
          }
        }}>minería trae impactos directos a los bosques y otros ecosistemas tropicales</StoryMedia>, como las zonas húmedas y manchas de herbazales.
        </p>
      </Note>
      <Paragraph>
        Un estudio realizado entre los años 2001 y 2013 <FileLink
          href={require("documents/chapter3/Alvarez-Berrios_2015_Environ._Res._Lett._10_014006.pdf")}
          format="pdf"
          size="1.7MB"
        >por los investigadores Nora L. Alvarez Berrios y T Michel Aide, ambos académicos de la Universidad de Puerto Rico - Río Piedras , sugiere que hubo un aumento en la deforestación relacionado con la explotación de oro en las principales zonas de bosque tropical de la Amazonía.</FileLink> Además, las mayores áreas de extracción se ubican dentro de un radio de 10 km de 31 áreas protegidas.
      </Paragraph>
      <Paragraph>
        De acuerdo con el trabajo, que se publicó en enero de 2015 en la revista Environmental Research Letters, hubo una aceleración de la pérdida forestal en lugares identificados como de extracción de oro. Mientras que para el periodo 2001–2006 el estudio señaló la pérdida de 377 km2, entre los años 2007 y 2013 la pérdida fue de 1303 km2. Las tres regiones identificadas con mayor presión son los bosques del Escudo de las Guayanas, los bosques húmedos del suroeste amazónico y los bosques del Xingú y Tapajós en Brasil.
      </Paragraph>
      <Paragraph>
        <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              credits: "Alberto Blanco, Barbara Fraser, Charles Brewer Carias, Javier Mesa, Oscar Mujica/FZS, arquivo Wataniba",
              items: [
                {
                  src: require("photos/chapter3/gallery-1/01_AlbertoBlanco_NorteSierradeLLema_EdoBolivar_LagunasYPozosDeSaqueMercurioMetilado_P4301277.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/02_BarbaraFraser_PE_MadreDeDios_IMG_0209.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/03_Charles_Brewer-Carias_Minas_Gran_Sabana_PNCanaima_Pemon_Edo-Bolivar.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/04_DanielParanayba_FlonaAltamira_Garimpo.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/05_OscarMujica-FZS_PE_LaPampa.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/06_JavierMesa_Minas_PNCanaima_EdoBolivar_MG_9204.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/07_JavierMesa_Minas_PNCanaima_MG_9193.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/08_JavierMesa_Minas_PNCanaima_MG_9195.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/09_PN Canaima_Gran Sabana_Javier Mesa_MG_6137.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/10_CharlesBrewerCarias_RioKukenamYLosTepuyesOrientals_2526.jpg")
                },
                {
                  src: require("photos/chapter3/gallery-1/11_Wataniba_Yapacana2013_IMG_1832.jpg")
                }
              ]
            }
          }}
        ></StoryMedia> 
      </Paragraph>
      <Paragraph>
        De acuerdo con el análisis de la RAISG, <StoryMedia
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
        }}>de 649 áreas naturales protegidas, 55 tienen puntos de minería ilegal activos o dragas dentro de sus límites</StoryMedia>. Hay todavía un total de 41 áreas naturales protegidas que sufren daños indirectos, ya sea en áreas de amortiguamiento o en los bordes.
      </Paragraph>
      <Table>
        <table>
            <tr>
              <th>Áreas Protegidas -  Situación</th>
              <th>cantidad</th>
            </tr>
            <tr>
              <td>amenaza: minería en el límite/entorno</td>
              <td>14</td>
            </tr>
            <tr>
              <td>amenaza: minería inactiva dentro</td>
              <td>27</td>
            </tr>
            <tr>
              <td>presión: dragas dentro/en el límite</td>
              <td>22</td>
            </tr>
            <tr>
              <td>presión: minería activa dentro</td>
              <td>33</td>
            </tr>
            <tr>
              <td>ANP sin afectación directa conocida</td>
              <td>533</td>
            </tr>
          </table>
        </Table>
      <Paragraph>
        Uno de los casos más significativos de esta falta de control es el <StoryMedia
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
        }}>Parque Nacional de Yapacana en Venezuela, en las cercanías de la confluencia entre los ríos Orinoco y Ventuari</StoryMedia>. Creada en 1978, el área protege paisajes amazónicos del Orinoco y el Cerro Yapacana. Desde los años 80,  son conocidas las actividades de extracción de oro dentro del parque nacional. Sin embargo, la ilegalidad se hizo patente con alianzas entre los mineros y miembros disidentes de guerrillas colombianas.
      </Paragraph>
      <Paragraph>
        Noticias recientes, publicadas tanto en la prensa colombiana como en la venezolana, revelaron las incursiones constantes de guerrilleros en la búsqueda de oro, diamante y coltán. Se habla de la presencia de hasta 2.000 hombres dentro del área del PN Yapacana.<StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "yo0rwK1g9RE"
              }
              }}>Una selección de imágenes de satélite para el período 1989-2016 revela el avance de la deforestación</StoryMedia>
      </Paragraph>
      <Paragraph>
        En agosto de 2016, un grupo de académicos, religiosos, periodistas y autoridades del estado de Amazonas presentó la <FileLink
          format="pdf"
          size="0.2MB"
          href={require("documents/chapter3/INFORME-QUE-PRESENTAN-PERSONAS-Y-ORGANISMOS-DEL-ESTADO-AMAZONA-SOBRE-LA-CORRUPCION-MILITAR-EN-LA-ZONA-_Autoguardado_.pdf")}
        >siguiente denuncia con relación a las actividades en Yapacana.</FileLink>
      </Paragraph>
      <Paragraph>
        "La guerrilla es la que administra todas las minas. Parte y reparte el oro y se queda con la mayor parte que va hacia Colombia. Los generales de las fuerzas armadas acantonadas en Amazonas tienen su gran tajada: el de la Guardia Nacional Bolivariana, la Armada y la Aviación. Cada cierto tiempo van en helicóptero a las minas a buscar su tajada. La degradación del ambiente es bestial y el agua del Orinoco en esa región ya no se debe tomar ni comer sus pescados por el mercurio arrojado en sus aguas. El que cuida verdaderamente su salud, consume agua mineral", describe una de las secciones del informe. 
      </Paragraph>
      <Paragraph>
        El desarrollo de la actividad dentro de áreas naturales protegidas también fue identificada en diversos bosques ubicados en la cuenca del río Tapajós, en Brasil. <StoryMedia
        media={{
        id: "video-2",
        type: "youtube",
        data: {
          id: "SCtFqfIp7U4"
        }
        }}>En sobrevuelos realizados en abril de 2017</StoryMedia>, el equipo del Instituto Socioambiental (ISA) registró la rápida transformación de los ríos Novo, Branco y Jamanxim. En un trecho ubicado dentro de la Floresta Nacional de Altamira, el video registra un campamento minero de 6,5 kilómetros de extensión. Según informaciones obtenidas por los técnicos del ISA, el establecimiento de estas áreas de minería ocurrió en apenas tres meses.
      </Paragraph>
      <Paragraph>
        El avance de la extracción minera dentro de las áreas protegidas de la cuenca del Tapajós ocurrió en momentos en que el propio gobierno de Brasil se  empeñaba en proponer leyes para la reducción de las medidas de protección. Además, la destrucción ocurre sin que los órganos responsables, como el Ibama y el ICMBio, logren combatirla. <ExternalLink href="https://theintercept.com/2017/06/13/governo-esta-prestes-a-aprovar-projetos-a-favor-de-grilagem-e-outros-crimes-ambientais/" language="pt">Un reportaje publicado por Intercept Brasil en junio de ese mismo año </ExternalLink> revelaba cómo madereros en alianza con mineros ilegales habían destruido puentes para evitar el acceso de equipos de fiscalización.
      </Paragraph>
      <Paragraph>
        Gran parte de la extracción ilegal aurífera y de coltán en la Amazonía colombiana se desarrolla sobre grandes cuencas hidrográficas como el Putumayo, Caquetá, Apaporis, Guainía e Inírida, y otros cuerpos de aguas menores como los ríos Cotuhé y Puré, y el caño Tatú, llegando a afectar áreas de manejo especial (territorios indígenas, parques nacionales, sitios Ramsar, reservas forestales) y zonas fronterizas que son de gran importancia cultural y ambiental, o juegan un papel primordial en la soberanía alimentaria de las poblaciones locales.
      </Paragraph>
      <Paragraph>
        El patrón de <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "Omb7-pibnTk"
        }
        }}>destrucción a lo largo de los ríos también se observa en el entorno de la Reserva Nacional Tambopata</StoryMedia>, en el departamento de Madre de Dios, Perú. Lo que llama la atención, al igual que en las áreas brasileñas, es la rapidez de la expansión. En apenas un semestre, ambas márgenes del río Malinowski, al norte de la reserva peruana, fueron tomadas por pozos y dragas de extracción.
      </Paragraph>
      <Paragraph>
        El proyecto MAAP, que hace uso de imágenes de satélite para monitorear la Amazonía andina, identificó que <ExternalLink href="https://maaproject.org/2015/tambopat/" language="es">la invasión de la Reserva Nacional Tambopata por la actividad ilegal de minería de oro comenzó a finales de 2015</ExternalLink> “En áreas de La Pampa (sector Balata), Alto Malinowski, y en la Reserva Nacional Tambopata, <ExternalLink href="http://www.actualidadambiental.pe/?p=49390" language="es">la deforestación causada por la minería entre enero de 2017 y febrero de 2018 fue de 1 320 hectáreas, </ExternalLink> siendo 651 hectáreas de ese total, realizadas entre octubre de 2017 y febrero de 2018,”, reporta el sitio Actualidad Ambiental del Perú
      </Paragraph>
      <Paragraph withMargin>
        <iframe frameborder="0" class="juxtapose" width="100%" height="500" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=c09a020c-ec1f-11e8-9dba-0edaf8f81e27"></iframe>
      </Paragraph>
      <Paragraph>
        La situación en Madre de Dios ha contribuido a que la deforestación en el Perú alcance niveles jamás registrados. Según una <ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">investigación recientemente lanzada por el Centro de Innovación Científica Amazónica (CINCIA), </ExternalLink><ExternalLink href="https://news.wfu.edu/2018/11/08/rainforest-destruction-from-gold-mining-hits-all-time-high-in-peru/" language="en">en apenas cinco años hubo una pérdida forestal de 170 mil hectáreas. Esta cifra es por lo menos 30 por ciento mayor que la anunciada previamente por otros monitoreos.</ExternalLink>
      </Paragraph>

      <Paragraph>
        En Bolivia, la mayor riqueza de áreas húmedas, fauna y flora y almacenamiento de carbono se encuentra en las Tierras Bajas y Yungas. En <StoryMedia
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
        }}>el área de Madidi y Pilón Lajas existen 41 operaciones de minería</StoryMedia>. A pesar de la evidente amenaza causada por la explotación minera dentro del  área protegida, esta actividad fue legalizada por el gobierno.  El CEDIB mostró en una presentación de su director Marco A Gandarillas Gonzáles que en apenas un año, entre 2013 y 2014, se entregaron más de 194 concesiones, equivalentes a  más de 100 mil hectáreas. 
      </Paragraph>
      <Paragraph>
        En el  documental Guardianes del Bosque, producido en septiembre de 2016 por Fundación Blue Foresta y Red Ambiental de Información (RAI), se puede ver <StoryMedia
        media={{
        id: "video-3",
        type: "youtube",
        data: {
          id: "zAvUPCRPcrk"
        }
        }}>el avance de actividades mineras a gran escala.</StoryMedia>
      </Paragraph>
    </Container>
  </article>
);
