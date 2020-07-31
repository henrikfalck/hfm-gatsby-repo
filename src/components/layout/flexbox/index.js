import React from "react"
import "./flexbox.scss"

export const Flexbox = ({ children, height, width }) => (
  <div
    className="flexbox-container"
    style={{
      height: height || "auto",
      width: width || "100%",
    }}
  >
    {children}
  </div>
)

export const FlexChild = ({ children, order, width, className, id }) => (
  <div
    className={`flexbox-child ${className || ""}`}
    id={id}
    style={{
      order: order ? order : "auto",
      width: width ? width : "auto",
    }}
  >
    {children}
  </div>
)
