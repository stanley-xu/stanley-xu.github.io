/**
 * Implement Gatsby/custom Node APIs used in the bootstrap sequence
 * - These API must be `export`ed from this file
 * - Implementation comes from Gatsby plugins or yourself (in this file)
 * - See https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/#bootstrap-sequence
 *
 * Note: Gatsby plugins also implement these API and provide nodes for the default GraphQL data layer
 * - Custom API that returns other data can be made available *both*:
 *   1. To GraphQL as arguments
 *   2. To the React component as `this.props.pageContext`
 */

const paths = require('path')
const { createFilePath } = require('gatsby-source-filesystem') // handy fn for determining slug

function createMarkdownNodes(node, getNode, { createNodeField }) {
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode })
    const slugParts = slug.split('/')
    const rootDir = slugParts
      .slice(0, 2) // first 2 items are ' ' and '<root dir>'
      .join('/')
    const mdType = rootDir.slice(1) // trim leading '/'

    let fieldArgs = [
      { node, name: `slug`, value: slug },
      { node, name: `rootDir`, value: rootDir },
      { node, name: `mdType`, value: mdType },
    ]

    if (mdType === 'notes' && slugParts.length >= 3) {
      const mdSubType = slugParts[2]
      fieldArgs.push({ node, name: `mdSubType`, value: mdSubType })
    }

    fieldArgs.forEach(arg => createNodeField(arg))
  }
}

// Callback for source node creation--create more nodes or fields for nodes
exports.onCreateNode = ({ node, getNode, actions }) => {
  createMarkdownNodes(node, getNode, actions)
}

async function createMarkdownPages(graphql, { createPage }) {
  const results = await graphql(`
    query allMarkdownSlugs {
      allMdx {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)

  // `context` is an object passed into the page as GraphQL args and as `pageContext`
  results.data.allMdx.nodes.forEach(({ fields: { slug } }) => {
    createPage({
      path: slug,
      component: paths.resolve(`./src/templates/Post.js`),
      context: {
        slug,
      },
    })
  })
}

// Calls `createPage` to build pages using: a path, component/template, and context
exports.createPages = async ({ graphql, actions }) => {
  createMarkdownPages(graphql, actions)
}
