import React from "react"
import { FiMoreHorizontal } from "react-icons/fi"
import "./progress.scss"
import PropTypes from "prop-types"

const Drivers = ({ listDriver }) => {
  return (
    <div className="columns is-multiline drivers">
      {listDriver.map((item: any, index: number) => {
        console.log(index)
        return (
          <div className="column is-4" style={{ marginTop: 20 }}>
            <div className="card">
              <div className="columns section-driver-header is-mobile">
                <div className="column">
                  <div style={{ color: "#7c7d7e", fontSize: 14 }}>
                    ID Driver{" "}
                    <strong style={{ color: "#ff4646" }}>
                      {item.driverID}
                    </strong>
                  </div>
                </div>
                <div className="column">
                  <div className="more-icon-section">
                    <FiMoreHorizontal style={{ fontSize: 20 }} />
                  </div>
                </div>
              </div>
              <hr style={{ margin: 0 }} />
              <div className="columns section-driver-content is-mobile">
                <div className="column" style={{ paddingTop: 30 }}>
                  <div>
                    <figure className="image is-96x96">
                      <img
                        className="is-rounded"
                        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50.jpg"
                      />
                    </figure>
                    <div className="section-driver pt20">
                      <div className="driver-info-label">Nama Driver</div>
                      <div className="driver-info-data">{item.name}</div>
                    </div>
                    <div className="section-driver">
                      <div className="driver-info-label">Telepon</div>
                      <div className="driver-info-data">{item.phone}</div>
                    </div>
                    <div className="section-driver">
                      <div className="driver-info-label">Jadwal</div>
                      <div className="driver-info-data">{item.schedule}</div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="set-size charts-container">
                    <div
                      className={
                        "pie-wrapper " +
                        "progress-" +
                        item.progress +
                        " style-2"
                      }
                    >
                      <span className="label">
                        {item.progress}
                        <span className="smaller">%</span>
                      </span>
                      <div className="pie">
                        <div className="left-side half-circle"></div>
                        <div className="right-side half-circle"></div>
                      </div>
                      <div className="shadow"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

Drivers.propTypes = {
  listDriver: PropTypes.array,
}
export default Drivers
