import type { IAuthContext, LoginResponse } from "@/types";
import React, { createContext, useEffect } from "react";
import { apiClient } from "@/config/apiClient";


export const AuthContext= createContext<IAuthContext | null>(null);


const AuthProvider= ({children}:{children:React.ReactNode})=>{



    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [user, setUser] = React.useState<{
        id: string;
        email: string;
        name: string;
        role: string;
    } | null>(null);

     useEffect(() => {
        const storedUser = localStorage.getItem('user');
            if (storedUser) {
                const userData = JSON.parse(storedUser);
                const fullName = `${userData.firstName.trim()} ${userData.lastName.trim()}`;
                setUser({
                id: userData.id,
                email: userData.email,
                name: fullName,
                role: userData.role,
                });
                setIsAuthenticated(true);
            }
  }, []);



    
    const login= async(email:string,password:string)=>{
        try {
            
            const response= await apiClient.post<LoginResponse>("/auth/login",{
                email,
                password
            })
            
            const userData = response.data.data.user
             const token = response.data.data.token;

            const fullName = `${userData.firstName.trim()} ${userData.lastName.trim()}`;

            setUser({
        id: userData.id,
        email: userData.email,
        name: fullName,
        role: userData.role,
      });
      setIsAuthenticated(true);
      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(userData));

        } catch (error) {
            console.log(error);
            
        }

    }
    const logout = ()=>{
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        setUser(null)
    }
    return <AuthContext.Provider value={{isAuthenticated,login,logout,user,setUser}}>
        {children}
    </AuthContext.Provider>


}


export default AuthProvider;
