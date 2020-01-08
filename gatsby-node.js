/**
 * Implement Gatsby/custom Node APIs used in the bootstrap sequence
 * - These API must be `export`ed from this file
 * - Implementation comes from Gatsby plugins or yourself (in this file)
 * - See https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/#bootstrap-sequence
 * 
 * Note: Gatsby plugins also implement these API and provide nodes for the default GraphQL data layer
 * - Custom API that returns other data can be made available *both*:
 *  1. To GraphQL as arguments
 *  2. To the React component as `this.props.pageContext`
 */

const paths = require('path')
const { createFilePath } = require('gatsby-source-filesystem') // handy fn for determining slug

// Callback for source node creation--create more nodes or fields for nodes
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

// Calls `createPage` to build pages using: a path, component/template, and context
exports.createPages = async ({ graphql, actions }) => {
  const slugResults = await graphql(`
    {
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

  // `context` is an object passed into the page as GraphQL args and as `pageContext`
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
