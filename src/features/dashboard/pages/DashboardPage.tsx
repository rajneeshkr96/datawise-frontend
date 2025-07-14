import ActivityForm from "@/features/components/ActivityForm"
import DasBarChart from "@/features/components/DasBarChart"
import UserTable from "@/features/components/UserTable"

const DashboardPage = () => {
  return (
    <div className="w-full ">
      <div className="flex justify-between gap-x-16  px-4 w-4/5 my-6 mx-auto max-md:flex-col">
        <DasBarChart/>
        <UserTable/>
      </div>
      <div className="flex justify-evenly gap-x-12 mx-auto px-4 w-4/5  max-md:flex-col-reverse">
        <ActivityForm/>
        <DasBarChart/>
      </div>
      
    </div>
  )
}

export default DashboardPage
