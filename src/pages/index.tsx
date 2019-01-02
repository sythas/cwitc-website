import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/layout';

const Header = styled.h1`
  color: '#0505'
`;

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <div className="row">
          <div className="col">
            <Header>Hi people</Header>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
          </div>
          <div className="col">
            <Header>Hi people</Header>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <Link to="/page-2/">Go to page 2</Link>
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage;