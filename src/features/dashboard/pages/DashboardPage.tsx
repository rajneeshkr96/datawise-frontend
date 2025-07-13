import ActivityForm from "@/features/components/ActivityForm"
import DasBarChart from "@/features/components/DasBarChart"
import UserTable from "@/features/components/UserTable"

const DashboardPage = () => {
  return (
    <div>
      <div className="flex gap-x-6 mx-6">
        <DasBarChart/>
        <ActivityForm/>
      </div>
      <UserTable/>
      
    </div>
  )
}

export default DashboardPage
