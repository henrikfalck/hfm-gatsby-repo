import React from "react"
import PropTypes from "prop-types"
import Icon from "../icons/index"
import "./buttons.scss"

// TODO: Add default props value to button text ("Lorem ipsum")
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
      `${fullWidth ? " button--full-width" : ""}` +
      `${dark ? " button--dark" : ""}`
    }
    button-type={type}
    style={{
      order: order ? order : null,
    }}
  >
    <a href={href}>
      {iconAlignment === "left" || iconAlignment === null ? (
        <Icon variant={iconVariant} className="icon-left" />
      ) : (
        ""
      )}
      <span className="button-text">{children}</span>
      {iconAlignment === "right" ? (
        <Icon variant={iconVariant} className="icon-right" />
      ) : (
        ""
      )}
    </a>
  </button>
)

export const ButtonGroup = ({ children, orientation, align }) => (
  <div
    className="button-group"
    style={{
      flexDirection: orientation, // Column or row (default = row)
      // alignContent: align,
    }}
  >
    {children}
  </div>
)

Button.propTypes = {
  type: PropTypes.string,
}

Button.defaultProps = {
  children: "Lorem ipsum",
  type: "primary",
}

ButtonGroup.propTypes = {
  children: PropTypes.element.isRequired,
}

ButtonGroup.defaultProps = {
  orientation: "row",
}
