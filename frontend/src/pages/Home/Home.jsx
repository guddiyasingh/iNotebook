import React from 'react'
import Navbar from '../../componenets/Navbar/Navbar'
import NoteCard from '../../componenets/Cards/NoteCard'

import AddEditNotes from './AddEditNotes';
import { MdAdd } from 'react-icons/md';

const Home = () => {
  return (
    <>
   <Navbar /> 

   <div className='container mx-auto '>
    <div className='grid grid-cols-3 gap-14 mt-8 ml-15 '>
    <NoteCard 
    title="Meeting on 7th April" 
    date="3rd Apr 2024" 
    content="Meeting on 7th April"
    tags= "#Meeting"
    isPinned ={true}
    onEdit={()=> {} }
    onDelete={()=> {}}
    onPinNote={()=> {}}
    />
   </div>
   </div>

   <button className='w-16 h-16 flex items-center justify-center rounded-2xl
   bg-blue-400 hover:bg-blue-600 absolute right-10 bottom-10 mt-160 '>
   
    <MdAdd className="text-[32px] text-white" />
   </button>
   <AddEditNotes/>
    </>
  );
}

export default Home
