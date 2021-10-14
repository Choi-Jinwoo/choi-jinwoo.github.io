module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `꼬꼬마 블로그`,
    author: {
      name: `최진우`,
      email: `dev.chlwlsdn0828@gmail.com`,
      github: `https://github.com/Choi-Jinwoo`,
    },
    description: `꼬꼬마의 기술 블로그`,
    siteUrl: `https://wlswooblog.gatsbyjs.io`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-mdx`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `꼬꼬마 블로그`,
        short_name: `wlswoo blog`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
};
