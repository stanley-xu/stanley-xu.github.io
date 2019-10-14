import React from "react"
// import Container from '../components/container'
import Layout from '../components/layout'
import Header from '../components/header'
import { Link } from "gatsby";

export default () => (
  <Layout>
    <div style={{ color: 'purple' }}>
      <Header headerText="Hello Gatsby!"/>
      <Link to='/about-css-modules/'>css modules</Link>
      <p>What a world.</p>
      <img src='https://source.unsplash.com/random/400x200' alt=''/>
    </div>
  </Layout>
)
