import React from "react"
import Icon from "../icons"
import "./callout.scss"
function Callout({ title, type, children, center }) {
  const hasIcon = type

  if (hasIcon) {
    return (
      <div
        className={`callout ${"callout-type__" + type || ""}`}
        style={{ margin: center ? "0 auto" : "0" }}
      >
        <div className="callout__icon">
          <Icon variant={type} />
        </div>
        <div className="callout__content">
          <h2>{title}</h2>
          {children}
        </div>
      </div>
    )
  }

  return (
    <div className="callout" style={{ margin: center ? "0 auto" : "0" }}>
      <div className="callout__content">
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Callout
