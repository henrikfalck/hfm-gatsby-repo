import React from "react"
import "./wrapper.scss"

const Wrapper = ({ width, center, children }) => (
  <div
    className="wrapper"
    style={{
      maxWidth: width,
      margin: center ? "0 auto" : "0",
    }}
  >
    {children}
  </div>
)

export default Wrapper
