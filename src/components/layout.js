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
      <header className="">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand className="logo-text">JM</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link className="header-nav-links" href="#about">About me</Nav.Link>
                <Nav.Link className="header-nav-links" href="#work">Work</Nav.Link>
                <Nav.Link className="header-nav-links" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    )
  } else {
    header = (
      <header className="">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Link className="navbar-brand logo-text" to="/">JM</Link>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-lg-auto">
                <Nav.Link className="header-nav-links" href="/#about">About me</Nav.Link>
                <Nav.Link className="header-nav-links" href="/#work">Work</Nav.Link>
                <Nav.Link className="header-nav-links" href="/#contact">Contact</Nav.Link>
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
