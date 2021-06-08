import * as React from "react"
//import { Link } from "gatsby"

import { Row, Col, Nav } from 'react-bootstrap'

const Footer = () => {

  return (
    <footer className="container-fluid mt-4 mt-sm-5 footer-main">
      <Row>
        <Col xs={12} className="py-3">
          <Nav className="justify-content-center footer-nav-con">
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#about" eventKey="link-1">About me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#work" eventKey="link-2">Work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="nav-link" href="/#contact" eventKey="link-3">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} className="text-center copyright-con pb-2 pb-sm-3">
          <p className="mb-0 text-white-50 font-weight-light">&copy; {new Date().getFullYear()} Jaren McDonald,  Built with <a href="https://www.gatsbyjs.com" alt="checkout Gatsbyjs" className="text-success"> Gatsby</a></p>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer
