import React from 'react'

const TagInput = () => {
  return (
    <div>
    <div className='flex items-center gap-4 nt-3'>
        <input type="text" className='' placeholder='Add tags'/>
        <button className=''>
            <MdAdd className="text-2xl text-blue-700 hover:text-white"/>
        </button>
    </div>
    </div>
  )
}

export default TagInput
