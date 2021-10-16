import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';
import GlobalStyle from '../../styles/GlobalStyle';
import { theme } from '../../styles/theme';
import Header from '../Header';
import useSiteMetaData from '../../hooks/useSiteMetaData';

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
  const { title: siteName, siteUrl } = useSiteMetaData();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Helmet htmlAttributes={{ lang: 'ko' }}>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="og:title" content={title} />
          <meta name="og:description" content={description} />
          <meta name="og:url" content={siteUrl} />
          <meta name="og:image" content={image} />
          <meta name="og:site_name" content={siteName} />
          <meta
            name="google-site-verification"
            content="vEvU7Ajs0Xs3jma64V2Ctvokx-e0s2q1xkofjRTUBnQ"
          />
        </Helmet>
        <GlobalStyle />
        <Header path={path} />
        <ContentWrapper>{children}</ContentWrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
