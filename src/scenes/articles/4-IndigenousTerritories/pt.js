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

export default () => (
  <article>
    <Helmet>
    <title>Territórios Indígenas | Amazônia saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Territórios Indígenas</Title>
      <Note>
        <p>
          Os impactos da mineração ilegal sobre os recursos naturais, as atividades garimpeiras e o tráfego mineral geram conflitos com comunidades indígenas e ribeirinhas da Amazônia.
        </p>
      </Note>
      
      <Paragraph>
        De acordo com as análises da RAISG, foram identificados, <StoryMedia
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
        }}>entre 6207 territórios indígenas, 78 que apresentam atividades de garimpo em seu limite ou no entorno .</StoryMedia> A maioria desses territórios - 64 - está localizada no Peru. Com relação às terras indígenas com atividades dentro dos limites, o Brasil lidera com 18 casos entre os 37 identificados. Em relação às atividades de balsas em rios nesses territórios, a Colômbia tem a maior incidência - 30 entre os 65 casos investigados.
      </Paragraph>
      <Table>
      <table>
        <tbody>
        <tr>
          <th>Territórios Indígenas -  situação</th>
          <th>quantidade</th>
        </tr>
        <tr>
          <td>ameaça: garimpo no limite/entorno</td>
          <td>78</td>
        </tr>
        <tr>
          <td>ameaça: garimpo inativo dentro</td>
          <td>90</td>
        </tr>
        <tr>
          <td>pressão: balsas dentro/no limite</td>
          <td>65</td>
        </tr>
        <tr>
          <td>pressão: garimpo ativo dentro</td>
          <td>37</td>
        </tr>
        <tr>
          <td>TIs sem afetação direta conhecida</td>
          <td>5.937</td>
        </tr>
        </tbody>
      </table>
      </Table>
      <Paragraph>
        Na Colômbia, a percepção que os povos indígenas têm do ouro é crucial para entender as posições que adotam em face da mineração. O ouro é um mineral sagrado para os povos indígenas da Amazônia colombiana porque, de acordo com histórias tradicionais, é a representação do sol na terra e constitui a fonte da vida.
      </Paragraph>
      <Paragraph>
        Segundo relatos coletados por Rodríguez, Carlos A & Rubiano, Sebastián. Tropenbos Internacional Colombia. (2016), <ExternalLink href="https://www.academia.edu/24382243/Entre_ilusiones_ambiciones_y_decepciones._Los_efectos_sociales_culturales_y_econ%C3%B3micos_de_la_miner%C3%ADa_aur%C3%ADfera_en_el_departamento_de_Amazonas" language="es">extrair este mineral do território é remover a fonte de sua vida.</ExternalLink> Para extrair o mineral precioso, os xamãs tiveram que pedir permissão através da cura e pagar por ele através do fumo e da coca. A extração do mineral em grandes quantidades pode causar doença ou morte para os responsáveis. A partir daí, essa mineração é vista dentro das comunidades como doença, problemas e morte.
      </Paragraph>
      <Paragraph>
        Em depoimento em março de 1990, o xamã Yanomami Davi Kopenawa revelou uma perspectiva distinta com relação à exploração do mineral. “Quando o ouro fica no frio das profundezas de terra, aí tudo está bem. Tudo está realmente bem. Ele não é perigoso. Quando os brancos tiram o ouro da terra, eles o queimam, mexem com ele em cima do fogo como se fosse farinha. Isto faz sair fumaça dele. Assim se cria a xawara que é a fumaça do ouro. Depois desta xawara wakêmi esta “epidemia fumaça”,vai se alastrando na floresta, lá onde moram os Yanomami, mas também na terra dos brancos, em todo lugar. É por isso que estamos morrendo. Por causa desta fumaça.”
      </Paragraph>
      <Quote author="Davi Kopenawa, líder Yanomami">
        Quando o ouro fica no frio das profundezas de terra, aí tudo está bem. Tudo está realmente bem. Ele não é perigoso.
      </Quote>
      <Paragraph>
        Apesar de algumas crenças milenaristas sobre o ouro, a atividade de mineração ilegal permeou os territórios indígenas da Amazônia e alterou as concepções tradicionais desse mineral. Mesmo alguns jovens se distanciaram das autoridades tradicionais, recusaram os ensinamentos dos avós e conhecimentos ancestrais e deixaram as escolas para se dedicar à atividade de mineração.
      </Paragraph>
      <Paragraph>
        Deste modo, os anciãos, sábios e muitos líderes dos povos indígenas veem a influência da atividade de mineração em seus territórios como uma fonte de perigo para a integridade cultural, a gestão tradicional, o governo local sobre seus territórios e a saúde de seus povos.
      </Paragraph>
      <Paragraph>
        Mesmo os casos que começaram há 30 anos, <StoryMedia
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
        >como as invasões de garimpeiros nos territórios Yanomami no Brasil e na Venezuela,</StoryMedia> ainda perduram e os danos à saúde e aos estilos de vida são evidentes. Hoje, estima-se que cinco mil garimpeiros atuem ilegalmente na Terra Indígena Yanomami, apenas em sua parte brasileira.
      </Paragraph>
      <Paragraph>
        Os relatos dos aldeões nas margens do rio Uiracoera indicam que, entre 1987 e 1989, os Yanomami conseguiram contar 2.003 balsas que trabalhavam perto da comunidade de Waikás. Com a conclusão da demarcação do território em 1991, o garimpo foi fechado. No entanto, isso começou a mudar em 2010, quando novas balsas chegaram ao rio. Os líderes tentaram impedir a retomada dos garimpos, mas os invasores se recusaram a sair argumentando que a atividade representava sua única fonte de sustento. Até o final de 2013, já havia 42 jangadas. <StoryMedia
        media={{
        id: "video-1",
        type: "youtube",
        data: {
          id: "lC9kcGKyvBw"
        }
        }}>Já em 2016, um sobrevoo identifica 49 balsas.</StoryMedia>
      </Paragraph>
      <Paragraph>
        Essas relatos sobre a atuação na terra Yanomami esclarecem o modo de agir das atividades ilegais de mineração. No rio Uiracoera, a informação mostra que a balsa funciona em dois grupos com turnos de nove horas cada. Cada grupo tem seis pessoas durante o dia e outras seis à noite. Além desses 12, a equipe inclui um gerente e uma pessoa que cozinha.
      </Paragraph>
      <Paragraph>
        O gerente fica na área com a equipe. O dono da balsa, na cidade. Poucos têm mais de uma balsa e um gerente não gerencia mais de uma. Cerca de 40% do ouro coletado pela balsa é dividido entre os trabalhadores e a maior parte para o proprietário.
      </Paragraph>
      <Note>
        <strong>A economia do garimpo</strong>
        <br />preços em gramas de ouro
        <p>. para subir o rio: 10g por pessoa<br />(pode pagar mais tarde, quando houver sucesso no garimpo)</p>
        <p>. prostitutas: 3g por meia hora</p>
        <p>. cerveja: 1 lata pequena por 20 reais ou 0,2 g</p>
        <p>. 1 frango: 80 reais ou 0,8 g</p>
        <p>. corte de cabelo: 0,5g</p>
        <p>. 30 minutos de internet: 0,5g<br />(tem 10 pontos de internet na área)</p>
      </Note>
      <Paragraph>Zoom: 
        No Peru, Puerto Luz é uma das 10 comunidades da <StoryMedia
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
        }}>Reserva Comunal Amarakaeri que sofre com a devastação da mineração de ouro indiscriminada.</StoryMedia> Seus habitantes, que somam mais de 400 pessoas, vivem em meio a um panorama desolador. Como nas outras nove comunidades nativas da Reserva Comunal Amarakaeri, devido à presença da mineração de ouro e à falta de oportunidades, as famílias foram obrigadas a praticar a mineração artesanal. 
      </Paragraph>
      <Paragraph>
        <ExternalLink href="https://larepublica.pe/sociedad/1177491-los-harakbuts-el-pueblo-nativo-que-la-mineria-ilegal-asfixia-en-madre-de-dios" language="es">"Não buscamos ouro para ficar rico, nós só queremos o que é necessário para os nossos filhos para estudar",</ExternalLink> diz Virginia Kirihua, 36 anos, que desde a infância tem visto, em primeiro lugar, os homens brancos, em seguida, forasteiros, tornarem-se cada vez mais ambiciosos pelos seixos brilhantes que seus ancestrais confundiam com os grãos de milho. 
      </Paragraph>
      <Paragraph>
        A Reserva Comunal Amarakaeri faz parte do sistema de áreas protegidas do Peru. Procura manter os valores culturais das <StoryMedia
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
        }}>comunidades nativas de Harakmbut,</StoryMedia> a qualidade e a quantidade de água, o equilíbrio ecológico e um ambiente adequado para o desenvolvimento das aldeias.
      </Paragraph>
      <Paragraph>
        Outro caso emblemático denunciado pelas comunidades ocorre na província de Zamora Chinchipe, no Equador. É um megaprojeto de mineração a céu aberto, Mirador. Uma análise produzida em colaboração com a Amazon Conservation Team, Amazon Watch, Amazon Conservation e Ecociência  <ExternalLink href="https://maaproject.org/mirador/" language="es">demonstrou através de imagens de satélite o impacto do desmatamento entre 2009 e final de 2017, uma área de 1 307 hectares.</ExternalLink>
      </Paragraph>
      <Paragraph>
        Neste caso, os danos à mineração estão relacionados a concessões. Há uma sobreposição de mineração ilegal em lugares com concessões legais de mineração. Em maio de 2018, o Ministério do Meio Ambiente suspendeu 40% das obras em Mirador devido a violações ambientais.
      </Paragraph>
      <Paragraph>
        Conhecido por sua oposição à mineração, <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "Salvador Quishpe, em foto de junho de 2015, da agência Andes",
            src: require("photos/chapter4/24_AgenciaAndes_SalvadorQuishpe.jpg")
          }
        }}>Salvador Quishpe, prefeito de Zamora Chinchipe,</StoryMedia> observa que os atores da mineração ilegal "parecem combinar a mineração e outras atividades ilegais com lavagem de dinheiro. Isso também é acompanhado por atos criminosos, isto é, perseguindo pessoas que falam no sentido de não concordar com a destruição da natureza .”
      </Paragraph>
      <Paragraph>
        Quishpe aponta que “o problema é que nunca existiu planejamento, e concessões mineiras foram dadas em qualquer lugar. As pessoas da área também começaram a buscar ouro. Por isso o maior problema é a falta de determinação de que área e para quê.”<br />
        Em sua opinião, para as comunidades, os mais relevantes são os problemas ambientais. "Nós não temos um grande problema enquanto a mineração é feita dentro de uma zona. Se a mineração é legal ou ilegal não é a questão, porque para efeitos de contaminação nós não vemos qualquer diferença, os efeitos da poluição são os mesmos."
      </Paragraph>
      <Quote author="Salvador Quishpe, prefeito de zona afetada no Equador">
        Se a mineração é legal ou ilegal não é a questão, porque para efeitos de contaminação nós não vemos qualquer diferença, os efeitos da poluição são os mesmos
      </Quote>
      <Paragraph>
        Em relação à mineração ilegal, Quishpe dá ênfase especial ao <StoryMedia
        media={{
          id: "image-2",
          type: "image",
          data: {
            credits: "",
            src: require("photos/chapter4/26_Chinapintza_ImgSateliteSentinel2B_20181024.jpg")
          }
        }}>setor Chinapintza (província de Zamora Chinchipe):</StoryMedia> "outro exemplo de mineração ilegal poderia ser Chinapintza, que também está dentro de uma área designada para mineração de acordo com nosso planejamento provincial. É ilegal, as pessoas não têm os títulos, outros têm, outros não têm, a maioria não tem, mas a contaminação é a mesma."
      </Paragraph>
      <Paragraph>
        No Equador, em virtude da reforma da Lei de Minas em 2009, e de acordo com o tamanho da exploração, a mineração é dividida em mineração artesanal, pequena mineração, mineração média e mineração em grande escala, e é realizada sob duas modalidades: mineração de metálica e mineração de não metálico. A mineração que vem se desenvolvendo no Equador responde a atividades artesanais e de pequena escala, principalmente na região sul.
      </Paragraph>
      <Paragraph>
        Também na Bolívia e Peru, recentes leis de mineração tornaram a divisão entre mineração ilegal e legal bastante confusa. A aprovação da <FileLink
          href={require("documents/chapter4/Ley535_de_mineria_y_metalurgia-2014.pdf")}
          format="pdf"
          size="680KB"
        >Lei de Minas e Metalurgia nº 535</FileLink> desagradou os líderes indígenas da Bolívia. A principal queixa é a falta de consulta prévia dos povos indígenas. Na prática, a consulta não é mais obrigatória.
      </Paragraph>
      <Paragraph>
        "A lei fortalece a política de expansão da mineração nas Tierras Bajas e reforça a posição das áreas de mineração em terras indígenas, parques naturais e áreas de elevado valor natural", diz <FileLink
          href={require("documents/chapter4/RESOLUCION-CUMBRE-LEY-MINERA.pdf")}
          format="pdf"
          size="3.7MB"
        >resolução aprovada pelos movimentos indígenas em 05 de junho de 2014</FileLink> na Confederação dos Povos Indígenas da Bolívia.
      </Paragraph>
    </Container>
  </article>
);
