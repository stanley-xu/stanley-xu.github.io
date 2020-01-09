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

const TitleLink = ({ children, to }) => (
  <h1 style={{ margin: 0 }}>
    <NavLink to={to} configStyle={styles.titlelink}>{children}</NavLink>
  </h1>
)

const Navbar = ({ title }) => (
  <nav className={styles.nav}>
    <TitleLink to='/'>{title}</TitleLink>
    <SubNavLink to="/blog/">Blog</SubNavLink>
    <SubNavLink to="/projects/">Projects</SubNavLink>
  </nav>
)

export { NavLink, Navbar as default };
