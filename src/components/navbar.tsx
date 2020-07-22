import React, { useState } from "react"
import PropTypes from "prop-types"

const NavbarItem = (props: any) => (
  <a
    className="navbar-item is-capitalized is-hidden-desktop"
    href={`#${props.page}`}
  >
    {props.page}
  </a>
)

const NavbarBurger = (props: any) => (
  <button
    onClick={props.toggleMenu}
    className={`button navbar-burger ${props.active ? "is-active" : ""}`}
  >
    <span />
    <span />
    <span />
  </button>
)

const Navbar = ({ pages }) => {
  const [activeMenu, setActiveMenu] = useState(false)

  let navbarItems = pages.map(page => <NavbarItem page={page} key={page} />)
  const toggleMenu = () => {
    setActiveMenu(!activeMenu)
  }

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <div className="level" style={{ paddingTop: 10 }}>
          <div className="level-left">
            <figure className="image">
              <img
                src="https://shipper.id//assets/img/shipperLogo.png"
                style={{ width: 150 }}
              />
            </figure>
          </div>
        </div>
        <NavbarBurger active={activeMenu} toggleMenu={() => toggleMenu()} />
      </div>
      <div className={`navbar-menu ${activeMenu ? "is-active" : ""}`}>
        <div className="navbar-start">{navbarItems}</div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  pages: PropTypes.array,
}
export default Navbar
