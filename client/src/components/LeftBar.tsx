import { useState } from "react"
import { Link } from "react-router-dom"

// constants.ts or wherever your data is
import {
  MdDashboard,
  MdEventSeat,
  MdPeople,
  MdRateReview,
  MdAssessment,
  MdSettings,
  
} from "react-icons/md";
import { FaSignOutAlt } from "react-icons/fa";
import useAuthContext from "@/hooks/useAuthContext";



const navBarLinks = [
  {
    id: 1,
    title: "Dashboard",
    route: "/",
    icon: MdDashboard,
  },
  {
    id: 2,
    title: "Bookings",
    route: "/bookings",
    icon: MdEventSeat,
  },
  {
    id: 3,
    title: "Customers",
    route: "/customers",
    icon: MdPeople,
  },
  {
    id: 4,
    title: "Reviews",
    route: "/reviews",
    icon: MdRateReview,
  },
  {
    id: 5,
    title: "Reports",
    route: "/reports",
    icon: MdAssessment,
  },
];



const LeftBar = () => {
    const [isActive,setIsActive]= useState("Dashboard");

    const {logout}= useAuthContext();

    const handleLogout = ()=>{
      logout();
    }


  return (
    <div className="w-full min-h-screen pt-4 pb-12 flex flex-col justify-between">
        <div className="w-full flex flex-col gap-4">
            <div className="w-full px-6">
             <h2 className="text-3xl font-bold">CarPark</h2>
            </div>

            <div className="w-full flex flex-col gap-4">
                {navBarLinks.map((link)=>{
                    const Icon=link.icon;
                    return(
                    <Link 
                    onClick={()=>setIsActive(link.title)}
                    key={link.id} 
                    to={link.route}>
                        <div className={`w-full pl-6 py-2 rounded-r-lg ${isActive === link.title ? "bg-blue-300/10 ": "bg-transparent"} flex gap-3 items-center`}>
                       <Icon fill="#4a5565"/>
                        <h4>{link.title}</h4>
                           
                        </div>
                    </Link>
                )})}
            </div>

        </div>

        <div className="w-full px-6 flex flex-col gap-4">
            <Link to="/settings">
            <div className="w-full flex gap-3 items-center">
                <MdSettings fill="#4a5565"/>
                <h4>Settings</h4>
            </div>
            </Link>
            <Link onClick={handleLogout} to="/login">
            <div className="w-full flex gap-3 items-center">
                <FaSignOutAlt fill="#4a5565"/>
                <h4>Log out</h4>
            </div>
            </Link>
            
        </div>
      
    </div>
  )
}

export default LeftBar
