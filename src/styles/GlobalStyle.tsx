import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap');
  @import url('https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css');

  * {
    margin: 0;
    padding: 0;
    font-weight: normal;
    list-style: none;
  }

  * { font-family: 'Spoqa Han Sans Neo', 'sans-serif'; }

  body {
    line-height: normal;
    color: ${props => props.theme.colors.black};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.colors.black};

    &:visited {
      color: inherit;
    }
  }

  html {
    @media ${props => props.theme.device.tablet} {
      font-size: 14px;
    }

    @media ${props => props.theme.device.mobile} {
      font-size: 12px;
    }
  }
`;

export default GlobalStyle;
