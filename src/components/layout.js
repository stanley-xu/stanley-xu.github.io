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
  <h1 style={{ margin: 0, display: 'inline-block' }}>
    <Link to='/'
      style={{
        color: 'inherit', fontWeight: 700, marginRight: '1rem', textDecoration: 'none'
      }}>
      {title}
    </Link>
  </h1>
)

const Header = ({ title }) => (
  <header className={styles.header}>
    <nav className={styles.headerNav}>
      <HomeLink title={title}/>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about/">About</NavLink>
      <NavLink to="/contact/">Contact</NavLink>
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
