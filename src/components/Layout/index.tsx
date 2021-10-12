import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from '../Header';

type Props = {
  children?: JSX.Element | JSX.Element[];
  path: string;
};

const Layout = ({ children, path }: Props) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header path={path} />
      {children}
    </ThemeProvider>
  </>
);

export default Layout;
