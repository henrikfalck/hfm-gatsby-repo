import React from "react"
import { Link } from "gatsby"
import { Flexbox, FlexChild } from "../flexbox/index"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Flexbox>
      <FlexChild>
        <Link to="/">
          <b>Gatsby starter</b>
        </Link>
      </FlexChild>
    </Flexbox>
  </footer>
)

export default Footer
