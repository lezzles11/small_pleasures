/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1000,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <br />
        <br />
      </div>
      <div className="stickToBottom">
        <footer>
          <div className="row">
            <div className="col-9"></div>
            <div className="col-3">
              {" "}
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=0vH9FjGZ_Oc"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <br />
              <p style={{ padding: "1px", color: "white" }}>
                {" "}
                &nbsp;&nbsp;&nbsp;{" "}
                <span className=" orange darken-3 container">
                  built during the corona
                </span>
                <br />
                {` `}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                {` `}
                <span className=" blue accent-4 container">
                  built by lezzles
                </span>
                <br />
                {` `}&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="pink accent-4 container">
                  built with{" "}
                  <a style={{ color: "white" }} href="https://www.gatsbyjs.org">
                    Gatsby
                  </a>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>{" "}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
