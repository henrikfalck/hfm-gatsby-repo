import React from "react"
import PropTypes from "prop-types"
import Icon from "../icon/index"
import "./buttons.scss"

//? Could the icon statements be shortened?
export const Button = ({
  children,
  dark,
  href,
  iconAlignment,
  iconVariant,
  order,
  type,
  fullWidth,
}) => (
  <button
    className={
      `button` +
      `${iconVariant ? " has-icon" : ""}` +
      `${dark ? " dark" : ""}` +
      `${fullWidth ? " button--full-width" : ""}`
    }
    button-type={type}
    color-mode={dark}
    style={{
      order: order ? order : null,
    }}
  >
    <a href={href}>
      {iconAlignment === "left" ? (
        <Icon variant={iconVariant} className="icon-left" />
      ) : null}
      <span className="button-text">{children}</span>
      {iconAlignment === "right" ? (
        <Icon variant={iconVariant} className="icon-right" />
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
