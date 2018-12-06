import React from "react";
import { Helmet } from "react-helmet";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import Container from "components/blocks/Container";
import Title from "components/blocks/Title";
import Paragraph from "components/blocks/Paragraph";
import FeaturedText from "components/blocks/FeaturedText";
import Quote from "components/blocks/Quote";
import Note from "components/blocks/Note";
import FileLink from "components/FileLink";
import EndChapter from "../../../components/blocks/EndChapter";

export default () => (
  <article>
    <Helmet>
      <title>Mercurio | La Amazonía saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Mercurio</Title>
      <Note>
        <p>
          La gran cantidad de mercurio utilizado en la separación del oro está contaminando la Amazonía. La explotación aurífera es el principal objetivo de la minería ilegal.
        </p>
      </Note>
      <Paragraph>
      <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Oscar Mujica/FZS Perú",
            src: require("photos/chapter2/04_OscarMujica-FZS_PE_Colorado.jpg")
          }
        }}><strong>Las cicatrices en la tierra, las aguas turbias de los ríos son daños evidentes de la minería ilegal</strong></StoryMedia>. Pero hay un mal invisible que contamina la fauna amazónica y los habitantes de la región. El mercurio, revelan distintos estudios, está afectando a poblaciones indígenas y locales que viven cerca o trabajan en zonas de extracción de oro, así como aquellas que consumen peces amazónicos como parte de su dieta.
      </Paragraph>
      <Paragraph>
        Nadie consume tanto pescado en su dieta como los pueblos de la Amazonía.
        <StoryMedia
              media={{
                id: "galery-1",
                type: "gallery",
                data: {
                  items: [
                    {
                      src: require("photos/chapter2/gallery-1/01_CINCIA_IMG1678.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/02_DSC05788.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/03_DSC05797.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/04_NatalieSzponar_DSC06069.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/05_NatalieSzponar_DSC06131.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/06_NatalieSzponar4_DSC06137.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/07_NatalieSzponar_DSC06141.jpg"),
                      credits: "Natalie Szponar"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/08_CINCIA_DSCF3067.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/09_CINCIA_IMG_0483.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/10_CINCIA_IMG_3955.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/11_AldoRivas_IMG_4152.jpg"),
                      credits: "Aldo Rivas"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/12_AldoRivas_IMG_4167.jpg"),
                      credits: "Aldo Rivas"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/13_CINCIA_P1000164.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/14_CINCIA_P3240166.jpg"),
                      credits: "CINCIA"
                    },
                    {
                      src: require("photos/chapter2/gallery-1/15_NatalieSzponar_PacoMaizal.jpg"),
                      credits: "Natalie Szponar"
                    }
                  ]
                }
              }}
            > Ribereños e indígenas tienen en las especies de agua dulce su principal fuente de proteína</StoryMedia> . Pero si bien los peces garantizan una alimentación nutritiva y sabrosa, también pueden entrañar amenazas para la salud de estas poblaciones. Los estudios han revelado la acumulación de mercurio por encima de los niveles recomendados por la Organización Mundial de la Salud en varias especies de peces utilizadas para el consumo humano. 
      </Paragraph>
      <Paragraph>
        Este metal es bioacumulado en los tejidos animales. Es decir, la concentración de mercurio será mayor en los peces que se alimentan de otros de menor tamaño y su efecto negativo sobre los humanos será aún mayor.
      </Paragraph>
      <Paragraph>
        El mercurio se emplea en la depuración del oro, pero sus residuos contaminan el agua y el aire. Este metal retorna a la naturaleza en forma de metilmercurio, un compuesto altamente tóxico y cuyos efectos provocan daños graves y permanentes. Su acumulación en los tejidos humanos afecta el sistema nervioso central, causando problemas de orden cognitivo y motor, pérdida de visión y enfermedades cardíacas, entre otras afecciones. Las mujeres embarazadas y los niños son las poblaciones más vulnerables.
      </Paragraph>
      <Paragraph>
        En Perú, resultados preliminares de un <FileLink
          href={require("documents/chapter2/CINCIA-Research-Brief-2-v7.2-Mercurio-en-peces-de-pozas-mineras.pdf")}
          format="pdf"
          size="1.7MB"
        >estudio realizado por  CINCIA</FileLink> revelan que los niveles de mercurio en peces son un 43% mayores en pozos abandonados por la minería de oro que en áreas donde no existen campamentos mineros. Se recolectó <StoryMedia
        media={{
          id: "galery-2",
          type: "gallery",
          data: {
            credits: "CINCIA",
            items: [
              {
                src: require("photos/chapter2/gallery-2/01_CINCIA_ColetaPeixe_1.jpg")
              },
              {
                src: require("photos/chapter2/gallery-2/02_CINCIA_ColetaPeixe_a.jpg")
              },
              {
                src: require("photos/chapter2/gallery-2/03_CINCIA_ColetaPeixe_b.jpg")
              },
              {
                src: require("photos/chapter2/gallery-2/04_CINCIA_lab01.jpg")
              }
            ]
          }
        }}>muestras de peces</StoryMedia> en siete lagunas ubicadas en zonas mineras abandonadas de Laberinto, Tambopata, Madre de Dios e Inambari. Adicionalmente se recolectó muestras de peces en dos lagunas y un río dentro del Parque Nacional Manu, como área de referencia donde no hay presencia de actividad minera.
      </Paragraph>
      <Paragraph>
        En Venezuela, a pedido de la Organización Indígena del Caura Kuyujani, en 2010, se realizó <FileLink
          href={require("documents/chapter2/Informe_riesgo_exp_metilmercurio_Caura.pdf")}
          format="pdf"
          size="1.4MB"
        >un estudio para determinar el contenido de mercurio presente en algunas de las principales especies de peces consumidos por comunidades de la cuenca del alto río Caura</FileLink> . Todas las muestras presentaron valores medios más altos que el valor de 0,5 mg / kg reportado como permitido por la Organización Mundial de la Salud, que se considera límite de seguridad para usuarios ocasionales, pero no para los consumidores de alta frecuencia como en estas poblaciones indígenas.
      </Paragraph>
      <Paragraph>
        Lo mismo ocurrió en el río Orinoco, en su recorrido por el estado Amazonas, en la  frontera con Colombia, donde los investigadores Carlos Lasso y Luis Pérez, ya en 2003, encontraron <FileLink
          href={require("documents/chapter2/2006_Lasso_et_al_Peces_Ventuari_Venezuela_114p.pdf")}
          format="pdf"
          size="11.8MB"
        >que nueve de 17 especies de consumo local habitual presentaban valores de mercurio superiores a los señalados por la OMS como máximo permitido.</FileLink> Consecuentemente, miembros de las poblaciones Ye’kwana del Caura, estado Bolívar, y Uwottüja, del Orinoco, estado Amazonas, presentaron, para 2009 y 2010, altas concentraciones de mercurio en cabello. Esta situación se repite en peces de los ríos Paragua y Caroní, según investigaciones de 2009. De esta manera, todos los grandes ríos de la Amazonía venezolana presentaban peces con altos niveles de mercurio aún antes del boom masivo por la extracción de oro.
      </Paragraph>
      <Paragraph>
        Una de las regiones más afectadas en el Amazonas es el territorio Yanomami, que se extiende entre Brasil y Venezuela <StoryMedia
        icon="map"
        media={{
        id: "map-6",
        type: "mapbox",
          data: {
            map: "map2",
            legend:"map2",
            update:"map2",
            showExtraLayers: ['LEGENDA4- Yanomami_tis-afectadas'],
            coordinates: [-63.693113,2.766774],
            zoomNumber: 5.50,
            zoomMin: 5,
            zoomMax: 10
          }
        }}>território Yanomami, que se estende entre o Brasil e a Venezuela</StoryMedia>. Allí un <FileLink
        href={require("documents/chapter2/diagnostico_contaminacao_mercurio_terra_indigena_yanomami.pdf")}
        format="pdf"
        size="1.4MB">estudio conducido por el Instituto Socioambiental (ISA), en alianza con la Fundación Oswaldo Cruz (Fiocruz)</FileLink>, ecogió 239 muestras de cabello en nueve aldeas en noviembre de 2014. Se dió prioridad a los grupos más vulnerables a la contaminación: niños, mujeres en edad reproductiva y adultos con algún historial de contacto directo con la actividad de extracción de oro. También se recolectaron 35 muestras de peces que son parte fundamental de la dieta alimentaria de este pueblo. El estudio se realizó en las regiones de Papiú y Waikás, donde residen las etnias Yanomami y Ye'kwana.
      </Paragraph>
      <Paragraph>
        "El caso más alarmante fue el de la comunidad Yanomami de Aracaçá, en la región de Waikás, donde el 92% del total de las muestras presentaron alto índice de contaminación. Esta comunidad, entre todas las encuestadas, es la que tiene el campamento minero más cercano. En la región de Papiú, donde se registraron los menores índices de contaminación - el 6,7% de las muestras analizadas - la presencia de la minería  es menos acentuada”, indicó un resumen de los <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "XWF1MKP7pwY"
              }
              }}>resultados publicado por el ISA.</StoryMedia>
      </Paragraph>
      <Paragraph>
        En Colombia, mucha de la actividad minera tiene lugar en zonas de frontera. Esto significa que las cuencas compartidas se convierten en las principales vías de contaminación por mercurio. La zona más afectada se encuentra a lo largo del río Caquetá. Un estudio del Instituto Nacional de Salud de Colombia en el río Apaporis revela que hasta el 80% de las  poblaciones indígenas en esta región están contaminadas por el mercurio.
      </Paragraph>
      <Paragraph>
        En Bolivia,<ExternalLink href="https://cedib.org/post_type_mapas/contaminacion-por-mercurio-en-la-amazonia-de-bolivia/" language="es">datos del CEDIB</ExternalLink> muestran que en 2015 la importación total de este metal llegó a 35.793 kilos, 20 veces más que los 1.710 kilos registrados “en 2010. El libro “Mercurio en Bolivia: Línea de base de usos, emisiones y contaminación" - presentado por los Ministerios de Relaciones Exteriores y Medio Ambiente en 2016 - sostiene que con 133 toneladas de mercurio liberadas al año, Bolivia es el tercer país de las Américas. El 47% procede de la explotación de oro.
      </Paragraph>
      <EndChapter>
        <strong className='regular-title'>El Convenio de Minamata</strong>
        <p className='regular-txt'>
        La grave situación de contaminación por mercurio en varios países llevó a la creación por las Naciones Unidas del <ExternalLink href="https://treaties.un.org/Pages/ViewDetails.aspx?src=IND&mtdsg_no=XXVII-17&chapter=27&clang=_en" language="en">Convenio de Minamata, en memoria del desastre humano y ambiental ocurrido en la zona costera de Minamata</ExternalLink>, en Japón, causado por el consumo de peces con altos niveles de mercurio. El acuerdo entre 101 miembros prevé un mayor control de la importación, comercialización y descarte de mercurio.
        </p>
        <p className='regular-txt'>
          Para <ExternalLink href="https://www.paginasiete.bo/sociedad/2018/9/23/importacion-de-mercurio-crecio-20-veces-194729.html" language="es">los países amazónicos que suscribieron la convención en 2013,  el acuerdo entró en vigor en 2017, al superar el punto límite de 50 ratificaciones.</ExternalLink> Salvo Colombia y Venezuela, todos los demás países con territorio en el bioma amazónico –incluida Francia– ya han firmado y ratificado el Convenio de Minamata. Además, todos los países del bioma se encuentran realizando proyectos para el convenio. 
        </p>
        <p className='regular-txt'>
        A pesar de no haber ratificado el Convenio todavía, Colombia y Venezuela también vienen adelantando proyectos a fin de determinar la capacidad institucional, normativa, técnica y comercial del país para cumplir con las obligaciones del Convenio. Colombia cuenta con una estrategia ambiciosa para eliminar el descarte irregular de mercurio, la cual se encuentra incluida en el plan de gobierno lanzado en noviembre de 2018 y vigente hasta 2023.
        </p>
      </EndChapter>
    </Container>
  </article>
);
