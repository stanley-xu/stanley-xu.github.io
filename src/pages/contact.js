import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'

export default () => (
  <Layout>
    <div>
      <Header headerText="I'd love to talk! Email me at the address below"/>
      <p>
        <a href="mailto:test@test.com">test@test.com</a>
      </p>
    </div>
  </Layout>
)
