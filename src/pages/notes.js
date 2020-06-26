import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
// import { css } from '@emotion/core'

export const query = graphql`
  query allMarkdownNotes {
    allMdx(filter: { fields: { mdType: { eq: "notes" } } }) {
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
          timeToRead
          excerpt
          tableOfContents
        }
      }
    }
  }
`

// const PostTitle = styled.h3`margin-bottom: ${rhythm(1/4)}`

// const PostMetadata = styled.span`font-size: small;`

// const TableOfContents = ({ htmlTOC }) => {
//   return (
//     <div dangerouslySetInnerHTML={{ __html: htmlTOC }} />
//   )
// }

// const Preview = ({ node }) => (
//   <Link to={node.fields.slug} css={css`
//     text-decoration: none;
//     color: inherit;
//   `}
//   >

//   </Link>
// )

export default ({ data }) => {
  console.log(data)

  const mdEdges = data.allMdx.edges

  return (
    <Layout>
      {mdEdges.map(({ node }) => {
        return (
          <Link key={node.id} to={node.fields.slug}>
            {node.fields.slug}' '
          </Link>
        )
      })}
    </Layout>
  )
}
