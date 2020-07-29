import React from "react"
import Icon from "../icons/index"
import "./buttons.scss"

const Button = ({ children, hasIcon, iconRight, iconLeft, type }) => (
  <button className={`button ${(hasIcon && "has-icon") || ""}`}>
    {iconLeft && <Icon type={type} variant={iconLeft} className="icon-left" />}
    {children}
    {iconRight && (
      <Icon type={type} variant={iconRight} className="icon-right" />
    )}
  </button>
)

export default Button
