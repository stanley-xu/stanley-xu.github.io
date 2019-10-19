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
    title: "Stanley Xu",
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography', // lib requires a config file
      },
    },
  ],
}
