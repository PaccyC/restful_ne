export type IAuthContext ={
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    } | null;
    setUser: React.Dispatch<React.SetStateAction<{
        id: string;
        email: string;
        name: string;
        role: string;
    } | null>>;
}

type User ={
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
  updatedAt: string;
}

type LoginResponse ={
  message: string;
  status: number;
  data: {
    user: User;
    token: string;
  };
}

type RegisterResponse ={
  message: string;
  status: number;
  data:{
    id:string;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    role:string;
    createdAt:string;
    updatedAt:string;
  }
}

export type Parking=  {
    code:string;
    parkingName: string;
    availableSpaces:number;
    chargingFeePerHour: number;
    
}

export type ParkingsResponse ={
  
  message: string;
  status: number;
  data:Parking[];
}

export type ParkingResponse= {
     code:string;
    parkingName: string;
    availableSpaces:number;
    chargingFeePerHour: number;
    location:string;
    userId:string
    
}

export type CreateParkingResponse ={
  message: string;
  status: number
  data: ParkingResponse;
}





