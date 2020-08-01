import React from "react"
import Icon from "../icons/index"
import "./buttons.scss"

export const Button = ({ children, icon, iconVariant, disabled, type }) => (
  <button className={`button` + `${icon ? " has-icon" : ""}`} type={type}>
    {icon === "left" ? <Icon type={iconVariant} className="icon-left" /> : ""}
    {children}
    {icon === "right" ? <Icon type={iconVariant} className="icon-right" /> : ""}
  </button>
)

export const ButtonGroup = ({ children, orientation, align }) => (
  <div className="button-group">{children}</div>
)
