// 3rd-party imports

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// component

// copied from: https://github.com/jlengstorf/lengstorf.com/blob/b81d12d33cf346e991f5e40e4f5ae6b9f5029ace/src/components/Figure.js

const Image = ({ src, alt, ...imageProps }) => (
  <StaticQuery
    query={graphql`
      query {
        allFile(
          filter: { relativePath: { regex: "/.*.(jpg|png|gif|svg)$/" } }
        ) {
          totalCount
          edges {
            node {
              relativePath
              publicURL
              childImageSharp {
                fluid(maxWidth: 1120, quality: 100) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const images = data.allFile.edges.map(({ node }) => node);
      const { publicURL, childImageSharp: imgData } =
        images.find(img => img.relativePath.includes(src)) || {};

      if ((!imgData || !imgData.fluid) && !publicURL) {
        if (process.env.NODE_ENV === "development") {
          console.warn(`The image ${src} was not found.`);
        }

        return null;
      }

      if (imgData && imgData.fluid) {
        return <Img fluid={imgData.fluid} alt={alt} {...imageProps} />;
      }

      return <img src={publicURL} alt={alt} {...imageProps} />;
    }}
  />
);

export default Image;
