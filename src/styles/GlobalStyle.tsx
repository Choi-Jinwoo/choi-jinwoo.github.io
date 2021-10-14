import { createGlobalStyle } from 'styled-components';

import './font.css';

const GlobalStyle = createGlobalStyle`
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
