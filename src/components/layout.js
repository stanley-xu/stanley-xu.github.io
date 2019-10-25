/**
 * Main layout component for site pages
 */

import React from "react"
import { Link } from "gatsby"
import styles from './layout.module.css'

const NavLink = ({ children, to }) => (
  <Link to={to} className={styles.navLink} activeClassName={styles.activeNavLink}>
    {children}
  </Link>
)

const HomeLink = ({ title }) => (
  <h1 className={styles.home}>
    <Link to='/' className={styles.homeLink}>
      {title}
    </Link>
  </h1>
)

const Header = ({ title }) => (
  <header className={styles.header}>
    <nav className={styles.headerNav}>
      <HomeLink title={title}/>
      <NavLink to="/blog/">Blog</NavLink>
      <NavLink to="/about/">About</NavLink>
    </nav>
  </header>
)

// The name-less elements are React fragments
//  used so that we don't have to wrap sibling JSX with more `div` or `span`
export default ({ children }) => (
  <>
    <Header title='Stanley Xu'/>
    <div className={styles.content}>
      <main>{children}</main>
    </div>
  </>
)
