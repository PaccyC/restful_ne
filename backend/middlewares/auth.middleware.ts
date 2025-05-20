import { NextFunction, Request, Response } from "express";
import jwt from 'jsonwebtoken'
import prisma from "../prisma/prisma-client";


interface CustomRequest extends Request {
    user?:any;
}

interface DecodedToken{
 id:string;
 email: string;
}

export const checkAuth= async(req:CustomRequest,res:Response,next:NextFunction)=>{
    try {
        const authHeader= req.headers.authorization;

        if(authHeader != null && authHeader.startsWith("Bearer ")){
           const token= authHeader.split(" ")[1];
           const decodedToken= jwt.verify(token,process.env.JWT_SECRET_KEY as string) as DecodedToken

           console.log("Decoded token",decodedToken);
           

        //    Find user
        const user= await prisma.user.findUnique({
            where:{
                id:decodedToken.id
            }
        })
        if(!user) return;
        req.user=decodedToken;

        next();
        
        }
    } catch (error) {
        console.log(error);
        
    }

}

export const checkAdmin= async(req:CustomRequest,res:Response,next:NextFunction)=>{

    try {
        const authHeader= req.headers.authorization;

        if(authHeader != null && authHeader.startsWith("Bearer ")){
           const token= authHeader.split(" ")[1];
           const decodedToken= jwt.verify(token,process.env.JWT_SECRET_KEY as string) as DecodedToken

        //    Find user
        const user= await prisma.user.findUnique({
            where:{
                id:decodedToken.id
            }
        })
        if(!user) return
        
        if(user.role !== "ADMIN") return
        
        req.user= decodedToken;
        next();
        
        }
    } catch (error) {
        console.log(error);
        res.status(401).json({error:"Authentication required"})
        
    }

}


