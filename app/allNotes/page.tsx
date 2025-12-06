import React from 'react';
import { prisma } from '../../lib/prisma';
import { FiFileText, FiClock } from "react-icons/fi";
import { MdNotes } from "react-icons/md";
import DeleteButton from '../components/DeleteButton';
export const dynamic = 'force-dynamic';

const Page = async () => {
  const notes = await prisma.post.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  });

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-20 bg-[#0a0c12] text-white p-10">

      {/* Header */}
      <header className="flex items-center justify-center gap-3 mb-10">
        <MdNotes className="text-cyan-400" size={40} />
        <h1 className="text-4xl font-extrabold tracking-wide text-cyan-400 drop-shadow-lg">
          All Notes
        </h1>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {notes && notes.length > 0 ? (
          notes.map((note, index) => (
            <div
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
    </div>
  );
};

export default Page;