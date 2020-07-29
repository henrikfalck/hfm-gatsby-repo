import React from "react"
import { Link } from "gatsby"

const Navigation = () => (
  <ul className="navigation">
    <Link to="/">Forside</Link>
    <Link to="/sandbox">Sandbox</Link>
  </ul>
)

export default Navigation
