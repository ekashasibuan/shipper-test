import React from "react"
import { FiSearch, FiPlus } from "react-icons/fi"

const SubHeader = () => {
  return (
    <div className="level" style={{ flex: 1 }}>
      <div className="level-left">
        <div className="section">
          <div className="heading-title">DRIVER MANAGEMENT</div>
          <div className="heading-subtitle">
            Daftar driver yang bekerja dengan Anda
          </div>
        </div>
      </div>
      <div className="level-right">
        <div className="section">
          <div className="columns">
            <div className="column">
              <div className="field">
                <p className="control has-icons-left">
                  <input
                    className="input"
                    type="input"
                    placeholder="Cari Driver"
                  />
                  <span className="icon is-small is-left">
                    <FiSearch style={{ color: "#ff4646" }} />
                  </span>
                </p>
              </div>
            </div>
            <div className="column">
              <div className="buttons" style={{ justifyContent: "flex-end" }}>
                <button
                  className="button"
                  style={{
                    backgroundColor: "#ff4646",
                    paddingLeft: 25,
                    paddingRight: 25,
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    TAMBAH DRIVER
                  </span>
                  <span className="icon is-small">
                    <FiPlus style={{ color: "white" }} />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubHeader
