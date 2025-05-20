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

export type Slot=  {
  id:string;
    slotNumber: string;
    floor:number;
    status: string;
    type:string;
}

export type SlotsResponse ={
  
  message: string;
  status: number;
  data:Slot[];
}

export type ParkingSession= {
  id:number;
  slotId:string;
  userId:string;
  status:string;
  startTime:string;
  endTime:string;
  date:string;
  duration:number;
  totalFee:number;

  createdAt:string;
  updatedAt:string;
}

export type RequestParkingSessionResponse ={
  message: string;
  status: number
  data: ParkingSession;
}

export type GetParkingSessionRequestsResponse ={
  message: string;
  status: number;
  data: ParkingSession[];
}
export type ApproveParkingSessionRequestsResponse ={
  message: string;
  status: number;
  data: ParkingSession;
}

export interface BookParkingSessionDto {
  userId: string;
  slotId: string;
  date: string;
  startTime: string;
  endTime: string;
}