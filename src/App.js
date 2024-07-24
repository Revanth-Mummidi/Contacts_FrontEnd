import React from 'react'
import { RouterProvider } from 'react-router-dom';
import { router } from './router';


const App = () => {
  return (
    <div className='min-h-screen overflow-x-hidden font-poppins'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App