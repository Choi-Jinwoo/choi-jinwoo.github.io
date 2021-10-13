import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

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
