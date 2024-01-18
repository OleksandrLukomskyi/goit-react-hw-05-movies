import Header from "components/Header/Header"
import { Outlet } from "react-router-dom"


const Layout2 = () => {
  return (
    <div>
     <Header/>
      <Outlet/>
      </div>
  )
}

export default Layout2