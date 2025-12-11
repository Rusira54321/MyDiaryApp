'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
type editButtonProps = {
    id:number
}
const EditButton = ({id}:editButtonProps) => {
    const router = useRouter()
    const handleEdit = (id:number) =>{
        router.push(`/editNote/${id}`)
    }
  return (
      <button onClick={()=>handleEdit(id)} className="mt-8 px-6 py-2 rounded-lg text-lg font-mono text-white 
        bg-gradient-to-r from-purple-600 to-purple-800 
        hover:shadow-[0_0_20px_#a855f7] hover:scale-105 transition-all">
        Edit Note
      </button>
  )
}

export default EditButton
