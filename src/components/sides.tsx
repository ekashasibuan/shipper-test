import React from "react"
import {
  FiHome,
  FiCalendar,
  FiClipboard,
  FiTarget,
  FiLayout,
  FiFileText,
  FiUser,
} from "react-icons/fi"

const SideMenu = () => {
  return (
    <aside className="menu is-hidden-mobile">
      <ul className="menu-list">
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiHome />
            </div>
            <div className="column">Beranda</div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiCalendar />
            </div>
            <div className="column">Pickup</div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiClipboard />
            </div>
            <div className="column">Order</div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiTarget style={{ color: "#ff4646", fontWeight: "bold" }} />
            </div>
            <div
              className="column"
              style={{ color: "#ff4646", fontWeight: "bold" }}
            >
              Driver
            </div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiLayout />
            </div>
            <div className="column">Merchant</div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiFileText />
            </div>
            <div className="column">Laporan</div>
          </div>
        </li>
        <li className="sides-li">
          <div className="columns">
            <div className="column is-3">
              <FiUser />
            </div>
            <div className="column">Profil</div>
          </div>
        </li>
      </ul>
    </aside>
  )
}

export default SideMenu
