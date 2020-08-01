import React from "react"

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

export default Wrapper
