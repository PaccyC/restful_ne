import * as bcrypt from  'bcryptjs'
import prisma from '../prisma/prisma-client';
import { LoginDto } from '../dtos';
import { createToken } from '../utils';


const login= async(loginDto:LoginDto)=>{
    try {
        
        const user= await prisma.user.findUnique({
        where:{
            email: loginDto.email
        }
        })

         if(!user) throw new Error("Invalid email or password!");

        const matches= await bcrypt.compare(loginDto.password,user.password)
        if(!matches) throw new Error("Invalid email or password!");

        // Create token
        const payload= {
            id: user.id,
            email:user.email
        }

        const token =  createToken(payload);

        return {user,token}
    } catch (error) {
        console.log("Error: ",error);
        throw new Error("Error: "+error)
        
    }

}

const authService= {
    login
}

export default authService;