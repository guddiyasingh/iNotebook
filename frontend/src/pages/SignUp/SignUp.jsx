import React from 'react'
import Navbar from '../../componenets/Navbar/Navbar'

const SignUp = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
  };
  return (
    <>
    
  <Navbar />
<div className='flex items-center justify-center mt-28'>
  <div className='w-96 border rounded bg-white px-7 py-10'>
    <form onSubmit={handleSignUp}>
      <h4 className='text-2xl mb-7'>SignUp</h4>

      <input 
      type="text" 
      placeholder='Email' 
      className='input-box' 
      // value={email}
      // onChange={(e) =>setEmail(e.target.value)}
      />
      </form>
    </div>
    </div>
    
    </>
  )
}

export default SignUp
