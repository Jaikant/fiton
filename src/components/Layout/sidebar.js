/* eslint-disable */
import React from 'react';
import Link from 'gatsby-link';
import { Box, Flex, Tags, EmailCaptureHomePage } from '.';
import FaLongArrowRight from 'react-icons/lib/fa/long-arrow-right';
import Img from 'gatsby-image';
import styled, { css, keyframes } from 'react-emotion';
import colors from '../../utils/colors';
import media from '../../utils/media';
import ConcertSection from '../ConcertSection'

const SidebarCard = styled.div`
  background-color: ${colors.tech47white};
  position: relative;
  width: 290px;
  height: auto;
  margin: 8px 0px;
  ${media.tablet`
    margin: 8px 8px;
  `};
  ${media.desktop`
    margin: 8px 0px;
  `};
  overflow: hidden;
  text-align: left;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(226,226,226,1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(226,226,226,1);
  box-shadow: 2px 2px 5px 0px rgba(226,226,226,1);

  img,
  h4 {
    margin: auto;
  }
`;

const bodyStyle = css`
  font-size: 0.9em;
  color: ${colors.gray.calm};
`;

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
`

const imgStyle = css`
  display: flex;
  flex-direction: row;
  margin: 0;
  animation-name: ${fadeIn};
  animation-duration: 1s;
  ${media.mid`
    flex-direction: row;
  `};
  list-style: none;
`;

const StyledSpan = styled.span`
  color: ${colors.light};
  font-size: 0.65em;
`;

const SideBar = ({ data }) => {
  return (
    <div>
      <Flex css={`
              ${media.mobile`
                -ms-transform: translate(0px, 0vh);
                -webkit-transform: translate(0px, 0vh);
                transform: translate(0px, 0vh);
              `};
              ${media.tablet`
                -ms-transform: translate(0px, 0vh);
                -webkit-transform: translate(0px, 0vh);
                transform: translate(0px, 0vh);
              `};
              ${media.desktop`
                max-width: 290px;
                -ms-transform: translate(0px, 0vh);
                -webkit-transform: translate(0px, 0vh);
                transform: translate(0px, 0vh);
              `};

            `}
      >
          <SidebarCard>
            <div css="padding: 24px;">
              <ConcertSection concerts={ data }/>
            </div>
          </SidebarCard>
      </Flex>
    </div>
  );
};

export default SideBar;
