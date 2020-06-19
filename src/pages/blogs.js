import React from 'react'
import Layout from '../components/Layout'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'

export const query = graphql`
  query allMarkdownBlogs {
    allMarkdownRemark(filter: { fields: { mdType: { eq: "blogs" } } }) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMM DD")
            title
          }
          html
          timeToRead
          excerpt
        }
      }
    }
  }
`

const PostTitle = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

const PostMetadata = styled.span`
  font-size: small;
`

const Preview = ({ node }) => (
  <Link
    to={node.fields.slug}
    css={css`
      text-decoration: none;
      color: inherit;
    `}
  >
    <PostTitle>
      {node.frontmatter.title}{' '}
      <PostMetadata>
        &mdash; {node.frontmatter.date} &middot; {node.timeToRead} min read
      </PostMetadata>
    </PostTitle>

    <p>{node.excerpt}</p>
  </Link>
)

export default ({ data }) => {
  const { totalCount, edges } = data.allMarkdownRemark

  return (
    <Layout>
      <h4>{totalCount} Posts</h4>
      {edges.map(({ node }) => {
        return (
          <div key={node.id}>
            <Preview node={node} />
          </div>
        )
      })}
    </Layout>
  )
}
