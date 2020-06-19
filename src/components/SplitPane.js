import React from 'react'

export const SplitPane = ({ left, right }) => {
  return (
    <>
      <div>{left}</div>
      <div>{right}</div>
    </>
  )
}
