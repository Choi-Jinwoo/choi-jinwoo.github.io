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

    &:visited {
      color: inherit;
    }
  }
`;

export default GlobalStyle;
