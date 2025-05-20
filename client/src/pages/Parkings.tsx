
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useCreateParkingMutation, useGetAllParkings } from "@/lib/react-query/queriesAndMutations"

import { Button } from "@/components/ui/button";
import { MdDownload } from "react-icons/md";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast from "react-hot-toast";


import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { z } from "zod";
import { Input } from "@/components/ui/input";
import { createparkingSchema } from "@/schema";
import useAuthContext from "@/hooks/useAuthContext";


const Parkings = () => {
    const {user}=useAuthContext()
    

    const {data:parkings}= useGetAllParkings()
    const{mutateAsync:createParking,isPending,isError}=useCreateParkingMutation()




      const form = useForm<z.infer<typeof createparkingSchema>>({
        resolver: zodResolver(createparkingSchema),
        defaultValues: {
          code: "",
          parkingName: "",
          availableSpaces: 0,
          location: "",
          chargingFeePerHour: 0,
        },
      });


        async function onSubmit(values: z.infer<typeof createparkingSchema>) {

             const dataWithUserId = {
      ...values,
      userId: user!.id, // add the user ID here
    };

    try {
       await createParking(dataWithUserId)
      }

     catch (error) {
      console.error(error);
      toast.error("Failed to create a parking");
    }
  }

    
  return (
    <div className="w-full h-full flex flex-col gap-4 items-start px-4 py-4">
        <div className="w-full flex items-center justify-between">
            <h3 className="text-2xl font-semibold leading-7">Parkings Available</h3>

          


        </div>
            <Table>
  <TableHeader>
    <TableRow>
      <TableHead >code</TableHead>
      <TableHead>Parking name</TableHead>
      <TableHead>Available Spaces</TableHead>
      <TableHead>Charging Per Hour</TableHead>
      
    </TableRow>
  </TableHeader>
  <TableBody>
    {parkings?.map((parking)=>(

    <TableRow key={parking.code}>
        <TableCell>{parking.code}</TableCell>
      <TableCell >{parking.parkingName}</TableCell>
      <TableCell>{parking.availableSpaces}</TableCell>
      <TableCell>{parking.chargingFeePerHour}</TableCell>
      
        
         <TableCell>
           
        </TableCell>
      
    
    </TableRow>
    ))}
  </TableBody>
</Table>

   <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              className="bg-blue-600 text-white rounded-lg px-4 py-2 cursor-pointer"
                            //   onClick={() => setSelectedSlotId(slot.id)}
                            >
                              Create Parking
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="z-50 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-semibold">
                                Create Parking
                              </DialogTitle>
                              <DialogDescription className="text-sm text-gray-500 mt-1 mb-4">
                                Fill in the details to create the parking
                              </DialogDescription>
                            </DialogHeader>

                            <Form {...form}>
                              <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                              >
                                <FormField
                                  control={form.control}
                                  name="code"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>CODE</FormLabel>
                                      <FormControl>
                                        <Input type="text" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="parkingName"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Parking Name</FormLabel>
                                      <FormControl>
                                        <Input type="text" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                                <FormField
                                  control={form.control}
                                  name="availableSpaces"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Available spaces</FormLabel>
                                      <FormControl>
                                        <Input type="number" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="location"
                                  render={({ field }) => (
                                    <FormItem>
                                
                                      <FormLabel>Location</FormLabel>
                                      <FormControl>
                                        <Input type="text" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="chargingFeePerHour"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>charging Fee Per Hour</FormLabel>
                                      <FormControl>
                                        <Input type="number" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <Button
                                  type="submit"
                                //   disabled={isLoading}
                                  className="w-full bg-blue-500 text-white"
                                >
                                  Create Parking
                                </Button>
                              </form>
                            </Form>
                          </DialogContent>
                        </Dialog>
      
    </div>
  )
}

export default Parkings
