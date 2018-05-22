import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { css } from 'emotion'
import find from 'lodash.find'
import FaRoad from 'react-icons/lib/fa/road'
import PageBody from '../components/pagebody'
import ButtonPrimary from '../components/Buttons'
import colors from '../utils/colors'
import { Flex } from '../components/Layout'
import pinsvg from './pin.svg'


const page = css`
  margin: 3.5em;
`
const mapClass = css`
  padding: 8px;
  font-size: 1.1em;
  width: 150px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: ${colors.tech47pink};
  color: ${colors.tech47date};
`;
const AnyReactComponent = ({ text }) => (
   <div className={mapClass}>
     <p> FITON SPORTS </p>
     <p> No 10, 5, Kembathalli Main Rd, Gundappa Layout, Pillaganahalli, Bengaluru, Karnataka 560083 </p>
     <p> <FaRoad /> <a href="https://www.google.com/maps/dir//no+10,+FITON+SPORTS,+5,+Kembathalli+Main+Rd,+Gundappa+Layout,+Pillaganahalli,+Bengaluru,+Karnataka+560083/@12.8554631,77.5846614,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bae6abe487376ad:0x620b9123d0cefb8a!2m2!1d77.5868501!2d12.8554631?hl=en"> Get Directions </a> </p>
   </div>
)

const input = css`
  display: block;
  box-sizing: border-box;
  padding: 10px 16px;
  width: 100%;
  outline: 0;
  border: 1px solid #ccc;
  border-radius: 0;
  background: #fff;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  color: #616161;
  line-height: 1.3333333;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  & :focus {
    border-color: ${colors.primary};
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
      0 0 8px rgba(59, 89, 152, 0.6);
  }
`;

const label = css`
  display: inline-block;
  text-align: left;
  margin-bottom: 16px;
  width: 100%;
`;

const ContactForm = () => (
  <div>
    <form
      css="max-width: 500px;"
      action="//formspree.io/jaikant@gmail.com"
      method="POST"
    >
      <label className={label} htmlFor="name">
        <input
          className={input}
          type="text"
          placeholder="Your Name"
          name="name"
        />
      </label>
      <label className={label} htmlFor="_replyto">
        <input
          className={input}
          type="email"
          placeholder="Your Email"
          name="_replyto"
        />
      </label>
      <label className={label} htmlFor="message">
        <textarea
          className={input}
          name="message"
          rows="3"
          placeholder="Your Message"
        />
      </label>
      <input
        type="hidden"
        name="_subject"
        value="Message via http://fiton.com"
      />
      <ButtonPrimary css="margin-bottom: 32px;" type="submit">
        Submit
      </ButtonPrimary>
    </form>
  </div>
);

const contactClass = css`
  min-height: 600px;
  padding: 0 1em;
  margin: 2em auto;
  @media (min-width: 40em) {
    padding: 0 8em;
    min-height: 800px;
  }
  .left {
    @media (min-width: 40em) {
      float: left;
      width: 70%;
      padding: 0em 2em 0em 0em;
      border-right: .05em dotted ${colors.gray.calm};
    }
  }
  .right {
    @media (min-width: 40em) {
      float: right;
      padding: 0em 0em 0em 2em;
      width: 30%;
    }
  }
`;

function createMapOptions(maps) {
  // next props are exposed at maps
  // "Animation", "ControlPosition", "MapTypeControlStyle", "MapTypeId",
  // "NavigationControlStyle", "ScaleControlStyle", "StrokePosition", "SymbolPath", "ZoomControlStyle",
  // "DirectionsStatus", "DirectionsTravelMode", "DirectionsUnitSystem", "DistanceMatrixStatus",
  // "DistanceMatrixElementStatus", "ElevationStatus", "GeocoderLocationType", "GeocoderStatus", "KmlLayerStatus",
  // "MaxZoomStatus", "StreetViewStatus", "TransitMode", "TransitRoutePreference", "TravelMode", "UnitSystem"
  return {
    zoomControlOptions: {
      position: maps.ControlPosition.RIGHT_CENTER,
      style: maps.ZoomControlStyle.SMALL
    },
    mapTypeControlOptions: {
      position: maps.ControlPosition.TOP_RIGHT
    },
    mapTypeControl: true,
    styles: [{
      "featureType": "all",
      "elementType": "labels",
      "stylers": [{
        "visibility": "#on"
      }]
    }]
  };
}


class SimpleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 14
  };

  constructor(props) {
    super(props)
    this.state={};
  }

  onGoogleApiLoaded = ({map, maps}) => {
    this.map = map;
    this.maps = maps;
    this.infowindow = new maps.InfoWindow();
    const address = {lat: 12.8554631, lng: 77.5846614};
    this.renderMarkers()
  }

  renderMarkers = () => {
    const marker = new this.maps.Marker({
      position: {lat: 12.8554631, lng: 77.5846614},
      map: this.map,
      title: 'FITON SPORTS'
    });

    marker.addListener('click', () => {
      this.infowindow.setContent('FITON SPORTS');
      this.infowindow.open(this.map, marker);
    });
  }


  render() {
    const post = find(
      this.props.data.allContentfulPages.edges,
      ({ node }) => node.slug === "contact-us"
    );


    const { html } = post.node.description.childMarkdownRemark;
    const location = {lat: post.node.location.lat, lng: post.node.location.lon}

    return (
      <div>
        <div style={{ height: '50vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyA8Lbj9YiR00dgZPxYkjR826jmj0poa-FE', libraries: 'places'}}
            onGoogleApiLoaded={this.onGoogleApiLoaded}
            defaultCenter={location}
            options={createMapOptions}
            defaultZoom={this.props.zoom}
            layerTypes={['TrafficLayer']}
          >
            <AnyReactComponent
              lat={12.8646}
              lng={77.57}
              text='FITON SPORTS'
            />
          </GoogleMapReact>
        </div>
        <div className={contactClass}>
          <div className="left">
            <PageBody
              html={html}
              width={true}
            />
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export const contentfulContactQuery = graphql`
  query ContentfulContactByPath {
    allContentfulPages {
      edges {
        node {
          title
          slug
          description {
            childMarkdownRemark {
                html
                timeToRead
            }
          }
          location {
            lon
            lat
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


export default SimpleMap;
