import React from "react"
import PropTypes from "prop-types"
import Header from "../layout/header"
import Footer from "../layout/footer"
import "../../style/styles.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main id="layout">{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
