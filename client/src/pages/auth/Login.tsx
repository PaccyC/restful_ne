import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import {  useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { loginSchema } from "@/schema";
import useAuthContext from "@/hooks/useAuthContext";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";


const Login = () => {

  const [passwordVisible,setPasswordVisible]= useState(false);
  
      const togglePasswordVisibility=()=>{
        setPasswordVisible(!passwordVisible)
      }
  
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
   
      email: "",
      password: "",
    },
  })

  const {login}= useAuthContext()
  
 
  async function onSubmit(values: z.infer<typeof loginSchema>) {
    try {
      
      await login(values.email,values.password)
    } catch (error) {
      console.log(error);
      alert("Invalid email or password")
       
    }
    
  }
  return (
    <div className="flex flex-col gap-6 w-full">

      <div className="w-full flex flex-col gap-2">
        <h3 className="font-bold text-4xl">Welcome Back!</h3>
        <p>Thank you for coming back, Please enter email and password to continue</p>

      </div>
      
       <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

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

export default Login
