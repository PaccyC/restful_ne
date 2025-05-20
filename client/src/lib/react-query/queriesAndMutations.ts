import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { QUERY_KEYS } from "./queryKey"
import { createParking, getAllParkings } from "@/api/parkings"




interface CreateParkingInput {
  code: string;
  parkingName: string;
  availableSpaces: number;
  chargingFeePerHour: number;
  userId: string;
}

export const useGetAllParkings= ()=>{
    return useQuery({
        queryKey: [QUERY_KEYS.GET_ALL_PARKINGS],
        queryFn: ()=> getAllParkings()
    })
}





export const useCreateParkingMutation= ()=>{
    const queryClient= useQueryClient();
    return useMutation( {
        mutationFn: async ({code,parkingName,availableSpaces,chargingFeePerHour,userId}:CreateParkingInput)=>createParking(
            code,
            parkingName,
            availableSpaces,
            chargingFeePerHour,
            userId
        ),
        onSuccess: ()=>{
     queryClient.invalidateQueries({
        queryKey:[QUERY_KEYS.GET_ALL_PARKINGS]
     })
        }
    })
}

