import LeftBar from "@/components/LeftBar"
import TopBar from "@/components/TopBar"
import { Outlet } from "react-router-dom"

const RootLayout = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-row">
      <div className="w-[20%] h-full pr-6 hidden md:flex">
        <LeftBar/>
      </div>

      <div className="w-full md:w-[80%] min-h-screen flex flex-col gap-0 items-start bg-gray-100">
         <TopBar/>
        <Outlet/>
      </div>
      
    </main>
  )
}

export default RootLayout
