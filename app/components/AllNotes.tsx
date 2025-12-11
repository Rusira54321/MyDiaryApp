'use client'
import React from 'react'
import DeleteButton from '../components/DeleteButton';
import { FiFileText, FiClock } from "react-icons/fi";
import { useRouter } from 'next/navigation';
type notesType = {
    notes:[
        {
            id:number,
            title:string,
            content:string,
            createdAt:Date,
            updatedAt:Date | null
        }
    ]
}

const AllNotes = ({notes}:notesType) => {
    const router = useRouter()
    const handleSubmit = (id:number) =>{
        router.push(`/oneNote/${id}`)
    }
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <div
              onClick={()=>handleSubmit(note.id)}
              key={index}
              className="bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-cyan-500/20 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-300"
            >
              {/* Title */}
              <div className="flex items-center gap-2 mb-3">
                <FiFileText size={20} className="text-cyan-300" />
                <h2 className="text-xl font-semibold text-cyan-300">
                  {note.title}
                </h2>
              </div>

              {/* Created date */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <FiClock size={16} />
                <span>
                  {new Date(note.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className='mt-3'>
              <DeleteButton id={note.id}/>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-400 col-span-full text-center text-lg mt-10">
            No notes found.
          </p>
        )}
      </div>
     
  )
}

export default AllNotes
