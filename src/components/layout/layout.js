import React from "react"
import PropTypes from "prop-types"
import "../../style/styles.scss"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <main id="layout">{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
