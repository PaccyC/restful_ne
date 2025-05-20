
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useApproveParkingSessionMutation, useGetAllParkingRequestsQuery, useGetPendingParkingRequestsQuery } from "@/lib/react-query/queriesAndMutations"

const Bookings = () => {

    const {data:pendingParkingRequests}= useGetPendingParkingRequestsQuery()
    const {data:allParkingRequests,isFetching}= useGetAllParkingRequestsQuery()

    const {mutateAsync:approveParkingRequest}= useApproveParkingSessionMutation()

    const handleApproveParkingRequest= async(id:number)=>{
        try {
            const response=await approveParkingRequest(id)
            console.log("Parking request approved",response);
            
            alert("Parking request approved")
        } catch (error) {
            console.log(error);
            alert("Failed to approve parking request")
        }
    }

    if (isFetching) return <div className="py-3 flex justify-center w-full">Loading...</div>;
if (!allParkingRequests) return <div>No data</div>;

    
  return (
    <div className="w-full h-full flex flex-col gap-4 items-start px-4 py-4">
        <div className="w-full flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-7">Parking Requests</h3>

            {/* Filters */}
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <label htmlFor="status" className="text-sm font-semibold">Status</label>
            
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="All" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="approved">Approved</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="rejected">Rejected</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex items-center gap-2">
                    <label htmlFor="date" className="text-sm font-semibold">Date</label>
                    <input type="date" id="date" className="border border-gray-300 rounded-md p-2"/>
                </div>
            </div>


        </div>
            <Table>
  <TableHeader>
    <TableRow>
      <TableHead >SlotId</TableHead>
      <TableHead>UserId</TableHead>
      <TableHead>Date</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Start Time</TableHead>
      <TableHead>End Time</TableHead>
      <TableHead>Duration</TableHead>
      <TableHead>Total Fee</TableHead>
      <TableHead>Actions</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {allParkingRequests?.map((request)=>(

    <TableRow key={request.id}>
      <TableCell >{request.slotId}</TableCell>
      <TableCell>{request.userId}</TableCell>
      <TableCell>{request.date}</TableCell>
        <TableCell>{request.status}</TableCell>
      <TableCell >{request.startTime}</TableCell>
        <TableCell>{request.endTime}</TableCell>
        <TableCell>{request.duration}</TableCell>
        <TableCell>{request.totalFee}</TableCell>
        {request.status === "APPROVED" || request.status === "REJECTED" ? 
         null:
         <TableCell>
            <div className="flex items-center gap-2">
                <button onClick={async()=>await handleApproveParkingRequest(request.id)} className="bg-green-500 text-white px-4 py-2 rounded-md cursor-pointer">Approve</button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer">Reject</button>
            </div>
        </TableCell>
      }
     
    
    </TableRow>
    ))}
  </TableBody>
</Table>
      
    </div>
  )
}

export default Bookings
