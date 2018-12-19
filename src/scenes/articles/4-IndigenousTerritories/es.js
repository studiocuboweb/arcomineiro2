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
    <title>Territorios Indígenas | La Amazonía saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Territorios Indígenas</Title>
      <Note>
        <p>
          Los impactos de la minería ilegal sobre los recursos naturales, las actividades de los mineros ilegales y el tráfico de minerales elevan los conflictos con comunidades indígenas y ribereñas en la Amazonía.
        </p>
      </Note>
      
      <Paragraph>
        De acuerdo con los análisis de la RAISG, fueron identificados, <StoryMedia
        icon="map"
        media={{
        id: "map_07",
        type: "mapbox",
          data: {
            map: "map5",
            legend:"legend6",
            update:"map5",
            showExtraLayers: ['LEGENDATIs-afectadas'],
            coordinates: [-62.965062,-7.606354],
            zoomNumber: 4.00,
            zoomMin: 4,
            zoomMax: 12
          }
        }}>entre 6207 territorios indígenas, 78 con actividades de garimpo en su límite o en el entorno</StoryMedia>. La mayoría de esos territorios - 64 - está ubicada en el Perú. Con respecto a las tierras indígenas con actividades dentro de los límites, Brasil lidera con 18 casos entre los 37 identificados. En relación a las actividades de dragas en ríos en esos territorios, Colombia tiene la mayor incidencia - 30 entre los 65 casos investigados.
      </Paragraph>
      <Table>
      <table>
        <tbody>
        <tr>
          <th>Territorios Indígenas -  Situación</th>
          <th>cantidad</th>
        </tr>
        <tr>
          <td>amenaza: minería en el límite/entorno</td>
          <td>78</td>
        </tr>
        <tr>
          <td>amenaza: minería inactiva dentro</td>
          <td>90</td>
        </tr>
        <tr>
          <td>presión: dragas dentro/en el límite</td>
          <td>65</td>
        </tr>
        <tr>
          <td>presión: minería activa dentro</td>
          <td>37</td>
        </tr>
        <tr>
          <td>TI sin afectación directa conocida</td>
          <td>5.937</td>
        </tr>
        </tbody>
      </table>
      </Table>
      <Paragraph>
        En Colombia, la percepción que tienen los pueblos indígenas frente al oro es determinante para entender las posiciones que adoptan acerca de la minería. El oro es un mineral sagrado para los pueblos indígenas de la Amazonía colombiana debido a que, de acuerdo las historias tradicionales, es la representación del sol en la tierra y se constituye en la fuente de vida. 
      </Paragraph>
      <Paragraph>
        Según relatos registrados por Rodríguez, Carlos A & Rubiano, Sebastián. Tropenbos Internacional Colombia. (2016), <ExternalLink href="https://www.academia.edu/24382243/Entre_ilusiones_ambiciones_y_decepciones._Los_efectos_sociales_culturales_y_econ%C3%B3micos_de_la_miner%C3%ADa_aur%C3%ADfera_en_el_departamento_de_Amazonas" language="es">extraer este mineral del territorio es retirar la fuente de la vida del mismo</ExternalLink>. Para sacar el mineral precioso, los chamanes debían pedir permiso a través de la curación y pagarlo por medio del tabaco y la coca. La extracción del mineral en grandes cantidades podría causar enfermedades o muerte de los responsables. De allí, que la minería sea vista dentro de las comunidades como enfermedad, candela, problemas y muerte.
        <StoryMedia
        media={{
          id: "image-3",
          type: "image",
          data: {
            credits: "Juan Gabriel Soler / Gaia Amazonas",
            src: require("photos/chapter4/20a_JuanGabrielSoler-GaiaAmazonas_Apaporis2016-2851.jpg")
          }
        }}> Río Apaporis: los "raudales" o "cachiveras" son sitios sagrados para los pueblos indígenas de la Amazonía colombiana</StoryMedia>. Normalmente en estos sitios sagrados hay yacimientos de oro, de allí la importancia de protegerlos de las actividades extractivas.
      </Paragraph>
      <Paragraph>
        En un testimonio registrado en marzo de 1990, el conocido 
        <StoryMedia
        media={{
          id: "image-4",
          type: "image",
          data: {
            credits: "Claudio Tavares / ISA",
            src: require("photos/chapter4/20b_Claudio Tavares-ISA_RS22241_ISA4304.jpg")
          }
        }}> líder Yanomami Davi Kopenawa</StoryMedia> revela una perspectiva distinta con respecto a la explotación del mineral. "Cuando el oro está en el frío de las profundidades de la tierra, todo está bien. Todo está realmente bien. No es peligroso. Cuando los blancos sacan el oro de la tierra, ellos lo queman, se mueven con él sobre el fuego como si fuera harina. Esto hace salir humo de él. Así se crea la xawara que es el humo del oro. Después de la  xawara wakémi, esta "epidemia humo" se va extendiendo en el bosque, allí donde viven los Yanomami, pero también en la tierra de los blancos, en todo lugar. Es por eso que estamos muriendo. A causa de este humo”.
      </Paragraph>
      <Quote author="Davi Kopenawa, líder Yanomami">
        Cuando el oro está en el frío de las profundidades de la tierra, todo está bien. Todo está realmente bien. No es peligroso.
      </Quote>
      <Paragraph>
        A pesar de las creencias milenarias sobre el oro, la actividad minera ilegal ha permeado los territorios indígenas amazónicos y ha alterado las concepciones tradicionales sobre este mineral. Incluso, algunos jóvenes se han distanciado de las autoridades tradicionales, se han rehusado a las enseñanzas de los abuelos y al conocimiento ancestral y han abandonado las escuelas para dedicarse a la actividad minera.
      </Paragraph>
      <Paragraph>
        De esta manera, los ancianos, sabios y muchos líderes de los pueblos indígenas ven a la influencia de la actividad minera en sus territorios como fuente de peligro para la integridad cultural, el manejo tradicional, la gobernabilidad local sobre sus territorios y la salud de sus pueblos.
      </Paragraph>
      <Paragraph>
        Incluso, casos que tuvieron sus inicios hace 30 años, como <StoryMedia
          media={{
            id: "galery-1",
            type: "gallery",
            data: {
              items: [
                {
                  src: require("photos/chapter4/gallery-1/01_RogerioAssis-ISA_RS20033.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/02_RogerioAssis-ISA_RS20040.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/03_RogerioAssis-ISA_RS20042.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/04_RogerioAssis-ISA_RS20034.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/05_RogerioAssis-ISA_RS20032.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/06_RogerioAssis-ISA_RS20029.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/07_RogerioAssis-ISA_RS20045.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/08_RogerioAssis-ISA_RS20043.jpg"),
                  credits: "Rogério Assis / ISA"
                },
                {
                  src: require("photos/chapter4/gallery-1/09_RogerioAssis-ISA_RS20035.jpg"),
                  credits: "Rogério Assis / ISA"
                }
              ]
            }
          }}
        >las invasiones de mineros ilegales a  los territorios Yanomami en Brasil y Venezuela</StoryMedia>, aún perduran, y los daños a la salud y a las formas de vida son evidentes. Hoy, se estima que cinco mil mineros operan ilegalmente en la Tierra Indígena Yanomami.
      </Paragraph>
      <Paragraph>
        Los informes de pobladores de aldeas ubicadas a orillas del río Uiracoera indicaban que, entre 1987 y 1989, los Yanomami llegaron a contar 2.003 balsas con dragas trabajando cerca de la comunidad de Waikas. Con la culminación de la demarcación del territorio en 1991, estas operaciones fueron cerradas. Sin embargo, esto empieza a cambiar en 2010, cuando nuevas dragas llegan a trabajar en el río. Los líderes intentaron impedir la reanudación de la explotación minera, pero los invasores se negaron a salir, argumentando que la actividad representaba su única fuente de sustento. A finales de 2013 las balsas ya  eran 42 ,<StoryMedia
          media={{
          id: "video-1",
          type: "youtube",
          data: {
            id: "lC9kcGKyvBw"
          }
          }}>y en 2016, un sobrevuelo identificó 49 balsas</StoryMedia>.
      </Paragraph>
      <Paragraph>
        Estos relatos sobre la actividad  de balsas dentro de la tierra Yanomami arrojan luz sobre la forma de actuar  de la minería ilegal. En el río Uiracoera, las informaciones  revelan que en una balsa trabajan dos grupos en turnos de nueve horas cada uno. Cada grupo tiene seis personas de día y otras seis de noche. Además de estos 12 miembros, el equipo incluye a un gerente y una persona que cocina.
      </Paragraph>
      <Paragraph>
        El gerente trabaja en el área con el equipo. El dueño de la balsa se queda en la ciudad. Pocos poseen más de una balsa, y un gerente no gestiona más de una balsa a la vez. El 40% del oro recogido por la balsa se divide entre los trabajadores y el 60% va al dueño de la balsa.
      </Paragraph>
      <Board>
        <strong> La economía del campamento minero ilegal</strong>
        <br />Precios en gramos de oro
        <p>. Para subir el río: 10g por persona.<br />Se puede pagar después, cuando el campamento tenga éxito.</p>
        <p>. Prostitutas: 3 g por media hora.</p>
        <p>. Cerveza: 1 lata pequeña por 20 reales o 0,2 gramos</p>
        <p>. 1 pollo: 80 reales o 0,8 g</p>
        <p>. Corte de pelo: 0,5g</p>
        <p>. (Hay 10 puntos de internet en el área). <br /> 30 minutos cuesta 0,5 gramos.</p>
      </Board>
      <Paragraph>
        En Perú, Puerto Luz es una de las diez comunidades del entorno de la <StoryMedia
        icon="map"
        media={{
        id: "map_08",
        type: "mapbox",
          data: {
            map: "map6",
            legend:"legend7",
            update:"map6",
            showExtraLayers: ['LEGENDATIs-afectadas','ETIQUETA_nombre-tis-afectadas'],
            coordinates: [-70.572203,-11.894342],
            zoomNumber: 6.99,
            zoomMin: 5,
            zoomMax: 12
          }
        }}>Reserva Comunal Amarakaeri que sufre los embates de la extracción de oro indiscriminada</StoryMedia>. Sus habitantes, que son más de 400, viven en medio de un panorama desolador. Al igual que  en las otras nueve comunidades nativas de la zona de amortiguamiento de la Reserva Comunal Amarakaeri, debido a la presencia de la extracción de oro y a la falta de oportunidades, las familias se han visto obligadas a practicar la minería artesanal. 
      </Paragraph>
      <Paragraph>
        <ExternalLink href="https://larepublica.pe/sociedad/1177491-los-harakbuts-el-pueblo-nativo-que-la-mineria-ilegal-asfixia-en-madre-de-dios" language="es">"Nosotros no buscamos oro para hacernos ricos, solo buscamos lo necesario para que nuestros hijos estudien"</ExternalLink>, afirma Virginia Kirihua, de 36 años, quien desde niña ha visto cómo, primero, los hombres blancos, y luego los foráneos cobrizos, se han vuelto cada vez más ambiciosos por esos piedrecitas brillantes que sus ancestros confundían con los granos del maíz que ellos cosechaban.
      </Paragraph>
      <Paragraph>
        La Reserva Comunal Amarakaeri forma parte del sistema de áreas protegidas del Perú y es patrimonio de la nación. Busca mantener y desarrollar los valores culturales de las <StoryMedia
        icon="map"
        media={{
        id: "map_09",
        type: "mapbox",
          data: {
            map: "map6_1",
            legend:"legend8",
            update:"map6_1",
            showExtraLayers: ['LEGENDATIs-afectadas','ETIQUETA_etnias-tis-afectadas'],
            coordinates: [-70.921732,-12.870992],
            zoomNumber: 8.83,
            zoomMin: 7,
            zoomMax: 10
          }
        }}>comunidades nativas Harakmbut</StoryMedia>, la calidad y cantidad de agua, el equilibrio ecológico y un ambiente adecuado para el desarrollo de sus comunidades.
      </Paragraph>
      <Paragraph>
        Otro caso emblemático denunciado por comunidades tiene lugar en la provincia de Zamora Chinchipe, en Ecuador. Se trata del megaproyecto minero a cielo abierto Mirador. Un <ExternalLink href="https://maaproject.org/mirador/" language="es">análisis producido</ExternalLink> en colaboración con  Amazon Conservation Team, Amazon Watch, Amazon Conservation, y EcoCiencia demuestra a través de imágenes satelitales el impacto de la deforestación causada desde 2009 hasta finales de 2017 en una zona de 1.307 hectáreas. 
      </Paragraph>
      <Paragraph>
        En este caso, los daños provocados por la minería están relacionados con concesiones. El Ministerio del Ambiente suspendió en mayo de 2018 el 40% de las obras en Mirador por incumplimientos ambientales.
      </Paragraph>
      <Paragraph>
        Un conocido opositor a la minería, <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Salvador Quishpe, em foto de junho de 2015, da agência Andes",
            src: require("photos/chapter4/24_AgenciaAndes_SalvadorQuishpe.jpg")
          }
        }}>Salvador Quishpe, prefecto de Zamora Chinchipe</StoryMedia>, señaló igualmente que los actores de la minería ilegal “parece que combinan  la minería con  otro tipo de actividades ilícitas, como , lavado de dinero. Esto viene también acompañado de actos delictivos, como perseguir a la gente que no está de acuerdo con  que se destruya la naturaleza”.
      </Paragraph>
      <Paragraph>
        Quishpe señala que “el problema es que nunca existió planificación, y se ha entregado las concesiones mineras en cualquier lugar, y también la gente de la zona ha empezado a hacer minería de oro. Entonces el problema mayor es la falta de planificación, la falta de decisión sobre qué zona es para qué.”<br />
        En su opinión, para las comunidades lo más relevante son los problemas ambientales. “Nosotros no nos hacemos mayor problema con que se haga la minería dentro de esa zona. Que sea legal o ilegal no llama la atención, porque para efectos de contaminación no vemos ninguna diferencia si ese proyecto minero es legal o ilegal, los efectos de contaminación son iguales”.
      </Paragraph>
      <Quote author="Salvador Quishpe, prefeito de zona afetada no Equador">
        Que sea legal o ilegal no llama la atención, porque para efectos de contaminación no vemos ninguna diferencia si ese proyecto minero es legal o ilegal, los efectos de contaminación son iguales
      </Quote>
      <Paragraph>
      Respecto a la minería ilegal, Quishpe hace especial énfasis en el <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "",
            src: require("photos/chapter4/26_Chinapintza_ImgSateliteSentinel2B_20181024.jpg")
          }
        }}>sector Chinapintza (provincia de Zamora Chinchipe)</StoryMedia>. “El otro ejemplo de minería ilegal podría ser Chinapintza, que también está dentro de una zona destinada para minería de acuerdo a nuestra planificación provincial. Es ilegal, la gente no tiene títulos, algunos tienen, otros no tienen. La mayoría no tiene, pero la contaminación es igual”.
      </Paragraph>
      <Paragraph>
        En Ecuador, en virtud de la reforma a la Ley Minera, y de acuerdo al tamaño de la explotación, la minería se divide en minería artesanal, pequeña minería, mediana minería y gran minería. Asimismo, se desarrolla bajo dos modalidades: minería metálica y minería no  metálica. La minería que se ha venido desarrollando en el Ecuador responde a actividades de pequeña escala y artesanal principalmente en la zona sur.
      </Paragraph>
      <Paragraph>
        También en Bolivia, Ecuador y Perú leyes recientes de minería han hecho que la división entre minería ilegal y legal sea bastante confusa. La aprobación de <FileLink
          href={require("documents/chapter4/Ley535_de_mineria_y_metalurgia-2014.pdf")}
          format="pdf"
          size="680KB"
        >la Ley de Minería y Metalurgia Nº 535</FileLink> generó el rechazo de los líderes indígenas de Bolivia. La principal queja es la falta de consulta previa a los pueblos indígenas. En la práctica, la consulta deja de ser obligatoria.
      </Paragraph>
      <Paragraph>
        "Consolida la política de expansión de la minería en las tierras bajas y consolida la posición de las áreas de minería en territorios indígenas, parques naturales y áreas de alto valor natural", afirma una <FileLink
          href={require("documents/chapter4/RESOLUCION-CUMBRE-LEY-MINERA.pdf")}
          format="pdf"
          size="3.7MB"
        >resolución aprobada por los movimientos indígenas</FileLink> el 5 de junio de 2014 en la Confederación de los Pueblos Indígenas de Bolivia.
      </Paragraph>
    </Container>
  </article>
);
