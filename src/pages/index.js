/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Box, Flex, Tags, BlogPosts, SideBar } from '../components/Layout';
import FaHeart from 'react-icons/lib/fa/heart';
import styled, { css } from 'react-emotion';
import colors from '../utils/colors';
import Helmet from '../components/helmet';
import Hero from '../components/Layout/hero'
import ConcertSection from '../components/ConcertSection'
import NewsSection from "../components/NewsSection";
import Slider from "react-slick";

/*
*/

const blogTheme = css`
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
  p {
    color: ${colors.sixth}
  };
`;

const bgColor = css`
  width: 100%;
  height: 50vh;
  background: linear-gradient(${colors.tech47blue}, ${colors.tech47purple});
`;

const settings = {
  dots: false,
  fade: true,
  infinite: true,
  speed: 2000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  cssEase: "linear",
  arrows: false,
 };


const Index = ({ data, location, pathContext }) => {
//  const { edges: posts } = data.allMarkdownRemark;
// The below objects are coming from gatsby-paginate
  const { hero, skating, pool, basketball, soccer } = data
  const { group, index, first, last, pathPrefix } = pathContext;
  const previousUrl = index - 1 == 1 ? pathPrefix : pathPrefix + "/" + (index - 1).toString();
  const nextUrl = pathPrefix + "/" + (index + 1).toString();
  return (
    <div>
      <Slider {...settings}>
        <div>
        { soccer && <Hero
          title={""}
          image={soccer}
          height={'50vh'}
          />
        }
        </div>
        <div>
        { skating && <Hero
          title={""}
          image={skating}
          height={'50vh'}
          />
        }
        </div>
        <div>
        { pool && <Hero
          title={""}
          image={pool}
          height={'50vh'}
          />
        }
        </div>
        <div>
        { basketball && <Hero
          title={""}
          image={basketball}
          height={'50vh'}
          />
        }
        </div>
      </Slider>
      <div className={blogTheme}>
        <Helmet
          title={"Tech47 - Building for India"}
          description={"Technology to power your startup."}
          image={data.imageOne ? data.imageOne.resize.src : null}
          pathname={location.pathname}
        />
      </div>
      <hr />

      <Flex css={`max-width: 1024px; margin: 0 auto; align-content: center;`}>

        <ConcertSection concerts={data.allConcertsYaml.edges} />
        <SideBar group={group} first={first} last={last} previousUrl={previousUrl} nextUrl={nextUrl}/>
      </Flex>
    </div>
  );
};

export const IndexQuery = graphql`
  query IndexQuery {
    imageOne: imageSharp(id: { regex: "/cover/" }) {
      resize(width: 1200, height: 630, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
    hero: imageSharp(id: { regex: "/fitoncover/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    soccer: imageSharp(id: { regex: "/soccer/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    basketball: imageSharp(id: { regex: "/basketball/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    skating: imageSharp(id: { regex: "/skating/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
    pool: imageSharp(id: { regex: "/pool/" }) {
      sizes(maxWidth: 1800) {
        ...GatsbyImageSharpSizes
      }
    }
  allConcertsYaml {
  edges {
    node {
      id
      type
      date
      time
      location
      locationLink
      tickets
      freeEntrance
    }
  }
}
allNewsYaml {
  edges {
    node {
      id
      date
    }
  }
}
}
`;
/* eslint-enable */

export default Index;
