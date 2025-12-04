import Link from "next/link";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
      
      {/* Welcome Section */}
      <h1 className="text-5xl md:text-6xl font-bold neon-text text-center mb-6">
        Welcome to My Diary
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-300 mb-10 max-w-xl">
        Capture your thoughts, track your daily moments, and stay organized. All your notes in one place.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-6 z-10">
        <Link 
          href="/addNote"
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg shadow-lg hover:bg-cyan-400 transition-all duration-300 neon-button"
        >
          Add Note
        </Link>

        <Link 
          href="/allNotes"
          className="px-6 py-3 bg-pink-500 text-black font-semibold rounded-lg shadow-lg hover:bg-pink-400 transition-all duration-300 neon-button"
        >
          View Notes
        </Link>
      </div>

      {/* Optional Background Glow / Neon Decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute bg-cyan-500 rounded-full blur-3xl opacity-20 w-72 h-72 -top-20 -left-20 animate-pulse"></div>
        <div className="absolute bg-pink-500 rounded-full blur-3xl opacity-20 w-96 h-96 -bottom-28 -right-32 animate-pulse"></div>
      </div>
    </div>
  );
}
