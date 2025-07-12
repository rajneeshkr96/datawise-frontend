import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="bg-black">
      DashboardLayout
      <Outlet />
    </div>
  )
}

export default DashboardLayout
