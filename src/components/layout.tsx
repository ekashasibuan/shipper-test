import React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  const pages = [
    "Beranda",
    "Pickup",
    "Order",
    "Driver",
    "Merchant",
    "Laporan",
    "Profil",
  ]
  return (
    <div className="container">
      <Navbar pages={pages} />
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
