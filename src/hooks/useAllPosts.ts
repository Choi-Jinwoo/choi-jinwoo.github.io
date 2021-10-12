import { graphql, useStaticQuery } from 'gatsby';

export type Post = {
  id: string;
  body: string;
  frontmatter: {
    date: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
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
          body
          frontmatter {
            date(formatString: "YYYY.MM.DD.")
            title
            description
            tags
            thumbnail
          }
        }
      }
    }
  `);

  return data.allMdx.nodes;
};

export default useAllPosts;
