import React from 'react'
import BlogLayout from '../components/bloglayout.js'
import { css } from '@emotion/core'
import { graphql, Link } from 'gatsby'
import { rhythm } from '../utils/typography'

export default ({ data }) => (
  <BlogLayout>
    <h1>Amazing Pandas Eating Things</h1>
    <div>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug} css={css`
              text-decoration: none;
              color: inherit;            
            `}
            >
              <h3
                css={css`
                  margin-bottom: ${rhythm(1 / 4)};
                `}
              >
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #bbb;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </div>
  </BlogLayout>
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
            date(formatString: "DD MMMM, YYYY")
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
