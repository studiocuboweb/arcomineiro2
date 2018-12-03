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
      <title>Mercúrio | Amazônia saqueada</title>
    </Helmet>
    <Container>
      <Title as="h2">Mercúrio</Title>
      <Note>
        <p>
          A grande quantidade de mercúrio usada na purificação do ouro está contaminando a Amazônia. A obtenção de ouro é o principal objetivo da mineração ilegal.
        </p>
      </Note>
      <Paragraph>
      <StoryMedia
        media={{
          id: "image-1",
          type: "image",
          data: {
            credits: "",
            src: require("photos/chapter2/04_OscarMujica-FZS_PE_Colorado.jpg")
          }
        }}><strong>As cicatrizes na terra, as águas turvas dos rios</strong> são danos óbvios da mineração ilegal.</StoryMedia> Mas há um mal invisível que contamina a fauna amazônica e os habitantes da região. O mercúrio, de acordo com diferentes estudos, está afetando populações indígenas e locais que vivem perto ou trabalham em áreas de mineração de ouro, bem como aqueles que consomem peixe da Amazônia como parte de sua dieta.      
      </Paragraph>
      <Paragraph>
        Ninguém come tantos peixes em sua dieta quanto o povo da Amazônia.
        <StoryMedia
              media={{
                id: "galery-1",
                type: "gallery",
                data: {
                  credits: "01, 08, 09, 10, 13, 14 - CINCIA 04, 05, 06, 07, 15 - Natalie Szponar 11, 12 - Aldo Rivas",
                  items: [
                    {
                      src: require("photos/chapter2/gallery-1/01_CINCIA_IMG1678.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/02_DSC05788.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/03_DSC05797.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/04_NatalieSzponar_DSC06069.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/05_NatalieSzponar_DSC06131.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/06_NatalieSzponar4_DSC06137.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/07_NatalieSzponar_DSC06141.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/08_CINCIA_DSCF3067.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/09_CINCIA_IMG_0483.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/10_CINCIA_IMG_3955.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/11_AldoRivas_IMG_4152.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/12_AldoRivas_IMG_4167.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/13_CINCIA_P1000164.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/14_CINCIA_P3240166.jpg")
                    },
                    {
                      src: require("photos/chapter2/gallery-1/15_NatalieSzponar_PacoMaizal.jpg")
                    }
                  ]
                }
              }}
            > Riberinhos e povos indígenas têm sua principal fonte de proteína em espécies de água doce.</StoryMedia> Mas se o peixe garante uma dieta rica e saborosa, eles também podem conter ameaças à saúde dessas populações. Estudos mostraram o acúmulo de mercúrio acima dos níveis recomendados pela Organização Mundial de Saúde em vários peixes usados ​​para consumo humano.
      </Paragraph>
      <Paragraph>
        Este metal é biocumulativo em tecidos animais. Ou seja, a concentração de mercúrio será maior em peixes que se alimentam de peixes menores e seu efeito negativo sobre os seres humanos será ainda mais intenso.
      </Paragraph>
      <Paragraph>
        O mercúrio é usado na purificação do ouro. Os resíduos contaminam a água e o ar. Devolvido à natureza como metilmercúrio, este elemento causa um dano grave e altamente tóxico graças à acumulação permanente. O composto afeta o sistema nervoso central, causando problemas de perda de visão, de ordem cognitiva e motora, doença cardíaca e outras deficiências. Gestantes e crianças são as populações mais vulneráveis.
      </Paragraph>
      <Paragraph>
        No Peru, resultados preliminares de um estudo realizado pelo Centro de Inovação Científica Amazônica (CINCIA)revelam que os <FileLink
          href={require("documents/chapter2/CINCIA-Research-Brief-2-v7.2-Mercurio-en-peces-de-pozas-mineras.pdf")}
          format="pdf"
          size="1.7MB"
        >níveis de mercúrio em peixes são 43% maiores em poços abandonados pela mineração de ouro</FileLink> do que em áreas onde não há garimpo. <StoryMedia
        media={{
          id: "galery-1",
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
        }}>Amostras de peixes foram coletadas</StoryMedia> em sete lagoas localizadas nas áreas de mineração abandonadas em Laberinto, Tambopata, Madre de Dios e Inambari. Além disso, amostras de peixes foram coletadas em dois lagos ou lagoas marginais e um rio dentro do Parque Nacional de Manu, como uma área de referência onde não há presença de atividade de mineração. 
      </Paragraph>
      <Paragraph>
        Na Venezuela, a pedido da Organização Indígena do Caura Kuyujani, em 2010, foi realizado um <FileLink
          href={require("documents/chapter2/Informe_riesgo_exp_metilmercurio_Caura.pdf")}
          format="pdf"
          size="1.4MB"
        >estudo para determinar o teor de mercúrio em algumas das principais espécies de peixes consumidas pelas comunidades na bacias do alto Caura.</FileLink> Todas as amostras apresentaram valores médios mais elevados do que o valor de 0,5 mg / kg, conforme permitido pela Organização Mundial da Saúde. Este é considerado um limite de segurança para usuários ocasionais, mas não para consumidores de alta frequência como as populações indígenas.
      </Paragraph>
      <Paragraph>
        O mesmo aconteceu no rio Orinoco, em sua rota pelo estado do Amazonas, na fronteira com a Colômbia, onde os pesquisadores Carlos Lasso e Luis Pérez, já em 2003, descobriram que <FileLink
          href={require("documents/chapter2/2006_Lasso_et_al_Peces_Ventuari_Venezuela_114p.pdf")}
          format="pdf"
          size="11.8MB"
        >nove das 17 espécies de consumo local habitual apresentavam valores de mercúrio superiores aos indicados pela OMS como o máximo permitido.</FileLink> Consequentemente, membros de Ye'kwana das regiões do Caura, Bolívar e Uwottüja, do Orinoco e estado do Amazonas, apresentaram, entre 2009 e 2010, altas concentrações de mercúrio no cabelo. Esta situação se repete nos peixes dos rios Paragua e Caroní, segundo as investigações de 2009. Desta forma, todos os grandes rios da Amazônia venezuelana possuem peixes com altos níveis de mercúrio antes mesmo do <i>boom</i> massivo da extração de ouro.
      </Paragraph>
      <Paragraph>
        Uma das regiões mais afetadas da Amazônia é o <StoryMedia
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
        }}>território Yanomami, que se estende entre o Brasil e a Venezuela.</StoryMedia> Há <FileLink
        href={require("documents/chapter2/diagnostico_contaminacao_mercurio_terra_indigena_yanomami.pdf")}
        format="pdf"
        size="1.4MB">um estudo realizado pelo Instituto Socioambiental (ISA), em parceria com a Fundação Oswaldo Cruz (Fiocruz)</FileLink>, onde foram coletadas 239 amostras de cabelo em nove aldeias em novembro de 2014. A  prioridade foi dada aos grupos mais vulneráveis à contaminação: crianças, mulheres em idade reprodutiva e adultos com alguma história de contato direto com a atividade de extração de ouro. Também foram coletadas 35 amostras de peixes que são parte fundamental da dieta alimentar das comunidades. O estudo foi realizado nas regiões de Papiú e Waikás, onde residem os grupos étnicos Yanomami e Ye'kwana.
      </Paragraph>
      <Paragraph>
        "O caso mais preocupante era o da comunidade Yanomami de Aracaçá, na região de Waikás, onde 92% de todas as amostras apresentaram níveis elevados de contaminação. Esta comunidade, entre todas as participantes, era a única com a presença de garimpos. Na região de Papiú, onde foram registradas as menores taxas de contaminação - 6,7% das amostras analisadas - a presença de garimpeira é menos acentuada ", disse um resumo dos <StoryMedia
              media={{
              id: "video-1",
              type: "youtube",
              data: {
                id: "XWF1MKP7pwY"
              }
              }}>resultados publicado pelo ISA.</StoryMedia>
      </Paragraph>
      <Paragraph>
        Na Colômbia, grande parte da atividade de mineração ocorre em áreas de fronteira. Isso significa que as bacias compartilhadas se tornam as principais rotas de contaminação por mercúrio. A área mais afetada é ao longo do rio Caquetá. Um estudo do Instituto Nacional de Saúde da Colômbia sobre o rio Apaporis revela que até 80% das populações indígenas dessa região estão contaminadas por mercúrio.
      </Paragraph>
      <Paragraph>
        Na Bolívia, os dados do Centro de Documentación e Información Bolivia (CEDIB) <ExternalLink href="https://cedib.org/post_type_mapas/contaminacion-por-mercurio-en-la-amazonia-de-bolivia/" language="es">mostram que em 2015 as importações totais do produto químico alcançaram 35,793 quilos, 20 vezes mais do que 1.710 quilos registradas em 2010.</ExternalLink> O livro "Mercúrio na Bolívia: Linha de Base de usos, emissões e poluição "- apresentado pelos Ministérios das Relações Exteriores e do Meio Ambiente em 2016 - afirma que com 133 toneladas de mercúrio liberadas por ano, a Bolívia é o terceiro país das Américas em contaminação, 47% vem da exploração de ouro.
      </Paragraph>
      <EndChapter>
        <strong className='regular-title'>Convenção de Minamata</strong>
        <p className='regular-txt'>
          A grave situação de contaminação por este mercúrio metálico em vários países levou à criação, pelas Nações Unidas, da <ExternalLink href="https://treaties.un.org/Pages/ViewDetails.aspx?src=IND&mtdsg_no=XXVII-17&chapter=27&clang=_en" language="en">Convenção de Minamata, em memória do desastre humano e ambiental que ocorreu na área costeira de Minamata</ExternalLink>, Japão, causada pelo consumo de peixe com altos níveis de mercúrio. O acordo entre 101 membros prevê maior controle sobre a importação, comercialização e descarte de mercúrio.  
        </p>
        <p className='regular-txt'>
          Para <ExternalLink href="https://www.paginasiete.bo/sociedad/2018/9/23/importacion-de-mercurio-crecio-20-veces-194729.html" language="es">os países amazônicos que assinaram a convenção em 2013, o acordo entrou em vigor em 2017 ao superar o ponto de corte de 50 ratificações.</ExternalLink> Com exceção da Colômbia e da Venezuela, todos os outros países com território no bioma - incluindo a França - já assinaram e ratificaram a Convenção de Minamata. Além disso, todos os países do bioma estão realizando projetos de acordo com a convenção. 
        </p>
        <p className='regular-txt'>
          Apesar de ainda não terem ratificado, Colômbia e a Venezuela também avançam promovendo projetos para determinar a capacidade institucional, reguladora, técnica e comercial do país, em conformidade com as obrigações da Convenção.  A Colômbia tem uma estratégia ambiciosa para eliminar o descarte irregular de mercúrio, que está incluído no plano do governo, lançado em novembro de 2018 e em vigor até 2023.
        </p>
      </EndChapter>
    </Container>
  </article>
);
