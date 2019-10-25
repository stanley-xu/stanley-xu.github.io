import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { rhythm } from '../utils/typography'

const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rhythm(2)};
  padding-top: ${rhythm(1.5)};
`

export default ({ children }) => (
  <Center>
    <div>
      <Link to={'/blog/'}>
        <h4 css={css`display: inline-block; font-style: normal;`}>Back</h4>
      </Link>
      {children}
    </div>
  </Center>
)
