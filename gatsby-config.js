/**
 * Configure your Gatsby site with this file
 * - Configure site metadata, plugins, etc.
 *
 * Gatsby plugins are NPM packages that implement Gatsby APIs
 * - Gatsby plugins integrate w/ core API for convenience
 * - see individual plugin docs
 *
 * This is a special file that Gatsby looks for
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    author: 'Stanley Xu',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              icon: false,
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography', // lib requires a config file
      },
    },
  ],
}
