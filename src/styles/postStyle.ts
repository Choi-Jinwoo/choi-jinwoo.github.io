import { css } from 'styled-components';

const PostStyle = css`
  font-size: 1rem;

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: bold;
  }

  h1 {
    font-size: 1.625rem;
    margin: 3.5rem 0px 10px 0px;
  }

  h2 {
    font-size: 1.5rem;
    margin: 3rem 0px 8px 0px;
  }

  h3 {
    font-size: 1.375rem;
    margin: 2.5rem 0px 6px 0px;
  }

  h4 {
    font-size: 1.25rem;
    margin: 2rem 0px;
  }

  h5 {
    font-size: 1.125rem;
    margin: 1.5rem 0px 2px 0px;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
    margin: 24px 0px;
  }

  p,
  li {
    color: ${props => props.theme.colors.gray7};
  }

  blockquote {
    margin: 24px 0px;
    padding: 4px 24px;
    border-left: 5px solid ${props => props.theme.colors.gray5};
  }

  blockquote p {
    margin: 4px 0px;
    color: ${props => props.theme.colors.gray5};
  }

  code,
  pre * {
    font-size: 0.875rem;
    font-family: 'IBM Plex Mono', monospace;
  }

  pre .token-line {
    padding: 0.1rem 0px;
  }

  code:not(pre code) {
    background-color: ${props => props.theme.colors.gray0};
    padding: 4px 8px;
    margin: 0px 4px;
    border-radius: 8px;
  }

  pre {
    box-sizing: border-box;
    background-color: ${props => props.theme.colors.gray0};
    padding: 16px;
    margin: 12px 0px;
    width: 100%;
    border-radius: 8px;
    overflow: auto;
  }

  ol,
  ul {
    margin: 16px 0px;

    li {
      margin: 8px 0px;
      padding: 0px 16px;
      list-style: inside;

      &::marker {
        color: ${props => props.theme.colors.gray2};
      }
    }

    ul {
      padding-left: 16px;
      margin: 4px 0px;
    }
  }

  strong {
    font-weight: bold;
  }

  em {
    font-style: italic;
  }

  a {
    color: ${props => props.theme.colors.blue};

    &:hover {
      box-shadow: inset 0 0px 0 white,
        inset 0 -2px 0 ${props => props.theme.colors.blue};
    }

    &:visited {
      color: ${props => props.theme.colors.blue};
    }
  }

  hr {
    border: 1px solid ${props => props.theme.colors.gray2};
    margin: 8px 0px 32px 0px;
  }

  .gatsby-resp-image-wrapper {
    margin: 40px 0px;
  }

  table {
    border-collapse: collapse;
  }

  table,
  th,
  tr,
  td {
    border: 1px solid ${props => props.theme.colors.gray2};
  }

  th {
    font-weight: bold;
  }

  th,
  td {
    padding: 8px 12px;
  }

  tbody tr:nth-child(odd) {
    background-color: ${props => props.theme.colors.gray1};
  }
`;

export default PostStyle;
