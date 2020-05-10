module.exports = {
  siteMetadata: {},
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          // {
          //   resolve: `gatsby-remark-vscode`,
          //   options: {
          //           theme: "Atom One Dark",
          //           extensions: ["vscode-theme-onedark"],
          //         },
          // },
        ],
      },
    },
  ],
}
