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
import EndChapter from "components/blocks/EndChapter";
import RelatedNews from "components/RelatedNews";

export default () => (
  <article>
    <Helmet>
      <title>Conflictos | La Amazonía saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Conflictos</Title>
      <Note>
        <p>
          Las crisis políticas en América del Sur también han contribuido a la profundización de los conflictos que involucra a comunidades y territorios indígenas.
        </p>
      </Note>
      <Paragraph>
        <StoryMedia
          media={{
            id: "image-1",
            type: "image",
            data: {
              credits: "Rogério Assis/ISA",
              src: require("photos/chapter5/25_RogerioAssis-ISA_RS6436_IMG_3077.jpg")
            }
          }}>Los impactos de la minería ilegal ya se ven como graves violaciones a los derechos humanos.</StoryMedia> La contaminación del agua y la expulsión de pueblos indígenas en aislamiento voluntario son algunos indicios de los daños al bien común.
      </Paragraph>
      <Paragraph>
        Además del impacto ambiental, existe un impacto cultural y económico en la perpetuación de la minería. No sólo existe el costo de la pérdida de actividades de las poblaciones tradicionales, sino la propia remediación de los sitios degradados.
      </Paragraph>
      <Paragraph>
        La minería ilegal ha estado enmarcada en el contexto del conflicto armado en Colombia al constituir una de las principales fuentes de financiación de los actores armados ilegales en la Amazonía. Otro de los mecanismos por los cuales los grupos armados ilegales estaban asociados a la actividad, era a través del pago de vacunas o cuotas de funcionamiento y producción que eran cobrados a mineros para permitirles el desarrollo de sus actividades.
      </Paragraph>
      <Paragraph>
        En 2013, en Colombia, la Policía Nacional reveló que en más de la mitad de los municipios donde se extraía oro en el país había presencia de actores armados ilegales, y es que la ubicación geográfica de esta zona del país es estratégica por su carácter fronterizo, por su difícil acceso y por la precaria presencia de las instituciones del Estado en la zona.
      </Paragraph>
      <Paragraph>
        De acuerdo con <ExternalLink href="https://www.eltiempo.com/justicia/conflicto-y-narcotrafico/mineria-ilegal-y-cultivos-de-coca-coinciden-en-74-municipios-233006" language="es">un reportaje del periódico El Tiempo de junio de 2018</ExternalLink>, en el cual se mencionan cálculos del Ministerio de Defensa "en solo tres años, Colombia pasó de tener 78.939 hectáreas –un área equivalente a dos veces el tamaño de Medellín– de ecosistemas arrasados por la minería de oro ilegal a 83.620 hectáreas afectadas. Ese crecimiento, equivalente al seis por ciento, significa que pese a las alertas, ese fenómeno criminal y depredador sigue expandiéndose. De hecho, las mediciones dan cuenta que de los 131 municipios donde hay explotación de oro de aluvión, en al menos 74 también hay cultivos de coca.”
      </Paragraph>
      <Paragraph>
        En Venezuela, la presencia de grupos armados irregulares provenientes de Colombia, vinculados con el ELN y el brazo disidente de las FARC es un secreto a voces. Se les ha involucrado en diferentes hechos violentos en zonas mineras, especialmente del estado Bolívar, así como en el ataque y muerte a militares venezolanos en zonas fronterizas del estado Amazonas, en las inmediaciones de Puerto Ayacucho, su capital.
      </Paragraph>
      <Paragraph>
        La frecuencia de acciones de represión por el Estado a la minería ilegal ha aumentado y, con ellas, los enfrentamientos con poblaciones que dependen de la economía de la minería ilegal. Una práctica común entre los agentes ambientales es la <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "XhKSyM0Uk-A"
        }
        }}>destrucción de los equipos de extracción de minerales, como las dragas y las balsas</StoryMedia>. Los equipos son quemados  o confiscados. Estas acciones han encontrado resistencia y, a menudo, actos de represalia. Un caso reciente que merece destacarse fue <ExternalLink href="https://www.youtube.com/watch?v=EUGSTxvaiPg" language="pt">la revuelta popular en la ciudad de Humaitá, en el estado del Amazonas, Brasil, donde las sedes de los órganos ambientales fueron quemadas</ExternalLink> tras la incautación de balsas que extraen oro en el río Madeira.
      </Paragraph>
      <Paragraph>
        La resistencia de los mineros ilegales en Brasil ha recibido apoyo político en las esferas más altas del poder.<ExternalLink href="https://www1.folha.uol.com.br/ambiente/2017/08/1914113-deputado-quer-proibir-ibama-de-destruir-bens-apreendidos.shtml" language="pt">Un proyecto de ley presentado al Congreso Nacional</ExternalLink> busca precisamente retrasar acciones de represión de los órganos ambientales, en especial la destrucción de equipos.
      </Paragraph>
      <Paragraph>
        Una tendencia similar, como se informó anteriormente, fue observada en Bolivia, Ecuador y Perú, donde los gobiernos atendieron las demandas de los trabajadores involucrados en la extracción irregular de oro y flexibilizaron leyes. Se creó así una zona gris entre la ilegalidad y la caracterización de la minería artesanal, que propició la legitimación de actividades de alto impacto en regiones de gran importancia para la conservación y para la supervivencia de pueblos indígenas.
      </Paragraph>
      <EndChapter>
        <p className='smaller-txt'>
          “La minería ilegal no concibe el futuro de nuestros hijos. Aunque podamos beneficiarnos a corto plazo, estamos destruyendo el medio ambiente, nuestra selva, nuestro hogar”, expresa  <StoryMedia
          media={{
            id: "image-3",
            type: "image",
            data: {
              credit: "Juan Pinto",
              src: require('photos/chapter5/27_JuanPinto_AgustinOjeda_LiderShirian_Foto2018_Wataniba_9692-2.jpg')
            }
          }}
        >Agustín Ojeda, líder Shirian, estado Bolívar, Venezuela</StoryMedia>
        </p>
        <p className='smaller-txt'>
          Señala que el profundo cambio en el estilo de vida de su pueblo y la adopción de nuevos hábitos han perjudicado gravemente las costumbres ancestrales y, a su vez, han aumentado los problemas de salud.  
        </p>
        <Quote author="Agustín Ojeda, líder Shiriano">
          <span>“La minería ilegal nos puede llegar a matar. Los pozos mineros permiten la reproducción de mosquitos que traen enfermedades como malaria. Tampoco se toma con seriedad el efecto del mercurio en el agua; no solo la contamina a ella, también a los peces que utilizamos para comer”.</span>
        </Quote>
        <p className='smaller-txt'>
          El líder Shirian agrega que la mayoría de su comunidad ha abandonado el conuco (la chacra). Las temporadas de siembra, tala y quema no se respetan por lo que la recolección es casi nula. “Actualmente puedes ver a un indígena comprándolo casabe a un criollo en vez de producirlo”.
        </p>
        <p className='smaller-txt'>
          Asegura que ante la complicada realidad que enfrentan los pueblos indígenas, el compromiso de las instituciones competentes para lograr acuerdos que permitan mejores condiciones y garanticen una mejor calidad de vida, así como el respeto de los derechos humanos, debe estar por encima de cualquier circunstancia. “Si el ritmo de vida que llevamos ahora en Venezuela, y en el mundo continúa, llegará el momento donde no sabremos quiénes somos”
        </p>
      </EndChapter>
      <RelatedNews
        title={"MAIS - Explore a Plataforma “Minería Ilegal” da RAISG"}
        imageUrl={require("images/read-more.png")}
        href={"https://mineria.amazoniasocioambiental.org/"}
      />
    </Container>
  </article>
);
