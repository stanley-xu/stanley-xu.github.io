import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import styled from '@emotion/styled'
// import { css } from '@emotion/core'

export const query = graphql`
  query allMarkdownNotes {
    allMdx(filter: { fields: { mdType: { eq: "notes" } } }) {
      edges {
        node {
          id
          fields {
            slug
            mdSubType
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

const Grid = styled.div`
  display: grid;
`

function groupNotes(mdEdges) {
  let notes = {}

  mdEdges.forEach(({ node }) => {
    const noteType = node.fields.mdSubType

    if (notes.hasOwnProperty(noteType)) {
      notes[noteType].push(node)
    } else {
      notes[noteType] = [node]
    }
  })

  return notes
}

export default ({ data }) => {
  const notes = groupNotes(data.allMdx.edges)

  return (
    <Layout>
      <Grid>
        {Object.keys(notes).map(subject => {
          return <div>{subject}</div>
        })}
      </Grid>
    </Layout>
  )
}
