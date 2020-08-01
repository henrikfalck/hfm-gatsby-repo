import React from "react"
import { Link } from "gatsby"
import { Flex, FlexChild } from "../flex/index"
import "./footer.scss"

const Footer = () => (
  <footer>
    <Flex>
      <FlexChild>
        <Link to="/">
          <b>Gatsby starter</b>
        </Link>
      </FlexChild>
    </Flex>
  </footer>
)

export default Footer
