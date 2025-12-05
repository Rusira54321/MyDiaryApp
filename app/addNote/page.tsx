import React from 'react'

const Page = () => {
  return (
    <div className="pt-16 min-h-[calc(100vh-4rem)] flex justify-center items-center">

      {/* Neon Glass Card */}
      <div className="w-full max-w-md p-8 rounded-2xl  
                      bg-white/5 backdrop-blur-xl 
                      border border-cyan-400/30
                      shadow-[0_0_30px_#22d3ee]">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 
                       text-cyan-400 tracking-widest">
          ADD NEW NOTE
        </h1>

        <form className="flex flex-col gap-6">

          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 tracking-wide">
              TITLE
            </label>
            <input 
              type="text"
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
            <label className="text-sm text-gray-300 tracking-wide">
              CONTENT
            </label>
            <textarea 
              placeholder="Write your note..."
              rows={4}
              className="px-4 py-2 rounded-lg bg-black/60
                         border border-pink-400/30
                         text-white outline-none
                         focus:border-pink-400 focus:ring-1 focus:ring-pink-400
                         transition resize-none"
            />
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-300 tracking-wide">
              DATE & TIME
            </label>
            <input 
              type="datetime-local"
              className="px-4 py-2 rounded-lg bg-black/60
                         border border-purple-400/30
                         text-white outline-none
                         focus:border-purple-400 focus:ring-1 focus:ring-purple-400
                         transition"
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
            ⚡ ADD NOTE
          </button>

        </form>
      </div>
    </div>
  )
}

export default Page

