import React from 'react'
import { graphql } from 'gatsby'
import Post from '../components/post-layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Post>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Post>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`