import { protectedApiClient } from "@/config/apiClient";
import type { SlotsResponse } from "@/types";



export const getAllSlots= async()=>{
    try {
        const response= await protectedApiClient.get<SlotsResponse>("/slots/all")

        return response.data.data;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch slots");
        
    }
}

export const deleteParkingSlot =async(id:string)=>{
    try {
        await protectedApiClient.delete(`/slots/delete/${id}`)
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to delete slot");
        
    }
}

export const searchSlots = async(query:string)=>{
    try {
        const response= await protectedApiClient.get<SlotsResponse>(`/slots/search?q=${query}`)
        return response.data.data;
        
    } catch (error) {
        console.log(error);
        throw new Error("Failed to search slots");
        
    } 
}