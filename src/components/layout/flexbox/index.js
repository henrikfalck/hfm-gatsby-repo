import React from "react"
import "./flexbox.scss"

export const Flexbox = ({ children, height, width }) => (
  <div
    className="flexbox-container"
    style={{
      height: height,
      width: width,
    }}
  >
    {children}
  </div>
)

export const FlexChild = ({ children, order, width, className }) => (
  <div
    className={`flexbox-child ${className || ""}`}
    style={{
      order: order ? order : "auto",
      width: width ? width : "auto",
    }}
  >
    {children}
  </div>
)
