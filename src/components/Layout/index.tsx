import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from '../Header';

type Props = {
  children?: JSX.Element | JSX.Element[];
  path: string;
  title: string;
};

const ContentWrapper = styled.div`
  margin: 0 auto;

  width: ${props => props.theme.inner.desktop};
  @media ${props => props.theme.device.tablet} {
    width: ${props => props.theme.inner.tablet};
  }

  @media ${props => props.theme.device.mobile} {
    width: ${props => props.theme.inner.mobile};
  }
`;

const Layout = ({ children, path, title }: Props) => (
  <>
    <ThemeProvider theme={theme}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <GlobalStyle />
      <Header path={path} />
      <ContentWrapper>{children}</ContentWrapper>
    </ThemeProvider>
  </>
);

export default Layout;
