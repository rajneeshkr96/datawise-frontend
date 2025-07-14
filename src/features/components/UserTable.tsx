import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useEffect, useState } from "react"
import { getDataset } from "../services/DashboardApi"
import type { UserTableData } from "@/types/userTable"
import { toast } from "sonner"



const UserTable = () => {
  const [data,setData] = useState<Array<UserTableData>>([])
  useEffect(()=>{
  getDataset().then((val)=>{
    console.log(val.data);
    setData(val.data);
    
  }).catch((error)=>{
    toast("error", {
      description: (
        <pre className="mt-2 w-[320px] rounded-md bg-red-500 p-4">
          <code className="text-white">{JSON.stringify(error, null, 2)}</code>
        </pre>
      ),
    })
  })
},[])

  
  return (
    <Table >
      <TableCaption>List of Dataset users</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Name</TableHead>
          <TableHead>OWner</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Created Dated</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((val:UserTableData) => (
          <TableRow key={val._id}>
            <TableCell className="font-medium">{val.name}</TableCell>
            <TableCell>{val.owner}</TableCell>
            <TableCell>{val.description}</TableCell>
            <TableCell className="text-right">{val.created_at}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default UserTable
