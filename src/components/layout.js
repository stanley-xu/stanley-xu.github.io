/**
 * Main layout component for site pages
 */

import React from "react"
import Navbar from './navbar'
import styles from './layout.module.css'

const Header = () => (
  <header className={styles.header}>
    <Navbar title={'Stanley Xu'}/>
  </header>
)

export default ({ children }) => (
  <>
    <Header/>
    <div className={styles.content}>
      <main>{children}</main>
    </div>
  </>
)
