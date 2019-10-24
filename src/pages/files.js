import React from 'react'
import { graphql } from "gatsby";
import BlogLayout from '../components/layout'

export default ({ data }) => {
  console.log(data);
  return (
    <BlogLayout>
      <div>
        <h1>My Site's Files</h1>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>modifiedTime</th>
              <th>prettySize</th>
            </tr>
          </thead>
          <tbody>
            {data.allFile.edges.map(({ node }, index) => (
              <tr key={index}>
                <td>{node.name}</td>
                <td>{node.modifiedTime}</td>
                <td>{node.prettySize}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>    </BlogLayout>
  )
}

export const query = graphql`
query MyQuery {
  allFile {
    edges {
      node {
        name
        modifiedTime
        prettySize     
      }
    }
  }
}
`