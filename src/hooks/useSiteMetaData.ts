import { graphql, useStaticQuery } from 'gatsby';

type SiteMetaData = {
  title: string;
  author: {
    name: string;
    email: string;
    github: string;
  };
  description: string;
  siteUrl: string;
};

const useSiteMetaData = (): SiteMetaData => {
  const data = useStaticQuery(graphql`
    query SiteMetaDataQuery {
      site {
        siteMetadata {
          title
          author {
            name
            email
            github
          }
          description
          siteUrl
        }
      }
    }
  `);

  return data.site.siteMetadata;
};

export default useSiteMetaData;
