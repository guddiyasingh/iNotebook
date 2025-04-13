import React from 'react'

const AddEditNotes = () => {
  return (
    <div>
      <div className='flex flex-col gap-2'>
        <lable className="input-lable">TITLE </lable>
            <input 
            type="text" 
            className='text-2xl text-slate-950 outline-none'
            placeholder='Go TO Gym At 5'/>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
            <lable className="input-lable">CONTENT</lable>
        <textarea
        type="text"
        className='text-sm text-slate-950 outline-none bg-slate-50 p-2 rounded'
        placeholder='Content'
        rows={6}
        />
      </div>
      <div className='mt-3'>
      <lable className="input-lable">TAGS</lable>
      <TagInput />
     </div>
     <button className='btn-primary font-medium mb-10 p-3' onClick={() =>{}}>
      ADD</button>
    </div>
  )
}

export default AddEditNotes
