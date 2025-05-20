import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import  { registrationSchema } from "@/schema";
import { register } from "@/api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FiEye,FiEyeOff } from 'react-icons/fi'


const Register = () => {
  const navigate= useNavigate();
  const [registrationFailed,setRegistrationFailed]= useState(false)

   const [passwordVisible,setPasswordVisible]= useState(false);

    const togglePasswordVisibility=()=>{
      setPasswordVisible(!passwordVisible)
    }

  const form = useForm<z.infer<typeof registrationSchema>>({
      resolver: zodResolver(registrationSchema),
      defaultValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
    })
   
   async function onSubmit(values: z.infer<typeof registrationSchema>) {
      
    try {
      const response= await register(values.firstName,values.lastName,values.email,values.password);
       if(response.status === 201){
  
        setRegistrationFailed(false)
        alert("Registration successful");
        navigate("/login")
        
       }
       else{
        setRegistrationFailed(true)
        alert("Registration failed");
       }


      
    } catch (error) {
      
    }
    }
  return (
   
    <div className="flex flex-col gap-6">

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-bold text-3xl lg:text-4xl">Create New Account</h3>
        <p>Manage your parking with ease and book your car's place in the parking</p>

      </div>
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First name</FormLabel>
              <FormControl>
                <Input placeholder="Paccy" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last name</FormLabel>
              <FormControl>
                <Input placeholder="Aime" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="paccy@gmail.com" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
               <div className="w-full relative flex items-center">
                <Input 
                type={passwordVisible ? "text" : "password"}
                placeholder="Aime123!" {...field}
                className=""
                />
                <button type="button" onClick={togglePasswordVisibility} className="absolute right-2">
                  {passwordVisible ? <FiEyeOff /> : <FiEye />}
                </button>
                </div> 
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
        
     )
   
}

export default Register
