import React from 'react'
import React, {useState} from "react";
const Password = ({value, onChange, placeholder}) => {

    const [isShoePassword,setIsShowPassword] = useState(false);
 const toggleShowPassword = () => {

    setIsShowPassword(! isShoePassword);
 };

  return (
   

    <div className='flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3'>
      PasswordInput
      <input
      value={value}
      onChanage={onChange}
      type={isShoePassword ? "text" : "password"}
      placeholder={placeholder || "password"}
      className='w-full text-sm bg-transparent py-3 mr-3 rounded outline-none'
      />

      <FaRegEye
      size = {22}
      className = "text-primary cursor-pointer"
      onclick ={() =>toggleShowPassword() } />
    </div>
  )
}

export default Password
