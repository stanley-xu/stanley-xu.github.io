import React from 'react'
// CSS module
import containerStyles from './container.module.css'

export default ({ children }) => (
  <div className={containerStyles.container}>
    {children}
  </div>
)
