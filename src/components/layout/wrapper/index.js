import React from "react"
import PropTypes from "prop-types"

const Wrapper = ({ width, center, children }) => (
  <div
    className="wrapper"
    style={{
      width: "inherit",
      maxWidth: width,
      margin: center ? "0 auto" : "0",
    }}
  >
    {children}
  </div>
)

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
