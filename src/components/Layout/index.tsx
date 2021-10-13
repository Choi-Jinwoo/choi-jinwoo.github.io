import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from '../Header';

type Props = {
  children?: JSX.Element | JSX.Element[];
  path: string;
};

const ContentWrapper = styled.div`
  margin: 0 auto;
  width: ${props => props.theme.inner.desktop};
`;

const Layout = ({ children, path }: Props) => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header path={path} />
      <ContentWrapper>{children}</ContentWrapper>
    </ThemeProvider>
  </>
);

export default Layout;
