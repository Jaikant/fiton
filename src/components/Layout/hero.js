import React from 'react'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import styled, { css } from 'react-emotion'
import media from '../../utils/media'

const Wrapper = styled.section`
  position: relative;
  margin: 0;
`
const BgImg = styled(Img)`
  position: absolute;
  margin-top: 0px;
  top: 0;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: -1;
  height: ${props => props.height || 'auto'};

  @media (min-width: 35em) {
    min-height: 300px;
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 0%'} !important;
  }
  &:before {
    content: '';
    background: rgba(0,0,0,0);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
  line-height: 1.5em;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  font-weight: 600;
  position: absolute;
  width: 90%;
  max-width: 650px;
  padding: 0 1rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-align: center;

  ${media.desktop`
    font-size: 3em;
    line-height: 2.5em;
  `};
`;

const Line = styled.h1`
  font-size: 2em;
  font-weight: 600;
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-left: 3px solid white;
  height: 2em;

  ${media.desktop`
    font-size: 2.5em;
    width: 50%;
    border-left: 4px solid white;
    height: 3em;
    position: absolute;
  `};
`;


const Hero = (props) => (
  <Wrapper>
    <BgImg height={props.height} sizes={props.image.sizes} position={`50% ${props.position}%`} />
    { props.title && <Line /> }
    { props.title && <Title>{props.title}</Title> }
  </Wrapper>
)

Hero.propTypes = {
  height: PropTypes.string,
  image: PropTypes.shape({
    sizes: PropTypes.shape({
      aspectRatio: PropTypes.string,
      src: PropTypes.string,
      srcSet: PropTypes.string,
      sizes: PropTypes.string,
    })
  }),
  position: PropTypes.string,
  title: PropTypes.string,
};
Hero.defaultProps = {
  height: null,
  image: null,
  position: null,
  title: null,
};


export default Hero
