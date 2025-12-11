import React from 'react';
import { prisma } from '../../lib/prisma';
import { MdNotes } from "react-icons/md";
import AllNotes from "../components/AllNotes"
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
      <AllNotes notes={notes}/>
    </div>
  );
};

export default Page;