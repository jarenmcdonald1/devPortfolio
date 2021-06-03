import * as React from "react"
//import { Link } from "gatsby"

import { Row, Col } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer className="container-fluid">
      <Row>
        <Col xs={12} className="text-center">
          &copy; {new Date().getFullYear()}, Built with <a href="https://www.gatsbyjs.com"> Gatsby</a>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
