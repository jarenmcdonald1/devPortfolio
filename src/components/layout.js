import * as React from "react"
import { Link } from "gatsby"

import { Navbar, Nav, Container } from 'react-bootstrap'
import Footer from './footer'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <header class="">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand">JM</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-lg-auto">
                <Nav.Link href="#about">About me</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  } else {
    header = (
      <header class="">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand" to="/">JM</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-lg-auto">
                <Nav.Link href="#about">About me</Nav.Link>
                <Nav.Link href="#work">Work</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
