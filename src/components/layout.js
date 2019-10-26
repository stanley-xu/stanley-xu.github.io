/**
 * Main layout component for site pages
 */

import React from "react"
import { TitleNavbar } from './navbar'
import styles from './layout.module.css'

const Header = () => (
  <header className={styles.header}>
    <TitleNavbar title={'Stanley Xu'} styleName={styles.nav}/>
  </header>
)

// The name-less elements are React fragments
//  used so that we don't have to wrap sibling JSX with more `div` or `span`
export default ({ children }) => (
  <>
    <Header/>
    <div className={styles.content}>
      <main>{children}</main>
    </div>
  </>
)
