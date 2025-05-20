import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKey"
import { deleteParkingSlot, getAllSlots } from "@/api/slots"
import { approveParkingSession, bookParkingSession, getAllParkingSessions, getPendingParkingSessions } from "@/api/parking-request"
import type { BookParkingSessionDto } from "@/types"



export const useGetAllParkingSlots= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_PARKING_SLOTS],
        queryFn: ()=> getAllSlots()
    })
}

export const useDeleteParkingSlotMutation= ()=>{
    const queryClient= useQueryClient();

    return useMutation({
        mutationFn: (id:string)=> deleteParkingSlot(id),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey:[QUERY_KEYS.GET_ALL_PARKING_SLOTS]
            })
        }
    })
}

export const useGetPendingParkingRequestsQuery= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_PENDING_PARKING_REQUESTS],
        queryFn: ()=>getPendingParkingSessions()
    })
} 

export const useGetAllParkingRequestsQuery= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_PARKING_REQUESTS],
        queryFn: ()=>getAllParkingSessions()
    })
}



export const useBookParkingSlotMutation= ()=>{
    const queryClient= useQueryClient();
    return useMutation( {
        mutationFn: async ({userId,slotId,date,startTime,endTime}:BookParkingSessionDto)=>bookParkingSession(
            {userId,slotId,date,startTime,endTime}
        ),
        onSuccess: ()=>{
     queryClient.invalidateQueries({
        queryKey:[QUERY_KEYS.GET_PENDING_PARKING_REQUESTS]
     })
        }
    })
}

export const useApproveParkingSessionMutation= ()=>{
    const queryClient= useQueryClient();
    return useMutation({
        mutationFn: (id:number)=>approveParkingSession(id),
        onSuccess: ()=>{
            queryClient.invalidateQueries({
                queryKey:[QUERY_KEYS.GET_PENDING_PARKING_REQUESTS,
                    QUERY_KEYS.GET_ALL_PARKING_SLOTS
                ]
             })
        }
    })
}