const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
    createPage({
      path: `post/${node.slug}`,
      component: path.resolve(`./src/components/PostTemplate/index.tsx`),
      context: { slug: node.slug },
    });
  });
};
