import React from "react"
import "./fullsection.scss"

const FullSection = ({ children }) => {
  return (
    <>
      <section className="section--full-size">{children}</section>
    </>
  )
}

FullSection.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullSection
