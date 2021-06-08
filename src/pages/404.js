import * as React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { Container, Row, Card } from 'react-bootstrap'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="404: Not Found" />
      <Container className="">
        <Row className="min-vh-100 align-items-center">
            <Card className="shadow mx-auto mt-4 h-auto">
            <Card.Body>
              <h1>404: Not Found</h1>
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
              <Link className="btn-success btn-lg" to="/" alt="back to home">Back home</Link>
              </Card.Body>
            </Card>
        </Row>
      </Container>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
