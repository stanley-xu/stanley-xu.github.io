import React from 'react'
import { Link } from 'gatsby'
import styles from './navbar.module.css'

const NavLink = ({ children, to, configStyle }) => {
  let classNames = styles.link;
  classNames += configStyle ? ` ${configStyle}` : '';

  return (
    <Link to={to} className={classNames} activeClassName={styles.activelink}>
      {children}
    </Link>
  );
}

const SubNavLink = ({ children, to }) => (
  <NavLink to={to} configStyle={styles.sublink}>{children}</NavLink>
)

const TitleLink = ({ title }) => (
  <h1 style={{ margin: 0 }}>
    <NavLink to='/' configStyle={styles.titlelink}>{title}</NavLink>
  </h1>
)

const Navbar = ({ title }) => (
  <nav className={styles.nav}>
    <TitleLink title={title}/>
    <SubNavLink to="/blog/">Blog</SubNavLink>
    <SubNavLink to="/about/">About</SubNavLink>
  </nav>
)

export { NavLink, Navbar as default };
