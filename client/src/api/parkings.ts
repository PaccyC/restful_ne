import { protectedApiClient } from "@/config/apiClient";
import type { CreateParkingResponse, ParkingsResponse } from "@/types";


export const getAllParkings= async()=>{
    try {
        const response= await protectedApiClient.get<ParkingsResponse>("/parking/all")

        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch parkings");
    }
}


export const createParking=async(code:string,
    parkingName:string,
    availableSpaces:number,
    chargingFeePerHour:number,userId:string)=>{
    try {
        const response= await protectedApiClient.post<CreateParkingResponse>("/parking/create",{
            code,
            parkingName,
            availableSpaces,
            chargingFeePerHour,
            userId
        })
        return response.data
    } catch (error) {
        console.log(error);
        throw new Error("Failed to create parkings");
    
    }
}