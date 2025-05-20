import type {RegisterResponse } from "@/types";
import { apiClient } from "@/config/apiClient";

export const register =async (firstName:string,lastName:string,email:string,password:string)=>{
    try {
        
        const response= await apiClient.post<RegisterResponse>("/user/create",{
            firstName,
            lastName,
            email,
            password
        })

        return response

    } catch (error) {
        console.log(error);
        throw new Error("Registration failed");
        
    }


}