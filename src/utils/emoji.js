import React from 'react'

export default ({ symbol, label }) => (
  <span role='img'
    aria-label={label ? label : ''}
    aria-hidden={label ? false : true}  
  >
    {symbol}
  </span>
)
