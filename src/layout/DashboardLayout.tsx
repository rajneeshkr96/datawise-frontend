import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import DasSidebar from "@/features/components/DasSidebar"
import { Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div>
      <SidebarProvider>
        <div>
        <DasSidebar/>
        </div>
        <SidebarTrigger />
          <main className="px-2 py-4 w-full mx-auto overflow-hidden">
            <Outlet  />
          </main>
      </SidebarProvider>
    </div> 
  )
}

export default DashboardLayout
