import React from "react"
import "./divider.scss"

const Divider = ({ width }) => (
  <div className="divider" style={{ width: width ? width : "auto" }}></div>
)

export default Divider
