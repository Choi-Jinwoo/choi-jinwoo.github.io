import React from 'react';
import useSiteMetaData from '../../hooks/useSiteMetaData';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

type Props = {
  title: string;
  description?: string;
  image?: string;
};

const SEO = ({ title, description, image }: Props) => {
  const { title: siteName, siteUrl } = useSiteMetaData();
  const { pathname } = useLocation();

  return (
    <Helmet htmlAttributes={{ lang: 'ko' }}>
      <title>
        {title} | {siteName}
      </title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteName} />
      <meta
        name="google-site-verification"
        content="XuYZDwUE6RHYN-MpEJhfTnegOVDz8jolBYYFBZT1A1I"
      />
    </Helmet>
  );
};

export default SEO;
