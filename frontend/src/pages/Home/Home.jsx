import React from 'react'
import Navbar from '../../componenets/Navbar/Navbar'
import NoteCard from '../../componenets/Cards/NoteCard'

const Home = () => {
  return (
    <>
   <Navbar /> 

   <div className='container mx-auto'>
    
<div className='grid grid-cols-3 gap-4 mt-8'>
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
    </>
  );
}

export default Home
