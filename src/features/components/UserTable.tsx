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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]



const UserTable = () => {
  const [data,setData] = useState<Array<UserTableData>>([])
  useEffect(()=>{
  getDataset().then((val)=>{
    console.log(val.data);
    setData(val.data);
    
  }).catch((error)=>{
    
    
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
