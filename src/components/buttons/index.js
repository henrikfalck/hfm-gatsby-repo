import React from "react"
import "./buttons.scss"

const Button = ({ className, children, iconRight, iconLeft }) => (
  <button className={`button ${className || ""}`}>{children}</button>
)

export default Button
