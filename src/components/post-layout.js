import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { NavLink } from './navbar'

// todo: it'd be nice if content were centered with dynamically sized left/right margins
//  rhythm gives fixed offsets
const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rhythm(5)};
  padding-top: 0;
`
  
const HeaderWrapper = styled.header`
  margin: 0;
  padding-top: 0.875rem;
  padding-bottom: ${rhythm(1.5)};
`

const Header = () => (
  <HeaderWrapper>
    <NavLink to={'/blog/'}>Back</NavLink>
  </HeaderWrapper>
)

export default ({ children }) => (
  <Center>
    <div>
      <Header/>
      {children}
    </div>
  </Center>
)
