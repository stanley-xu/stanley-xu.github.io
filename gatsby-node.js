/**
 * Implement Gatsby backend APIs here
 */

const paths = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    const { createNodeField } = actions;
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const slugResults = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }  
  `)

  const { createPage } = actions;
  slugResults.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: paths.resolve(`./src/templates/blog-post.js`),
      context: {
        slug: node.fields.slug
      }
    })
  });
}
