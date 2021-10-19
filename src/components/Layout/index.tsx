import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from '../Header';
import SEO from '../SEO';

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

type Props = {
  children?: JSX.Element | JSX.Element[];
  path: string;
  title: string;
  description?: string;
  image?: string;
};

const Layout = ({ children, path, title, description, image }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <SEO title={title} description={description} image={image} />
        <GlobalStyle />
        <Header path={path} />
        <ContentWrapper>{children}</ContentWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
