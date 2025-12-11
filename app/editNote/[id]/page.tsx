'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
const EditNote = (context:{params:Promise<{id:string}>}) => {
  const [Note,setNote] = useState({})
  const [success,setSuccess] = useState("")
  const [error,setError] = useState("")
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")
  const handleSubmit = async(e:FormEvent) =>{
    e.preventDefault()
    const NoteId = (await (context.params)).id
    if(NoteId)
        {
            try{
                await axios.post(`/api/Note/update/${NoteId}`,{
                    title,
                    content
                })
                setSuccess("Edit successful");
            }catch(err)
            {
                setError("Error when editing");
            }
        }
    }
  useEffect(()=>{
    const getNoteDetails = async() =>{
        const NoteId = (await (context.params)).id
        await axios.get(`/api/Note/get/${NoteId}`).then((res)=>{
            setNote(res.data.note)
            setTitle(res.data.note.title)
            setContent(res.data.note.content)
        }).catch((err:unknown)=>{
            if (axios.isAxiosError(err)) {
                setError(err?.response?.data?.error || 'Axios error occurred');
            } else if (err instanceof Error) {
                setError(err?.message);
            } else {
                setError('Something went wrong');
            }
        })
    }
    getNoteDetails()
  },[])
  
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)] flex justify-center items-center">
      <div className="w-full max-w-md p-8 rounded-2xl  
                      bg-white/5 backdrop-blur-xl 
                      border border-cyan-400/30
                      shadow-[0_0_30px_#22d3ee]">

        <h1 className="text-3xl font-bold text-center mb-4 
                       text-cyan-400 tracking-widest">
          Edit NOTE
        </h1>

        {/* Success/Error Messages */}
        {success && <p className="text-green-400 text-center mb-4">{success}</p>}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 tracking-wide">TITLE</label>
            <input 
              required
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              type="text"
              name='title'
              placeholder="Enter note title"
              className="px-4 py-2 rounded-lg bg-black/60
                         border border-cyan-400/30
                         text-white outline-none
                         focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400
                         transition"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 tracking-wide">CONTENT</label>
            <textarea 
              placeholder="Write your note..."
              rows={4}
              onChange={(e)=>setContent(e.target.value)}
              value={content}
              required
              name='content'
              className="px-4 py-2 rounded-lg bg-black/60
                         border border-pink-400/30
                         text-white outline-none
                         focus:border-pink-400 focus:ring-1 focus:ring-pink-400
                         transition resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 py-3 rounded-lg font-bold tracking-widest
                       bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-500
                       hover:scale-105 transition-transform
                       shadow-[0_0_20px_#22d3ee]
                       text-black"
          >
            ⚡ Edit NOTE
          </button>

        </form>
      </div>
    </div>
  )
}

export default EditNote