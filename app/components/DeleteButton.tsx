'use client'
import React from 'react'
type DeleteButtonProps = {
    id:number;
}
const DeleteButton = ({id}:DeleteButtonProps) => {
  const handleDelete = async() =>{
        
  }
  return (
   <button onClick={handleDelete} className='bg-red-500 hover:bg-red-600 rounded-2xl px-2 cursor-pointer'>Delete</button>
  )
}

export default DeleteButton
