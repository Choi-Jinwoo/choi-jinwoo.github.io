import { graphql, useStaticQuery } from 'gatsby';

type SiteMetaData = {
  site: {
    siteMetadata: {
      title: string;
      author: {
        name: string;
        email: string;
        github: string;
      };
      description: string;
      siteUrl: string;
    };
  };
};

const useSiteMetaData = () => {
  const data = useStaticQuery<SiteMetaData>(graphql`
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
