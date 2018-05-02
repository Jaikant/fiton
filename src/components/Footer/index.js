import React from 'react';
import styled, { css } from 'react-emotion';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import FaMapMarker from 'react-icons/lib/fa/map-marker'
import FaPhone from 'react-icons/lib/fa/phone'
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square'
import FaInstagram from 'react-icons/lib/fa/instagram'
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square'
import colors from '../../utils/colors';
import feather from '../../utils/feather';
import media from '../../utils/media';

const newFooter = css`
  background-color: ${colors.tech47purple};
  .contain {
    display: grid;
    grid-template-columns: repeat(3, 1fr);;
    grid-gap: 1em;
    padding: 0px 32px;
    margin: 0 auto;
  }

  p {
    color: rgba(255,255,255,0.3);
    font-size: 0.8em;
    grid-column: 1 / span 3;
    margin: 0;
  }

  a:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }

  .line {
    border: 0.5px solid ${colors.tech47hover};
    grid-column: 1 / span 4;
  }

  .address {
    grid-column: 1 / span 3;
    margin: 0px 0px 32px 0px;
  }

  .copyright {
    grid-column: 4 / span 1;
    margin: 0px 0px 32px 0px;
  }

  .col {
    height: auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    padding: 0px 16px 16px 16px;
  }

  .col h1 {
    margin: 0;
    padding: 0;
    font-family: inherit;
    font-size: 12px;
    line-height: 17px;
    padding: 24px 0px 4px 0px;
    color: rgba(255,255,255,0.3);
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 0.250em;
  }

  .col ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .col ul li {
    color: #999999;
    font-size: 0.8em;
    font-family: inherit;
    font-weight: bold;
    padding: 4px 0px 4px 0px;
    cursor: pointer;
    transition: .2s;
    -webkit-transition: .2s;
    -moz-transition: .2s;
  }

  .col ul li:hover {
    color: #ffffff;
    transition: .1s;
    -webkit-transition: .1s;
    -moz-transition: .1s;
  }

  @media only screen and (max-width: 950px) {
    .col h1 {
      font-size: 14px;
    }
    .col ul li {
      font-size: 13px;
    }
  }

  @media (max-width: 700px) {
    .col {
      grid-column: 1 / span 4;
    }
    .copyright {
      grid-column: 1 / span 4;
    }
    .address {
      grid-column: 1 / span 4;
      margin: 0px 0px 0px 0px;
    }
  }

  @media only screen and (max-width: 500px) {
      .col h1 {
        font-size: 14px;
      }
      .col ul li {
        font-size: 13px;
      }
  }
`

const Footer = props => (
    <div css={newFooter}>
      <div className="contain">
        <div className="col">
          <h1>Company</h1>
          <ul>
            <li><Link to="/about"> About </Link></li>
            <li><Link to="/Contact"> Contact </Link></li>
          </ul>
        </div>
        <div className="col">
          <h1>Team Sports</h1>
          <ul>
            <li><Link to="/badminton"> Badminton </Link></li>
            <li><Link to="/football"> Football </Link></li>
            <li><Link to="/basketball"> Basketball </Link></li>
          </ul>
        </div>
        <div className="col">
          <h1>Other Sports</h1>
          <ul>
            <li><Link to="/skating"> Skating </Link></li>
            <li><Link to="/swimming"> Swimming </Link></li>
          </ul>
        </div>
        <div className="line" />
        <div className="address">
          <p> <FaMapMarker /> No 10, 5, Kembathalli Main Rd, Gundappa Layout, Pillaganahalli, Bengaluru, Karnataka 560083</p>
          <p> <FaPhone /> 086188 68841 </p>
          <a href="https://www.twitter.com"> <FaTwitterSquare css="color: white; margin: 0px 4px;" /> </a>
          <a href="https://www.facebook.com"> <FaInstagram css="color: white; margin: 0px 4px;" /> </a>
          <a href="https://www.instagram.com"> <FaFacebookSquare css="color: white; margin: 0px 4px;" /> </a>
        </div>
        <div className="copyright">
          <p> Designed by  <a href="https://tech47.in" css={`color: ${colors.tech47date};`}>{`${props.title}`}</a> </p>
        </div>
      </div>
    </div>
);

Footer.propTypes = {
  title: PropTypes.string,
};

Footer.defaultProps = {
  title: 'tech47.in',
};

export default Footer;
