import { Request, Response } from "express";
import { RegisterDto } from "../dtos";
import adminService from "../services/admin.service";
import ApiResponse from "../utils/ApiResponse";


const signup = async(req:Request,res:Response) =>{
    const body= req.body as RegisterDto;
    
    try {
        const response= await adminService.signup(body);
        res.status(201).json(
            ApiResponse.success("Admin registered successfully",201,response)
        )
    } catch (error) {
        console.log('error: ',error);
        
    }
}

const getUsers= async (req:Request,res:Response)=>{
    const response= await adminService.getUsers();

     res.status(200).json(
        ApiResponse.success("Users retrieved successfully",200,response)
     )
}
const adminController ={
    signup,
    getUsers
}


export default adminController;