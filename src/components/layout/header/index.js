import React from "react"
import { Link } from "gatsby"
import Navigation from "../navigation"
import "./header.scss"

export const Logo = () => <b>Gatsby Starter</b>

const Header = () => (
  <header>
    <Link className="logo-link" to="/">
      <Logo />
    </Link>
    <Navigation />
  </header>
)

export default Header
