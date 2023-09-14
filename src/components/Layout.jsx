
import { Outlet } from "react-router-dom"
import "../styles/components-styles/Layout.css"
import AstrumLogo from "../assets/AstrumLogo.svg"

const Layout = ({children}) => {
  return (
    <main>
      <div className="Head">
        <img src={AstrumLogo} alt="Astrum Logo" />
      </div>
      <Outlet />
      {children}
    </main>
  )
}

export default Layout
