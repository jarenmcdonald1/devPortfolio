import * as React from "react"
import { Link } from "gatsby"

const Header = ({ location }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">JM</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        JM
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
    </div>
  )
}

export default Header
