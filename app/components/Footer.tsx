import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">My Diary</h2>
          <p className="text-gray-400">
            Capture your thoughts, track your daily moments, and stay organized with My Diary.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-cyan-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/allNotes" className="hover:text-cyan-400 transition-colors duration-300">
                All Notes
              </Link>
            </li>
            <li>
              <Link href="/addNote" className="hover:text-pink-400 transition-colors duration-300">
                Add Note
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-cyan-400 transition-colors duration-300 text-2xl">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors duration-300 text-2xl">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors duration-300 text-2xl">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © 2025 My Diary. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
