import React from "react"
import "./style.scss"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SideMenu from "../components/sides"
import SubHeader from "../components/subheader"
import Drivers from "../components/drivers"
const IndexPage = () => {
  const listOfDriver = [
    {
      driverID: "KOB209",
      name: "Jonathan Smith",
      phone: "087712312000",
      schedule: "Senin, Selasa, Rabu, Jumat, Minggu",
      progress: "95",
    },
    {
      driverID: "KOB210",
      name: "Albert Josh",
      phone: "087712312000",
      schedule: "Senin, Selasa, Rabu, Jumat, Minggu",
      progress: "45",
    },
    {
      driverID: "KOB211",
      name: "Rian Hidayat",
      phone: "087712312000",
      schedule: "Senin, Selasa, Rabu, Jumat, Minggu",
      progress: "25",
    },
    {
      driverID: "KOB212",
      name: "Deni Nugraha",
      phone: "087712312000",
      schedule: "Senin, Selasa, Rabu, Jumat, Minggu",
      progress: "75",
    },
    {
      driverID: "KOB213",
      name: "Budi Subagjo",
      phone: "087712312000",
      schedule: "Senin, Selasa, Rabu, Jumat, Minggu",
      progress: "30",
    },
  ]
  return (
    <Layout>
      <SEO title="Home" />
      <div className="level" style={{ alignItems: "flex-start" }}>
        <div className="level-left content-left">
          <SideMenu />
        </div>
        <div
          className="level-right main-content"
          style={{
            flexDirection: "column",
            justifyItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div>
            <SubHeader />
          </div>
          <div>
            <Drivers listDriver={listOfDriver} />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
