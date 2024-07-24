import React from 'react'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

function AuthLayout() {
  return (
    <div className="min-h-screen relative flex items-center min-w-screen">
     
    <img src="https://img.freepik.com/free-photo/vintage-pink-telephone-composition_23-2148913955.jpg" alt="background image"  className='h-full w-full blur-sm absolute object-fit' />
    <div className='mx-auto z-10'>

      <Outlet/>
    </div>
    </div>
  )
}

export default AuthLayout
