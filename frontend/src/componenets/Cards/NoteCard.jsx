import React from 'react'
import { MdCreate, MdDelete, MdOutlinePushPin } from 'react-icons/md'

const NoteCard = ({title,
    date,
    content,
    tags,
    isPinned,
    onEdit,
    onDelete,
    onPinNote}) => {
  return (
    <div className='border rounded p-4 bg-white hover:shadow-xl transition-all ease-in-out outline-none'>
        <div className='flex items-center justify-between mt-2'>
        <div>
            <h6 className='text-sm font-medium'>{title}</h6>
            <span className='text-xs text-slate-500'>{date}</span>
        </div>

        <MdOutlinePushPin 
        className={`icon-btn ${isPinned ? "text-primary" :"text-slate-300"}`}
        onClick={onPinNote} />
      </div>

    <p className='text-xs text-slate-600 nt-2'>{content?.slice(0,60)}</p>

    <div className='flex items-center'>
      <div className='text-xs text-slate-500'>{tags}</div>

      <div className='flex items-center gap-2'>
        <MdCreate
        className='icon-btn hover:text-green-600'
        onClick={onEdit}/>

        <MdDelete
        className='icon-btn hover:text-red-500'
        onClick={onDelete}/>
      </div>
    </div>
    </div>
  )
}

export default NoteCard
