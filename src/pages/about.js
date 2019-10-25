import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <div>
      <h1>About me: {data.site.siteMetadata.author}</h1>
      <p>Under construction!</p>
      <h1>I'd love to talk!</h1>
      <p>
        <a href="mailto:tqsxu@uwaterloo.ca">tqsxu@uwaterloo.ca</a>
      </p>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`
