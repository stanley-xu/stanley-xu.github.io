import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { Link } from 'gatsby'

// TODO: dedicated CSS module
const Container = styled.nav`
  background-color: whitesmoke;
  height: 100%;
  padding-top: 0.875rem;
  padding-bottom: ${rhythm(1.5)};
  font-size: 14px;

  ul {
    margin: 0;
    padding: 0.5rem 0.75rem;
  }
  li {
    a {
      text-decoration: none;
      color: black;
    }
    list-style-type: none;
  }
  .toc-listitem-0 {
    font-size: 16px;
    font-weight: 700;
  }

  .toc-listitem-1 {
    font-weight: 500;
  }

  .toc-listitem-2 {
    font-weight: 300;
    margin-bottom: 5px;
  }
`

const DEPTH_LIMIT = 3

const buildList = (toc, depth = 0) => {
  if (depth > DEPTH_LIMIT) return

  return (
    <ul>
      {toc.items.map(item => {
        return (
          <li className={`toc-listitem-${depth}`} key={item.url}>
            <Link to={item.url}>{item.title}</Link>
            {item.items ? buildList(item, depth + 1) : undefined}
          </li>
        )
      })}
    </ul>
  )
}

export const TableOfContents = ({ toc }) => {
  return <Container>{buildList(toc)}</Container>
}
