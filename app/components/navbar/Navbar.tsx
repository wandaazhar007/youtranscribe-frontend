'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md h-[84px] flex items-center justify-between">
      <div className="container mx-auto px-4 flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl text-blue-600 ml-2">Clipto</span>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-600">Home</span>
          </Link>
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 flex items-center"
            >
              Tools
              <svg
                className="w-5 h-5 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-white border rounded shadow-lg">
                <Link href="/ai-transcription" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    📝 AI Transcription
                  </span>
                </Link>
                <Link href="/youtube-downloader" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    🎥 YouTube Downloader
                  </span>
                </Link>
                <Link href="/assets-smart-search" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    🔍 Assets Smart Search
                  </span>
                </Link>
                <Link href="/light-cut" passHref>
                  <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                    ✂️ Light Cut
                  </span>
                </Link>
              </div>
            )}
          </div>
          <Link href="/pricing" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-600">Pricing</span>
          </Link>
          <Link href="/join-affiliate" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-600">Join Affiliate</span>
          </Link>
          <Link href="/blog" passHref>
            <span className="cursor-pointer text-gray-700 hover:text-blue-600">Blog</span>
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login" passHref>
            <span className="cursor-pointer text-blue-600 hover:text-blue-800 flex items-center">
              <svg
                className="w-5 h-5 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12H3m12 0l-4-4m4 4l-4 4m14 0v-4a2 2 0 00-2-2h-3.5a1.5 1.5 0 000-3h3.5a5 5 0 015 5v4a5 5 0 01-5 5h-3.5a1.5 1.5 0 000 3H19a2 2 0 002-2z"
                ></path>
              </svg>
              Log In
            </span>
          </Link>
          <Link href="/start-free-trial" passHref>
            <span className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start FREE Trial
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center p-4">
          <div className="w-full flex justify-between items-center mb-4">
            <Image src="/logo.png" alt="Logo" width={32} height={32} />
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <Link href="/" passHref>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Home
            </span>
          </Link>
          <Link href="/tools" passHref>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Tools
              <svg
                className="w-5 h-5 ml-1 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </span>
          </Link>
          <Link href="/pricing" passHref>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Pricing
            </span>
          </Link>
          <Link href="/join-affiliate" passHref>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Join Affiliate
            </span>
          </Link>
          <Link href="/blog" passHref>
            <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              Blog
            </span>
          </Link>
          <Link href="/login" passHref>
            <span className="block px-4 py-2 text-blue-600 hover:bg-gray-100 cursor-pointer">
              Log In
            </span>
          </Link>
          <Link href="/start-free-trial" passHref>
            <span className="block cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start FREE Trial
            </span>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;