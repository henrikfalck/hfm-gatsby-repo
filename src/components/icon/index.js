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
      case "arrow-down-left":
        return "17.275 5.275 8 14.55 8 6 6 6 6 16 6 18 8 18 18 18 18 16 9.379 16 18.689 6.689 17.275 5.275"
      case "arrow-down-right":
        return "16 14.592 6.704 5.296 5.29 6.71 14.58 16 6 16 6 18 16 18 18 18 18 16 18 6 16 6 16 14.592"
      case "arrow-left":
        return "13.425 4.914 12.01 3.5 4.939 10.571 4.939 10.571 3.525 11.985 4.939 13.399 12.01 20.471 13.425 19.056 7.368 13 20 13 20 11 7.339 11 13.425 4.914"
      case "arrow-right":
        return "19.061 10.571 11.99 3.5 10.575 4.914 16.661 11 4 11 4 13 16.632 13 10.575 19.056 11.99 20.471 19.061 13.399 20.475 11.985 19.061 10.571 19.061 10.571"
      case "arrow-up":
        return "M19.071 10.561L13 16.632V4h-2v12.632l-6.071-6.071-1.414 1.414 7.071 7.071L12 20.46l1.414-1.414 7.071-7.071-1.414-1.414z"
      case "arrow-up-left":
        return "18.71 17.26 9.45 8 18 8 18 6 8 6 6 6 6 8 6 18 8 18 8 9.379 17.296 18.675 18.71 17.26"
      case "arrow-up-right":
        return "6 6 6 8 14.592 8 5.311 17.281 6.725 18.695 16 9.42 16 18 18 18 18 8 18 6 16 6 6 6"
      case "close":
        return "18.364 7.05 16.95 5.636 12 10.586 7.05 5.636 5.636 7.05 10.586 12 5.636 16.95 7.05 18.364 12 13.414 16.95 18.364 18.364 16.95 13.414 12 18.364 7.05"
      case "external-link":
        return "M22,2V14H20V5.435L7.718,17.717,6.3,16.3,18.607,4H10V2H22ZM20,20H4V4H7V2H2V22H22V17H20Z"
      case "menu":
        return "M4 11h16v2H4zM4 6h16v2H4zM4 16h16v2H4z"
      case "minus":
        return "M4 11h16v2H4z"
      case "plus":
        return "M20 11v2h-7v7h-2v-7H4v-2h7V4h2v7h7z"
      // no default
    }
  }

  render() {
    return (
      <div
        className={`icon ${this.props.className}`}
        style={{
          height: this.props.size ? this.props.size : 24,
          width: this.props.size ? this.props.size : 24,
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`${this.props.size ? this.props.size : 24}`}
          height={`${this.props.size ? this.props.size : 24}`}
          viewBox="0 0 24 24"
        >
          <path d={this.renderIcon(this.props.variant)} />
        </svg>
      </div>
    )
  }
}

export default Icon
