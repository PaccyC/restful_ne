import React from 'react'


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
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
import {  registerCarEntrySchema } from "@/schema";
import useAuthContext from "@/hooks/useAuthContext";
import { useGetAllCarMovements, useRegisterCarEntryMutation } from '@/lib/react-query/queriesAndMutations';
import { Button } from "@/components/ui/button";



const CarMovements = () => {

     const {user}=useAuthContext()
      
  
      const {data:carMovements}= useGetAllCarMovements()
      const{mutateAsync:registerCarEntry,isPending,isError,error}=useRegisterCarEntryMutation()
  
  
  
  
        const form = useForm<z.infer<typeof registerCarEntrySchema>>({
          resolver: zodResolver(registerCarEntrySchema),
          defaultValues: {
            plateNumber: "",
            parkingCode: "",
            entryDateTime: "",
           
          },
        });
  
  
          async function onSubmit(values: z.infer<typeof registerCarEntrySchema>) {
  
               const dataWithUserId = {
        ...values,
        userId: user!.id, 
      };
  
      try {
         await registerCarEntry(dataWithUserId)
        }
  
       catch (error) {
        console.error(error);
      }
    }
  
  return (
    <div className='w-full px-6 py-4'>

    
    <div className='w-full flex flex-col gap-4'>
      <h3 className='text-2xl font-semibold'>Car Movements in the park</h3>
      <div>

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
    {carMovements?.data?.map((carMovement)=>(

    <TableRow key={carMovement.parkingCode}>
        <TableCell>{carMovement.plateNumber}</TableCell>
      <TableCell >{carMovement.entryDateTime}</TableCell>
      <TableCell>{carMovement.exitDateTime}</TableCell>
      <TableCell>{carMovement.chargedAmount}</TableCell>
      
        
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
                              New Car Entry
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="z-50 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-semibold">
                              New Car Entry
                              </DialogTitle>
                              <DialogDescription className="text-sm text-gray-500 mt-1 mb-4">
                                Fill in the details to create the car entry
                              </DialogDescription>
                            </DialogHeader>

                            <Form {...form}>
                              <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                              >

                                 <FormField
                                  control={form.control}
                                  name="entryDateTime"
                                  render={({ field }) => (
                                    <FormItem>
                                
                                      <FormLabel>Entry Date Time</FormLabel>
                                      <FormControl>
                                        <Input type="datetime-local" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              
                                
                                <FormField
                                  control={form.control}
                                  name="parkingCode"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Parking Code</FormLabel>
                                      <FormControl>
                                        <Input type="text" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                               

                                <FormField
                                  control={form.control}
                                  name="plateNumber"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Plate Number</FormLabel>
                                      <FormControl>
                                        <Input type="text" {...field} />
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
                                  Create Car Entry
                                </Button>
                              </form>
                            </Form>
                            {isError && <p className="text-red-500 text-center">{error.message}</p>}
                          </DialogContent>
                        </Dialog>
      
      </div>
    </div>
      
    </div>
  )
}
export default CarMovements
