import React from "react";
import { prisma } from "../../../lib/prisma";
import EditButton from "@/app/components/EditButton";
const Page = async (context: { params: Promise<{ id: string }> }) => {
  const NoteId = Number((await context.params).id);

  let note = null;
  let error = null;

  try {
    note = await prisma.post.findUnique({
      where: { id: NoteId },
    });
  } catch (err:unknown) {
    if(err instanceof Error)
    {
      error = err.message;
    }
    else{
    error = "Error when fetching data"
    }
  }

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-red-500 text-xl">
        Error: {error}
      </div>
    );

  if (!note)
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-purple-400 text-xl">
        Note not found.
      </div>
    );

return (
  <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0018] to-[#1a0033] flex items-center justify-center p-6">
    <div className="w-full max-w-2xl backdrop-blur-xl bg-black/40 border border-purple-600/40 shadow-[0_0_25px_#a855f7] rounded-2xl p-8 animate-fade-in">

      {/* Title */}
      <h1 className="text-4xl font-bold text-purple-300 font-mono tracking-wider drop-shadow-[0_0_6px_#a855f7]">
        {note.title}
      </h1>

      {/* Created Date */}
      <p className="text-sm text-purple-400 mt-2 font-mono">
        🕒 {new Date(note.createdAt).toLocaleString()}
      </p>

      {/* Divider */}
      <div className="h-[2px] w-full bg-gradient-to-r from-purple-500 to-blue-500 my-4 shadow-[0_0_12px_#6366f1]"></div>

      {/* Content */}
      <p className="text-purple-200 text-lg font-mono leading-relaxed whitespace-pre-line">
        {note.content}
      </p>

      <EditButton id={note.id}/>

    </div>
  </div>
);

};

export default Page;
