import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import find from "lodash.find"
import Helmet from 'react-helmet'
import styled, { css } from 'react-emotion';
import Hero from '../components/Layout/hero'
import media from '../utils/media'
import colors from '../utils/colors';

const postClass = css`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const postCover = css`
  width: 100%;
  margin: 0 0 -50px 0;
  @media (min-width: 40em) {
    margin: 0 0 -10vh 0;
  }
  div { max-height: 750px; }
`;

const postInfo = css`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: calc(100% - 2em);
  max-width: 1000px;
  padding: 2em;
  margin: 0 1em;
  background: white;
  position: relative;
  @media (min-width: 40em) {
    padding: 3em 2em;
    margin: 0 2em;
    width: calc(100% - 4em);
  }
`;


const postImages = css`
  width: 100%;
  max-width: 1000px;
  padding: 0 1em;
  margin: 0 auto 2em;
  list-style: none;
  @media (min-width: 40em) {
    padding: 0 2em;
  }
  .gatsby-image-outer-wrapper {
    margin: 0 0 1em 0;
  }
  li {
    clear: right;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  .left {
    @media (min-width: 40em) {
      float: left;
      width: 50%;
      border-right: .5em solid white;
    }
  }
  .right {
    @media (min-width: 40em) {
      float: right;
      width: 50%;
      border-left: .5em solid white;
    }
  }
`;


const postInfoleft = css`
  margin: 0 0 1em 0;
  width: 100%;
  @media (min-width: 40em) {
    margin: 0;
    flex: 0 1 33%;
  }
`;

const postInforight = css`
  width: 100%;
  @media (min-width: 40em) {
    flex: 0 1 65%;
  }
`

const postInfoTitle = css`
  font-size: 2em;
  font-weight: bold;
  line-height: 1.1;
  margin: 0 0 .5em 0;
  position: relative;
  z-index: 2;
  text-transform: capitalize;
`;


const postCategory = css`
  display: inline-block;
  text-transform: capitalize;
  margin: 0 0 1em 0;
  border-bottom: 1px solid #000;
  padding-bottom: 3px;
  :hover {
    border-bottom: 1px solid ${colors.tech47hover};
  }
`

const postLocation = css`
  margin: 0 0 1em 0;
`;

const postNext = css`
  margin: 0 0 1em 0;
`;

const postPrevious = css`
  margin: 0 1em 1em 0;
  line-height: 1.5;
`;


const PostTemplate = ({data}) => {

  const {
    title,
    id,
    category,
    slug,
    description,
    cover,
    images
  } = data.contentfulGallery;

  const postIndex = find(
    data.allContentfulGallery.edges,
    ({ node: post }) => post.id === id
  );

  return(
  <div>
    <div className={postClass}>
      <div className={postCover}>
        <Hero
          title={category}
          image={cover}
          height='75vh'
        />
      </div>
      <div className={postInfo}>
        <div className={postInfoleft}>
          <h2 className={postInfoTitle}>{title}</h2>
          <div>
            <h4 className={postCategory}><Link to={`/${category}/`}>More Details</Link></h4>
          </div>
          {postIndex.previous && (<Link className={postPrevious} to={`/${postIndex.previous.slug}/`}>Previous</Link>)}
          {postIndex.next && (<Link className={postNext} to={`/${postIndex.next.slug}/`}>Next</Link>)}
        </div>
        <div className={postInforight}>
          <div className="post-description" dangerouslySetInnerHTML={{ __html: description.childMarkdownRemark.html }} />
        </div>
      </div>
      <ul className={postImages}>
        {images && (
          images.map((image, index) => (
            <li>
              <Img sizes={image.sizes} alt={image.title} title={image.title} outerWrapperClassName={image.description} backgroundColor="#f1f1f1" />
            </li>
          ))
        )}
      </ul>
    </div>
  </div>

  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulGallery(slug: {eq: $slug}) {
      title
      id
      slug
      category
      description {
        internal {
          content
        }
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
      images {
        title
        description
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_withWebp_noBase64
        }
      }
    }
    allContentfulGallery(limit: 1000)  {
        edges {
          node {
            id
          }
          previous {
            slug
            title
          }
          next {
            slug
            title
            cover {
              sizes(maxWidth: 1800) {
                ...GatsbyContentfulSizes_withWebp_noBase64
              }
            }
          }
        }
      }
  }
`

export default PostTemplate
