import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"
import {toast,ToastContainer} from "react-toastify"

function Register() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [name,setName]=useState("");
  const navigation=useNavigate();
  const handleRegister=async()=>{
    
    try{
      const MAIN_URL=process.env.REACT_APP_BASE_URL+"/api/users/register";
      const body = {
        username:name,
        email,
        password
      };
      console.log("MAIN URL=",MAIN_URL);
      console.log("BODY=",body);
      const response = await axios.post(MAIN_URL,body);
      alert("You have registered Successfully, You can login now")
      navigation("/login");
      console.log(response);

    }
    catch(err){
      alert("Invalid credentials")
      console.log(err);
    }
  }
  return (
    <div className='flex flex-col w-[50vw] max-w-[500px] min-w-[380px] justify-between border shadow-black overflow-hidden  bg-white shadow-2xl border-sky-100 rounded-md  '>
      
      <p className='text-white text-2xl text-center bg-slate-900 p-5'>Register</p>
      <div className='w-full bg-white h-[1px] '>

      </div>
      <div className=''>
      <div className='flex flex-row text-lg font-semibold  items-center p-5 gap-2'>
        <p className=' text-black w-[30%] text-nowrap'>User Name : </p>
        <input onChange={(e)=>{
          setName(e.target.value)
        }} 
        value={name}
        type='text' className='w-[70%] font-normal text-md  text-black border-black border rounded-md border-1 p-2'>
         </input>
      </div>
      <div className='flex flex-row text-lg font-semibold  items-center p-5 gap-2'>
        <p className=' text-black w-[30%] text-nowrap'>Email : </p>
        <input onChange={(e)=>{
          setEmail(e.target.value)
        }} 
        value={email} type='email' className='w-[70%] font-normal text-md  text-black border-black border rounded-md border-1 p-2'>
         </input>
      </div>
      <div className='flex flex-row text-lg font-semibold  items-center p-5 gap-2'>
        <p className=' text-black w-[30%] text-nowrap'>Password : </p>
        <input onChange={(e)=>{
          setPassword(e.target.value)
        }} 
        value={password} type='password' className='w-[70%] font-normal text-md  text-black border-black border border-1 rounded-md p-2'>
         </input>
      </div>
      <div className='flex w-full items-center justify-center gap-2 mb-4 '>
        <p>Already have an account? 
        </p>
          <Link to={"/login"} className='font-bold'>Login</Link>
      </div>
      <div className='w-full flex justify-center mb-4'>

      <div onClick={()=>{
        handleRegister();
      }} className='px-7 py-3 bg-blue-600 cursor-pointer shadow-md shadow-black text-white font-semibold rounded-lg flex items-center justify-center self-center w-[90px]'>
        <p>Register</p>
      </div>
      </div>
      

      </div>

    </div>
  )
}

export default Register