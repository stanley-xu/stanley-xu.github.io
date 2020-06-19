import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { NavLink } from './Navbar'

const HeaderWrapper = styled.header`
  margin: 0;
  padding-top: 0.875rem;
  padding-bottom: ${rhythm(1.5)};
`

export const Header = ({ prevLink }) => (
  <HeaderWrapper>
    <NavLink to={prevLink}>Back</NavLink>
  </HeaderWrapper>
)

export const Center = styled.div`
  display: flex;
  justify-content: center;
  padding: ${rhythm(5)};
  padding-top: 0;
`

export const Layout = (props) => (
  <Center>
    <div>
      <Header prevLink={props.prevLink ?? '/'}/>
      {props.children}
    </div>
  </Center>
)
