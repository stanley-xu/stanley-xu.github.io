import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
// import { css } from '@emotion/core'

export const query = graphql`
  query markdownNotes {
    allFile(filter: {relativeDirectory: {regex: "/notes/"}}) {
      edges {
        node {
          relativeDirectory
          childMarkdownRemark {
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
            tableOfContents
          }
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
  console.log(data);
  
  const mdEdges = data.allFile.edges

  return (
    <Layout>
      {
        mdEdges.map(({ node }) => {
          const mdNode = node.childMarkdownRemark
          return <Link key={mdNode.id} to={mdNode.fields.slug}>
            {mdNode.fields.slug}
          </Link>
        })
      }
    </Layout>
  )
}
