import { Request, Response } from "express"
import { CreateParkingDto } from "../dtos"
import { parkingService } from "../services/parking.service";
import ApiResponse from "../utils/ApiResponse";




 const createParking= async(req:Request,res:Response)=>{

     const body= req.body as CreateParkingDto;
    try {
        
        const response= await parkingService.createParking(body)
        res.status(201).json(
            ApiResponse.success(
                "Parking created successfully",
                201,
                response
            )
        )
    } catch (error) {
        
        res.status(500).json(
            ApiResponse.error(
                "Failed to create parking",500
            )
        )
    }
}

const getAllParkings= async(req:Request,res:Response) =>{
    try {
        
        const response= await parkingService.getParkings();
         res.status(200).json(
            ApiResponse.success(
                "Parking retrieved successfully",
                200,
                response
            )
        )
    } catch (error) {
         res.status(500).json(
            ApiResponse.error(
                "Failed to get parkings",500
            )
        )
    }
}

export const parkingsController= {
    createParking,
    getAllParkings
}