import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <main className="w-full min-h-screen bg-white flex items-center justify-center flex-1 px-6 lg:px-16">
      <div className="flex-1/2 h-full bg-white hidden lg:flex items-center justify-center">
        <img src="/assets/images/car.png" className="w-96 h-96 object-contain"/>
      </div>
      <div className="flex-1/2 h-full bg-white flex items-center justify-center">
       <Outlet/>
      </div>
    </main>
  )
}

export default AuthLayout
