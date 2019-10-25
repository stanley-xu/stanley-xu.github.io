import React from 'react'
import Layout from '../components/layout'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const PostTitle = styled.h3`margin-bottom: ${rhythm(1/4)}`

const PostMetadata = styled.span`
  color: #bbb;
  font-size: medium;
`

const Preview = ({ node }) => (
  <Link to={node.fields.slug} css={css`
    text-decoration: none;
    color: inherit;            
  `}
  >
    <PostTitle>
      {node.frontmatter.title}{" "}
      <PostMetadata>
        &mdash; {node.frontmatter.date} &middot; {node.timeToRead} min read
      </PostMetadata>
    </PostTitle>

    <p>{node.excerpt}</p>
  </Link>
)

export default ({ data }) => (
  <Layout>
    <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Preview node={node}/>
        </div>
      ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMM DD")
          }
          timeToRead
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
