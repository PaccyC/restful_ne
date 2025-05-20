import { z } from "zod";


export const registrationSchema = z.object({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
    lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters.",
}).max(30)

})



export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string({message: "Password is required"})

})


export const createparkingSchema = z.object({
    code: z.string(),
    parkingName: z.string(),
    availableSpaces: z.number(),
    location: z.string(),
    chargingFeePerHour: z.number(),
})