/* eslint-disable no-undef, react/prop-types, react/no-danger */
import React from 'react';
import styled, { css } from 'react-emotion';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import FacebookProvider, { Comments } from 'react-facebook';
import { rhythm, scale } from '../utils/typography';
import { Box, Tags } from '../components/Layout';
import colors from '../utils/colors';
import presets from '../utils/presets';
import feather from '../utils/feather';
import EmailCaptureForm from "../components/Layout/email-capture-form"
import Helmet from '../components/helmet'
import PageBody from '../components/pagebody'
import Hero from '../components/Layout/hero'

const SportsPage = ({ data, location, pathContext }) => {
  const { node: post } = data.allContentfulSportsPage.edges[0];
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
      <div css="padding-bottom: 16px; margin-bottom: 16px;" />
      <div css="display: flex; justify-content: center; padding: 0px 32px;">
        <div css="width: 100%">
          <FacebookProvider appId="975479032610796">
            <Comments href={`https://fiton.com${location.pathname}`} width="100%" />
          </FacebookProvider>
        </div>
      </div>
    </div>
  );
};

export const contentfulSportQuery = graphql`
  query ContentfulSportByPath($slug: String!) {
    allContentfulSportsPage(filter: { slug: { eq: $slug } }) {
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
