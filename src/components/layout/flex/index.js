import React from "react"
import PropTypes from "prop-types"
import "./flex.scss"

export const Flex = ({ children, height, width }) => (
  <div
    className="flex-container"
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
    className={`flex-child ${className || ""}`}
    id={id}
    style={{
      order: order,
      width: width,
    }}
  >
    {children}
  </div>
)

FlexChild.defaultProps = {
  order: 0,
  width: "auto",
}
