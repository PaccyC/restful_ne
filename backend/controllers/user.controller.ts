import { Request, Response } from "express";
import userService from "../services/user.service";
import { RegisterDto } from "../dtos";
import ApiResponse from "../utils/ApiResponse";


const signup = async(req:Request,res:Response) =>{
    const body= req.body as RegisterDto;
    
    try {
        const response= await userService.signup(body);
        res.status(201).json(
            ApiResponse.success("User registered successfully",201,response)
        )
    } catch (error) {
        console.log('error: ',error);
        
}
}


const userController ={
    signup
}

export default userController;