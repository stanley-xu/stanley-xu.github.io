import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

const NavLink = ({ children, to }) => (
  <Link to={to} className={styles.link} activeClassName={styles.activelink}>
    {children}
  </Link>
)

const TitleLink = ({ title }) => (
  <h1 className={styles.titlelink}>
    <NavLink to='/'>{title}</NavLink>
  </h1>
)

const SubNavLink = ({ children, to }) => (
  <Link to={to} className={styles.sublink} activeClassName={styles.activelink}>
    {children}
  </Link>
)

// Main layout file injects `styleName` styling via props
const TitleNavbar = ({ title, styleName }) => (
  <nav className={styleName}>
    <TitleLink title={title}/>
    <SubNavLink to="/blog/">Blog</SubNavLink>
    <SubNavLink to="/about/">About</SubNavLink>
  </nav>
)

const Navbar = ({ children, styleName }) => (
  <nav className={styleName}>
    {children}
  </nav>
)

export { TitleLink, NavLink, SubNavLink, TitleNavbar, Navbar };
export default Navbar;
