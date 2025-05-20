import { Request, Response } from "express";
import { LoginDto } from "../dtos";
import authService from "../services/auth.service";
import ApiResponse from "../utils/ApiResponse";


const login= async(req:Request,res:Response)=>{

    const body= req.body as LoginDto;
    try {
        
        const response= await authService.login(body);
        res.status(200).json(
            ApiResponse.success("User logged in successfully",200,response)
        )
    } catch (error) {
        console.log("Error: ",error);
        
    }
}

const authController= {
    login
}

export default authController;