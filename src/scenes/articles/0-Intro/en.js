import React from "react";
import { Helmet } from "react-helmet";
import Container from "components/blocks/Container";
import StoryMedia from "components/StoryMedia";
import ExternalLink from "components/ExternalLink";
import FileLink from "components/FileLink";
import Paragraph from "components/blocks/Paragraph";
import FullBlock from "components/blocks/Full";
import ImageBlock from "components/blocks/Image";
import Title from "components/blocks/Title";
import Quote from "components/blocks/Quote";
import FeaturedText from "components/blocks/FeaturedText";
import Note from "components/blocks/Note";
import EndChapter from "components/blocks/EndChapter";
import Table from "components/blocks/Table";

export default () => (
  <article>

        <StoryMedia
        icon="map"
        media={{
        id: "map_01",
        type: "mapbox",
          data: {
            map: "map1",
            legend:"legend1",
            update: "map1_1",
            showExtraLayers: [],
            coordinates: [-62.798552,-7.736987],
            zoomNumber: 4,
            zoomMin: 3,
            zoomMax: 10
          }
        }}></StoryMedia>
      
  </article>
);
