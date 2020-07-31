import React from "react"
import { Link } from "gatsby"
import Wrapper from "../wrapper"
import Navigation from "../navigation"
import "./header.scss"

const Header = () => (
  <header>
    <Wrapper width="768">
      <Link to="/">
        <b>Gatsby starter</b>
      </Link>
      <Navigation />
    </Wrapper>
  </header>
)

export default Header
