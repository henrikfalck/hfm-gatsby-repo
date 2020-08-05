import React from "react"
import PropTypes from "prop-types"
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
