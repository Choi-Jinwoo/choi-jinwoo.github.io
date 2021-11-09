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
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:url" content={`${siteUrl}${pathname}`} />
      <meta property="og:site_name" content={siteName} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      {description && <meta name="twitter:description" content={title} />}
      {image && <meta name="twitter:image" content={image} />}

      <meta
        name="google-site-verification"
        content="XuYZDwUE6RHYN-MpEJhfTnegOVDz8jolBYYFBZT1A1I"
      />
    </Helmet>
  );
};

export default SEO;
