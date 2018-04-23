import styled from 'react-emotion';
import tags from './tags';
import blogposts from './blogposts';
import mainpost from './mainpost';
import sidebar from './sidebar';
import emailcapturehomepage from './email-capture-home';

export const Box = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 3.5rem auto 3.5rem auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Tags = tags;
export const BlogPosts = blogposts;
export const SideBar = sidebar;
export const EmailCaptureHomePage = emailcapturehomepage;
export const MainPost = mainpost;
