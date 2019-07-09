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
import { FormattedMessage } from "react-intl";

export default () => (
  <article>
    <Helmet>
      <title>Conflitos | Amazônia saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Conflitos</Title>
      <Paragraph>
      <h2>
        <FormattedMessage
          id="general.authorChapter5"
          defaultMessage="-"
        />
      </h2>
      </Paragraph>
      <Note>
        <p>
          As crises políticas na América do Sul também contribuíram para o aprofundamento dos conflitos envolvendo comunidades e territórios indígenas.
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
          }}>Os impactos da mineração ilegal já são vistos como graves violações dos direitos humanos</StoryMedia>. A contaminação da água, a expulsão dos povos indígenas em isolamento voluntário são algumas indicações do dano ao bem comum.
      </Paragraph>
      <Paragraph>
        Além das agressões ambientais, há um impacto cultural e econômico na perpetuação da mineração. Não existe apenas o custo da perda de atividades das populações tradicionais, mas a própria remediação dos locais degradados.
      </Paragraph>
      <Paragraph>
        A mineração ilegal se enquadrada no contexto do conflito armado na Colômbia, uma vez que constitui uma das principais fontes de financiamento para atores armados ilegais na Amazônia. Outro mecanismo pelo qual os grupos armados ilegais estavam associados à atividade era através do pagamento de vacinas ou taxas de operação e produção que eram cobradas das mineradoras para que pudessem desenvolver suas atividades.
      </Paragraph>
      <Paragraph>
        Em 2013, na Colômbia, a Polícia Nacional revelou que mais de metade dos municípios onde o ouro era extraído no país teve a presença de grupos armados ilegais, principalmente em zonas estratégicas de fronteira, devido ao difícil acesso e à presença precária de instituições do Estado na área.
      </Paragraph>
      <Paragraph>
        De acordo com uma reportagem do jornal El Tiempo de junho de 2018, na qual são mencionados cálculos do Ministério da Defesa, "<ExternalLink href="https://www.eltiempo.com/justicia/conflicto-y-narcotrafico/mineria-ilegal-y-cultivos-de-coca-coinciden-en-74-municipios-233006" language="es">em apenas três anos, a Colômbia deixou de ter 78.939 hectares - uma área equivalente a duas vezes o tamanho de Medellín - de ecossistemas devastados pela mineração ilegal de ouro para 83.620 hectares afetados</ExternalLink>, esse crescimento, equivalente a seis por cento, significa que, apesar das advertências, esse fenômeno criminoso e predatório continua a se expandir. Além disso, as medições mostram que dos 131 municípios onde há exploração de ouro de aluvião, pelo menos em 74 também há plantações de coca."
      </Paragraph>
      <Paragraph>
        Na Venezuela, a presença de grupos armados irregulares da Colômbia, ligados ao ELN e ao braço dissidente das FARC, é um segredo aberto. Ela envolveu-se em diferentes incidentes violentos em áreas de mineração, especialmente no estado de Bolívar, assim como atacam e matam militares da Venezuela em áreas de fronteira do estado do Amazonas, nas proximidades de Puerto Ayacucho, a capital.
      </Paragraph>
      <Paragraph>
        A freqüência de ações de repressão do Estado à mineração ilegal aumentou e, com elas, os choques com populações que dependem da economia garimpeira. A prática comum entre os agentes ambientais é a <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "XhKSyM0Uk-A"
        }
        }}>destruição de equipamentos de extração mineral, como dragas e jangadas</StoryMedia>. O equipamento é queimado ou confiscado. Os atos encontraram resistência e, muitas vezes, atos de represália. Um caso recente que merece atenção foi a <ExternalLink href="https://www.youtube.com/watch?v=EUGSTxvaiPg" language="pt">revolta popular na cidade de Humaitá no estado do Amazonas, Brasil, onde a sede de órgãos ambientais foram queimados</ExternalLink> após a apreensão de balsas que extraem ouro no rio Madeira.
      </Paragraph>
      <Paragraph>
        A resistência dos mineiros ilegais no Brasil tem recebido apoio político nas esferas mais altas do poder. Um <ExternalLink href="https://www1.folha.uol.com.br/ambiente/2017/08/1914113-deputado-quer-proibir-ibama-de-destruir-bens-apreendidos.shtml" language="pt">projeto lei apresentado ao Congresso Nacional visa exatamente retardar ações de repressão dos órgão ambientais</ExternalLink>, em especial a destruição de equipamentos.  
      </Paragraph>
      <Paragraph>
        Tendência semelhante, como relatado anteriormente, foi observada na Bolívia, Equador e Peru, onde os governos atenderam a demandas dos trabalhadores envolvidos na extração irregular de ouro e flexibilizaram leis. Criou-se assim uma zona cinza entre a ilegalidade e a caracterização da mineração artesanal, que propiciou a legitimação de atividades de alto impacto em regiões de grande importância para a conservação e para a sobrevivência de povos indígenas.
      </Paragraph>
      <Quote author="Agustín Ojeda, líder Shirian">
          A mineração ilegal pode nos <br />matar. Os poços de mineração permitem a reprodução de mosquitos que trazem doenças como a malária. O efeito do mercúrio na água também não é levado a sério; não só a contamina, mas também os peixes que usamos para comer.
      </Quote>
      <EndChapter>
        <p className='medium-txt'>
          "A mineração ilegal não concebe o futuro de nossos filhos. Embora possamos nos beneficiar no curto prazo, estamos destruindo o meio ambiente, nossa selva, nosso lar ", diz <StoryMedia
          media={{
            id: "image-3",
            type: "image",              
            data: {
              credits: "Juan Pinto",
              src: require('photos/chapter5/27_JuanPinto_AgustinOjeda_LiderShirian_Foto2018_Wataniba_9692-2.jpg')
            }
          }}
        >Agustín Ojeda, líder Shirian do estado de Bolívar, Venezuela</StoryMedia>.
        </p>
        <p className='medium-txt'>
          Ele ressalta que a profunda mudança no modo de vida de seu povo e a adoção de novos hábitos prejudicaram seriamente os costumes ancestrais e, por sua vez, aumentaram os problemas de saúde. "A mineração ilegal pode nos matar. Os poços de mineração permitem a reprodução de mosquitos que trazem doenças como a malária. O efeito do mercúrio na água também não é levado a sério; não só a contamina, mas também os peixes que usamos para comer".
        </p>
        <p className='medium-txt'>
          O líder Shirian acrescenta que a maioria de sua comunidade deixou o conuco (a roça). As estações de semeadura, abate e queima não são respeitadas, por isso a colheita é quase nula. "Atualmente você pode ver um indígena comprando um casabe de um crioulo em vez de produzi-lo".
        </p>
        <p className='medium-txt'>
          Ele assegura que diante da realidade complicada enfrentada pelos povos indígenas, o compromisso das instituições competentes em alcançar acordos que permitam melhores condições e garantia de uma melhor qualidade de vida, além do respeito aos direitos humanos, deve estar acima de qualquer circunstância. "Se o ritmo de vida que vivemos hoje na Venezuela e no mundo continuar, chegará o momento em que não saberemos quem somos".
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
