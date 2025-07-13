import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import DasSidebar from "@/features/components/DasSidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <DasSidebar/>
          <main>
            <SidebarTrigger />
            <Outlet />
          </main>
      </SidebarProvider>
    </div> 
  )
}

export default DashboardLayout
