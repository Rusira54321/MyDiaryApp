import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between 
                       bg-gradient-to-r from-gray-900 via-gray-800 to-black 
                       text-white px-6 py-4 shadow-lg h-16 border-b-amber-50">
      
      {/* Logo / App Title */}
      <Link href={'/'} className="text-3xl font-bold tracking-wide text-shadow-white">
        My Diary
      </Link>

      {/* Navigation Links */}
      <nav className="flex gap-8 text-lg font-semibold">
        <Link 
          href="/allNotes" 
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-cyan-400 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-cyan-400 hover:before:w-full before:transition-all"
        >
          View Notes
        </Link>

        <Link 
          href="/addNote" 
          className="relative px-3 py-2 transition-all duration-300 text-white hover:text-pink-400 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-pink-400 hover:before:w-full before:transition-all"
        >
          Add Note
        </Link>
      </nav>
    </header>
  );
};

export default Header;
