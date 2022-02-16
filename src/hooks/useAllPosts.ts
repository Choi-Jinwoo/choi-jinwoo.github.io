import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImageFluidProps } from 'gatsby-image';

export type Post = {
  id: string;
  slug: string;
  frontmatter: {
    date: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail?: {
      childImageSharp: GatsbyImageFluidProps;
    };
  };
};

type AllPosts = {
  allMdx: {
    nodes: Post[];
  };
};

const useAllPosts = () => {
  const data = useStaticQuery<AllPosts>(graphql`
    query AllPosts {
      allMdx(sort: { order: DESC, fields: frontmatter___date }) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "YYYY.MM.DD.")
            title
            description
            tags
            thumbnail {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useAllPosts;
