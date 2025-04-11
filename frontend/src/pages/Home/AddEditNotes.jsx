import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <lable className="input-lable">TITLE
            <input 
            type="text" 
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go TO Gym At 5'/>
        </lable>
      </div>
    </div>
  )
}

export default AddEditNotes
