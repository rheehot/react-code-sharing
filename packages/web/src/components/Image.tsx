import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `StaticQuery`: https://gatsby.dev/staticquery
 */

const renderImage: ((data: any) => React.ReactNode) | undefined = data => (
  <Img
    style={{ width: 204, height: 510 }}
    fluid={data.placeholderImage.childImageSharp.fluid}
  />
);

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "asset-img@3x.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={renderImage}
  />
);
export default Image;
