import React from 'react'
import  {useState} from "react";
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"


const PasswordInput = ({value, onChange, placeholder}) => {

    const [isShoePassword,setIsShowPassword] = useState(false);
 const toggleShowPassword = () => {

    setIsShowPassword(! isShoePassword);
 };

  return (
   

    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
      <input
      value={value}
      onChanage={onChange}
      type={isShoePassword ? "text" : "password"}
      placeholder={placeholder || "password"}
      className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
      />
     {isShoePassword ? (
      <FaRegEye
      size = {22}
      className = "text-primary cursor-pointer"
      onClick ={() =>toggleShowPassword() } />
     ) : (
      <FaRegEyeSlash
      size = {22}
      className = "text-slate-400 cursor-pointer"
      onClick ={() =>toggleShowPassword() } />
     )}
      
    </div>
  )
}

export default PasswordInput
