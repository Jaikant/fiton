import React from 'react'
import styled from 'react-emotion'
import colors  from "../utils/colors"

require('prismjs/themes/prism.css')

const Body = styled.div`
  margin: 0 auto;
  max-width: ${props => props.width ? `940px` : `auto`};
  h1, h2, h3 {
    font-weight: 600;
    line-height: 1.25;
    margin: 0 0 1rem 0;
  }
  h1 {font-size: 1.5em;}
  h2 {font-size: 1.25em;}
  h3 {font-size: 1em;}
  p {
    line-height: 1.6;
    margin: 0 0 2em 0;
  }
  del {text-decoration: line-through;}
  strong {font-weight: 600;}
  em {font-style: italic;}
  ul, ol {margin: 0 0 2em 0;}
  ul {
    li {
      list-style: disc;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  ol {
    li {
      list-style: decimal;
      list-style-position: inside;
      line-height: 1.25;
      &:last-child {
        margin: 0;
      }
    }
  }
  hr {
    border-style: solid;
    border-color: ${colors.tech47pink};
    margin: 0 0 2em 0;
  }
  blockquote {
    font-style: italic;
    border-left: 4px solid ${colors.tech47pink};
    padding: 0 0 0 .5em;
    p {
      color: ${colors.tech47pink};
    }
  }
  pre {
    margin: 0 0 2em 0;
    border-radius: 2px;
    background: ${colors.tech47pink} !important;
    span {
      background: inherit !important;
    }
  }

  table, tr, td, th {
    border: 1px solid ${colors.tech47category};
  }
  thead {
    background: ${colors.tech47category};
    color: ${colors.tech47purple}
  }
  th {
  	display: flex;
  	padding: 8px;
    text-align: left;
    width: 100%;
  }
  tr {
  	display: flex;
  }
  td {
  	flex: 1 1 20%;
    padding: 8px;
  }
`

const PageBody = (props) => (
  <div>
    {
      props.html ?
      <Body
        dangerouslySetInnerHTML={{ __html: props.html }}
        width={props.width}
      /> : null
    }
  </div>
)

export default PageBody
