import React, { useState } from 'react'

import { Link } from 'react-router-dom'
import Navbar from '../../componenets/Navbar/Navbar'
import PasswordInput from '../../componenets/Input/Password'

const Login = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [error , setError] = useState(null);

const handleLogin = async (e) => {
  e.preventDefault();
}
  return (
<>
<Navbar />
<div className='flex items-center justify-center mt-28'>
  <div className='w-96 border rounded bg-white px-7 py-10'>
    <form onSubmit={{handleLogin}}>
      <h4 className='text-2xl mb-7'>Login</h4>
      <input 
      type="text" 
      placeholder='Email' 
      className='input-box' 
      value={email}
      onChange={(e) =>setEmail(e.target)}
      />
      
      <PasswordInput 
      value = {password}
      onChange={(e) =>setPassword(e.target.value)}
      />

      <button type='submit' className='btn-primary'>
        Login
      </button>

      <p className='text-sm text-center mt-4'>
        Note registered yet? {" "}
        <Link to="/signUp" className='font-medium text-primary underline'>
        Create an Account
        </Link>
      </p>
    </form>
  </div>
</div>
</>
    
  )
}

export default Login
