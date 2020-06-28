import React from 'react'
import styled from '@emotion/styled'

const Row = styled.div`
  display: flex;
`

export const SplitPane = ({ left, right }) => {
  return (
    <Row>
      <div>{left}</div>
      <div>{right}</div>
    </Row>
  )
}
