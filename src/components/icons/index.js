import React, { Component } from "react"

class Icon extends Component {
  // Identify which icon to render
  renderIcon = path => {
    switch (path) {
      case "information":
        return "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,16H11V16h2Zm0-4H11V7h2Z"
      case "warning":
        return "M12,3,2,21H22Zm1,16H11V17h2Zm-2-4V8h2v7Z"
      case "arrow-down":
        return "M19.071 10.561L13 16.632V4h-2v12.632l-6.071-6.071-1.414 1.414 7.071 7.071L12 20.46l1.414-1.414 7.071-7.071-1.414-1.414z"
      case "arrow-up":
        return "M19.071 10.561L13 16.632V4h-2v12.632l-6.071-6.071-1.414 1.414 7.071 7.071L12 20.46l1.414-1.414 7.071-7.071-1.414-1.414z"
      // no default
    }
  }

  render() {
    return (
      <div
        className={`icon ${this.props.className}`}
        style={{
          height: this.props.size || 24,
          width: this.props.size || 24,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${this.props.size || "24"}`}
          height={`${this.props.size || "24"}`}
          viewBox="0 0 24 24"
        >
          <path d={this.renderIcon(this.props.variant)} />
        </svg>
      </div>
    )
  }
}

export default Icon
