const path = require(`path`)

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const result = await graphql(`
    query {
      allMdx {
        totalCount
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    console.log(node)
    createPage({
      path: `/posts/${node.frontmatter.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: node.id,
      },
    })
  })
}
