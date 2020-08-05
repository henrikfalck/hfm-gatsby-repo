import React from "react"
import PropTypes from "prop-types"
import "./flex.scss"

export const Flex = ({ children, height, width }) => (
  <div
    className="flex-container"
    style={{
      height: height ? height : "auto",
      width: width ? width : "auto",
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
      order: order ? order : "auto",
      width: width ? width : "auto",
    }}
  >
    {children}
  </div>
)

FlexChild.defaultProps = {
  order: 0,
  width: "auto",
}

Flex.propTypes = {
  children: PropTypes.element.isRequired,
}

Flex.defaultProps = {
  width: "100vw",
}
