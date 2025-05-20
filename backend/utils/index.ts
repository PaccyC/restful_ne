import jwt from 'jsonwebtoken';


export const createToken= (payload:any)=>{
    return jwt.sign(payload,process.env.JWT_SECRET_KEY as string)
} 