import React from 'react'
import { graphql } from 'gatsby'
import { Layout } from '../components/FocusedLayout'
import { SplitPane } from '../components/SplitPane'

export const query = graphql`
  query markdownContent($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        rootDir
        mdType
      }
      tableOfContents
      html
    }
  }
`

export default ({ data }) => {
  const { frontmatter, html, fields, tableOfContents } = data.markdownRemark
  const title = frontmatter.title ?? ''
  const prevLink = fields.rootDir ?? '/'

  const content = (
    <Layout prevLink={prevLink}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )

  switch (fields.mdType) {
    case 'note':
      return <SplitPane left={tableOfContents} right={content} />
    default:
      return content
  }
}
