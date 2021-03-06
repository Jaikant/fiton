import React from 'react';
import styled, { injectGlobal, css } from 'react-emotion';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import 'typeface-quattrocento-sans';
import 'typeface-work-sans';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import colors from '../utils/colors';
import favicon from '../assets/images/favicon.png';
import presets from "../utils/presets"
import "../css/prism.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* eslint-disable */
//import normalize from 'normalize.css';

injectGlobal`
  * {
      //font: 16px/1.5em "Source Sans Pro",Arial,sans-serif;
      box-sizing: border-box;
  };
  body {
    background-color: ${colors.tech47background};
  };
  a {
    text-decoration: none;
    color: inherit;
  };
  a:hover {
    cursor: pointer;
    text-decoration: none;
    color: ${colors.tech47hover};
    transition: color 0.15s ease-in;
  };
  h1, h2, h3, h4, h5, h6 {
    color: ${colors.secondary}
  };
`;
/* eslint-enable */
const MainDiv = styled.div`
  width: 100%;
  height: 400px;
`;

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Layout = ({ children, location, data }) => {
 return (
  <MainDiv>
    <Helmet>
      <link rel="shortcut icon" href={favicon} type="image/x-icon" />
      <link rel="icon" href={favicon} type="image/x-icon" />
    </Helmet>
    <Navigation
      title={data.site.siteMetadata.title}
      logo={data.logoImage.resize.src}
      logoWhite={data.logoWhite.resize.src}
      location={location}
    />

    <div css={css({
              minHeight: `calc(100% - 50px)`,
              [presets.Tablet]: {
                 paddingTop: (location.pathname == `/`) ? 0 : presets.headerHeight,
              },
            })}
    >
    {children()}
    </div>
    <Footer title={data.site.siteMetadata.title} />
  </MainDiv>
)};

Layout.propTypes = {
  children: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    logoImage: PropTypes.shape({
      resize: PropTypes.shape({
        src: PropTypes.string.isRequired
      }).isRequired
    }).isRequired
  }).isRequired
};

export default Layout;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    logoImage: imageSharp(id: { regex: "/Htech47/" }) {
      resize(width: 1843, height: 425, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
    logoWhite: imageSharp(id: { regex: "/fitonlogo/" }) {
      resize(width: 743, cropFocus: CENTER) {
        # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
        src
      }
    }
  }
`;
