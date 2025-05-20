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
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  useBookParkingSlotMutation,
  useDeleteParkingSlotMutation,
  useGetAllParkingSlots,
} from "@/lib/react-query/queriesAndMutations";
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
import { bookParkingSessionSchema } from "@/schema";
import type { z } from "zod";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import type { Slot } from "@/types";
import { useSearchContext } from "@/hooks/useSearchContext";
import { searchSlots } from "@/api/slots";

const Dashboard = () => {
  const [fetchedSlots, setSlots] = useState<Slot[]>([]);
  const [loading, setLoading] = useState(false);

  const { searchQuery } = useSearchContext();
  
  const { id: userId } = JSON.parse(localStorage.getItem("user") || "{}");

  const [selectedSlotId, setSelectedSlotId] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery.trim()) return;
      setLoading(true);
      try {
        const results = await searchSlots(searchQuery);
        setSlots(results);
      } catch (error) {
        console.error("Search failed:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchQuery]);

  const { data: slots, isFetching: isLoading } = useGetAllParkingSlots();
  const { mutateAsync: deleteSlot } = useDeleteParkingSlotMutation();
  const { mutate: bookSlot } = useBookParkingSlotMutation();

  const form = useForm<z.infer<typeof bookParkingSessionSchema>>({
    resolver: zodResolver(bookParkingSessionSchema),
    defaultValues: {
      userId: "",
      slotId: "",
      date: "",
      startTime: "",
      endTime: "",
    },
  });

  async function onSubmit(values: z.infer<typeof bookParkingSessionSchema>) {
    if (!selectedSlotId || !userId) return;

    try {
      bookSlot({
        ...values,
        userId,
        slotId: selectedSlotId,
      });

      toast.success("Parking slot booked successfully!");
      form.reset(); // Reset form
      setSelectedSlotId(null); // Close dialog
    } catch (error) {
      console.error(error);
      toast.error("Failed to book the slot.");
    }
  }

  return (
    <>
      <div className="w-full flex flex-1 flex-col space-y-6 py-6 px-5">
        <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">10k</h2>
              <p className="text-xs text-gray-600/80 font-light">
                Total registers
              </p>
              <p className="text-xs text-gray-600/80 font-light">
                Up 40%(30 days)
              </p>
            </div>

            <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
          </div>
          <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">10k</h2>
              <p className="text-xs text-gray-600/80 font-light">
                Total registers
              </p>
              <p className="text-xs text-gray-600/80 font-light">
                Up 40%(30 days)
              </p>
            </div>

            <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
          </div>
          <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">10k</h2>
              <p className="text-xs text-gray-600/80 font-light">
                Total registers
              </p>
              <p className="text-xs text-gray-600/80 font-light">
                Up 40%(30 days)
              </p>
            </div>

            <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
          </div>
          <div className="bg-white h-auto rounded-lg px-3 py-3 flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold">10k</h2>
              <p className="text-xs text-gray-600/80 font-light">
                Total registers
              </p>
              <p className="text-xs text-gray-600/80 font-light">
                Up 40%(30 days)
              </p>
            </div>

            <div className="w-14 h-14 bg-cyan-300 rounded-full"></div>
          </div>
        </div>

        {/* 2 columns */}

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="w-full h-auto py-4 px-4 bg-white rounded-lg">
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold">Rate of Parking Spots</h3>
                <p className="text-xs text-gray-600">
                  it illustrates the number of booked spots per day
                </p>
              </div>
              <Button className="bg-transparent shadow-md px-8 py-2 flex items-center gap-2 border-[1px] rounded-lg cursor-pointer border-blue-500 ">
                <MdDownload fill="#155dfc" size={20} />
                <p className="text-blue-600 font-bold text-xs">Save Report</p>
              </Button>
            </div>
          </div>
          <div className="w-full h-auto py-4 px-4 bg-white rounded-lg">
            <div className="w-full flex justify-between items-center">
              <h3 className="text-sm font-semibold">Popular Used Spots</h3>

              <div className="flex gap-4 items-center">
                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-black/60 rounded-full" />
                  <p className="text-xs">User</p>
                </div>

                <div className="flex gap-2 items-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-full" />
                  <p className="text-xs">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Displaying the parking slots available and vehicles registered*/}

        <div className="w-full flex flex-col gap-2 items-start">
          <h3 className="text-3xl font-semibold">Parking Slots For You</h3>

          {/* Table */}
          {isLoading && (
            <p className="text-sm text-gray-600 text-center">Loading...</p>
          )}

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Slot Number</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Floor</TableHead>
                <TableHead>Type</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
             <TableBody>
  {(searchQuery.trim() ? fetchedSlots : slots)?.length === 0 ? (
    <TableRow>
      <TableCell colSpan={5} className="text-center text-gray-500">
        {searchQuery.trim()
          ? "No matching slots found."
          : "No slots available."}
      </TableCell>
    </TableRow>
  ) : (
    (searchQuery.trim() ? fetchedSlots : slots)?.map((slot) => (
      <TableRow key={slot.slotNumber}>
        <TableCell>{slot.slotNumber}</TableCell>
        <TableCell>{slot.status}</TableCell>
        <TableCell>{slot.floor}</TableCell>
        <TableCell>{slot.type}</TableCell>
        <TableCell>
          <div className="flex justify-center items-center gap-3">
            {slot.status === "AVAILABLE" && (
             
<div className="flex justify-center items-center gap-3">
                      {slot.status === "AVAILABLE" && (
                        <Dialog
                          onOpenChange={(open) =>
                            !open && setSelectedSlotId(null)
                          }
                        >
                          <DialogTrigger asChild>
                            <Button
                              className="bg-blue-600 text-white rounded-lg px-4 py-2 cursor-pointer"
                              onClick={() => setSelectedSlotId(slot.id)}
                            >
                              Book
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="z-50 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md mx-auto">
                            <DialogHeader>
                              <DialogTitle className="text-lg font-semibold">
                                Book a Slot
                              </DialogTitle>
                              <DialogDescription className="text-sm text-gray-500 mt-1 mb-4">
                                Fill in the details to request booking for this
                                slot.
                              </DialogDescription>
                            </DialogHeader>

                            <Form {...form}>
                              <form
                                onSubmit={form.handleSubmit(onSubmit)}
                                className="space-y-6"
                              >
                                <FormField
                                  control={form.control}
                                  name="date"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Date</FormLabel>
                                      <FormControl>
                                        <Input type="date" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="startTime"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Start Time</FormLabel>
                                      <FormControl>
                                        <Input type="time" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <FormField
                                  control={form.control}
                                  name="endTime"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>End Time</FormLabel>
                                      <FormControl>
                                        <Input type="time" {...field} />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />

                                <Button
                                  type="submit"
                                  disabled={isLoading}
                                  className="w-full"
                                >
                                  {isLoading ? "Booking..." : "Request Now"}
                                </Button>
                              </form>
                            </Form>
                          </DialogContent>
                        </Dialog>
                      )}

                      <Button
                        onClick={() => deleteSlot(slot.id)}
                        className="bg-red-600 text-white rounded-lg px-4 py-2 cursor-pointer"
                      >
                        Delete
                      </Button>
                    </div>

            )}

            <Button
              onClick={() => deleteSlot(slot.id)}
              className="bg-red-600 text-white rounded-lg px-4 py-2 cursor-pointer"
            >
              Delete
            </Button>
          </div>
        </TableCell>
      </TableRow>
    ))
  )}
</TableBody>

          </Table>

          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Dashboard;



