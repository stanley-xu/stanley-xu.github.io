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
    'gatsby-transformer-remark',
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
