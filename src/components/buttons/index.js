import React from "react"
import PropTypes from "prop-types"
import Icon from "../icon/index"
import "./buttons.scss"

export const Button = ({
  children,
  //colorOverride,
  fullWidth,
  href,
  iconAlignment,
  icon,
  inverted,
  order,
  //size,
  type,
}) => (
  <button
    className={
      `button` +
      `${icon ? " has-icon" : ""}` +
      `${inverted ? " inverted" : ""}` +
      `${fullWidth ? " button--full-width" : ""}`
    }
    button-type={type}
    style={{
      order: order ? order : null,
    }}
  >
    <a href={href}>
      {icon && iconAlignment === "left" ? (
        <Icon variant={icon} className="icon-left" />
      ) : null}
      <span className="button-text">{children}</span>
      {icon && iconAlignment === "right" ? (
        <Icon variant={icon} className="icon-right" />
      ) : null}
    </a>
  </button>
)

export const ButtonGroup = ({ children, orientation, align }) => (
  <div className="button-group" orientation={orientation} alignment={align}>
    {children}
  </div>
)

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  children: "Lorem ipsum",
  iconAlignment: "left",
  type: "primary",
}

ButtonGroup.propTypes = {
  children: PropTypes.element.isRequired,
}

ButtonGroup.defaultProps = {
  orientation: "row",
  // alignment: flex-start
}
