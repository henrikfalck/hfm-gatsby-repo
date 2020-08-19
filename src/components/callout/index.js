import React from "react"
import PropTypes from "prop-types"
import Icon from "../icon"
import "./callout.scss"

const Callout = ({ center, children, title, type }) => (
  <div
    className={`callout ${"callout-type__" + type || ""}`}
    style={{ margin: center ? "0 auto" : "0" }}
  >
    {hasIcon ? (
      <div className="callout__icon">
        <Icon variant={type} />
      </div>
    ) : null}
    <div className="callout__content">
      <h2>{title}</h2>
      {children}
    </div>
  </div>
)

export default Callout

Callout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element.isRequired,
}

Callout.defaultProps = {
  title: "Lorem ipsum dolor",
  children:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
}
