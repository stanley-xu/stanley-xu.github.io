import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/FocusedLayout'
import { SplitPane } from '../components/SplitPane'
import { TableOfContents } from '../components/TableOfContents'

export const query = graphql`
  query markdownContent($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      fields {
        rootDir
        mdType
      }
      tableOfContents
      body
    }
  }
`

export default ({ data }) => {
  const { frontmatter, fields, tableOfContents, body } = data.mdx
  const title = frontmatter.title ?? ''
  const prevLink = fields.rootDir ?? '/'

  const contentMarkup = (
    <Layout prevLink={prevLink}>
      <h1>{title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )

  const sidebarMarkup =
    fields.mdType === 'notes' ? (
      <TableOfContents toc={tableOfContents} />
    ) : (
      undefined
    )

  return (
    <>
      {sidebarMarkup ? (
        <SplitPane left={sidebarMarkup} right={contentMarkup} />
      ) : (
        contentMarkup
      )}
    </>
  )
}
