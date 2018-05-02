/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { rhythm, scale } from '../utils/typography';
import { Box, Tags } from '../components/Layout';
import colors from '../utils/colors';
import presets from '../utils/presets';
import feather from '../utils/feather';
import EmailCaptureForm from "../components/Layout/email-capture-form"
import Helmet from '../components/helmet'
import PageBody from '../components/pagebody'
import Hero from '../components/Layout/hero'

const SportsPage = ({ data, pathContext }) => {
  const { node: post } = data.allContentfulPages.edges[0];
  const { coverImage } = post;
  const { timeToRead, html } = post.description.childMarkdownRemark;

  const { next, prev, slug } = pathContext;

  return (
    <div>
      <Hero
        title=""
        image={coverImage}
        height='40vh'
      />
      <div css="padding: 32px 0px;">
        <PageBody
          html={html}
          width={true}
        />
      </div>
    </div>
  );
};

export const contentfulPageQuery = graphql`
  query ContentfulPagesByPath($slug: String!) {
    allContentfulPages(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          title
          description {
            childMarkdownRemark {
                html
                timeToRead
            }
          }
          coverImage {
            title
            resize(width: 1200, height: 630, cropFocus: FACES) {
              src
            }
            sizes(maxWidth: 800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`;

export default SportsPage;
