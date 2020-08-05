import React from "react"
import { Link } from "gatsby"
import "./navigation.scss"

const Navigation = () => (
  <ul className="main-navigation">
    <li>
      <Link className="navigation-link" to="/">
        Forside
      </Link>
    </li>
    <li>
      <Link className="navigation-link" to="/sandbox">
        Sandbox
      </Link>
    </li>
  </ul>
)

export default Navigation
