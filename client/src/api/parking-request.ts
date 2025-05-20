import {protectedApiClient } from "@/config/apiClient";
import type{ ApproveParkingSessionRequestsResponse,  BookParkingSessionDto,  GetParkingSessionRequestsResponse,  RequestParkingSessionResponse } from "@/types";


export const bookParkingSession= async({userId,slotId,date,startTime,endTime}:BookParkingSessionDto)=>{


    try {
        const response= await protectedApiClient.post<RequestParkingSessionResponse>("/parking/book",{
            userId,
            slotId,
            date,
            startTime,
            endTime
        })
        const responseData= response.data;
        return responseData;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to book parking session");
        
    }
}

export const getAllParkingSessions= async()=>{
    try {
        const response= await protectedApiClient.get<GetParkingSessionRequestsResponse>("/parking/all")
        const responseData= response.data;
        return responseData.data;

        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch all parking sessions");
        
    }
}

export const getPendingParkingSessions= async()=>{
    try {
        const response= await protectedApiClient.get<GetParkingSessionRequestsResponse>("/parking/pending")
        const responseData= response.data;
        return responseData.data;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch all parking sessions");
        
    }
}

export const approveParkingSession= async(id:number)=>{
    try {
        
        const response= await protectedApiClient.put<ApproveParkingSessionRequestsResponse>(`/parking/approve/${id}`)
        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to approve parking session");
        
    }
}
