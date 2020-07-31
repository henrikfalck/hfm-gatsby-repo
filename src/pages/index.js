import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout/layout"

const IndexPage = () => (
  <Layout>
    <h1>Let's get to work.</h1>
    <Link to="/sandbox">Sandbox &rarr;</Link>
  </Layout>
)

export default IndexPage
