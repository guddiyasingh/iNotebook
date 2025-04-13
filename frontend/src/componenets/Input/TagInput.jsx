import React from 'react'
import {MdAdd, MdClose} from "react-icons/md";


const TagInput = ({tags,setTags}) => {

    const [inputValue, setInputValue] = useState("");
    const handleInputChange=(e) =>{
        ssetInputValue(e.target.value);
    }

  return (
    <div>
    <div className='flex items-center gap-4 nt-3'>
        <input type="text" className='text-sm bg-transparent border px-3 py-2 rounded outline-none'
         placeholder='Add tags'
         onChange={handleInputChange}
         />
        <button className='w-8 h-8 flex items-center justify-center border border-blue-700 hover:bg-blue-700'>
            <MdAdd className="text-2xl text-blue-700 hover:text-white"/>
        </button>
    </div>
    </div>
  )
}

export default TagInput
