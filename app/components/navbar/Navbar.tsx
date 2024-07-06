import React, { useState } from 'react';
import Link from 'next/link';
import { Menu } from '@headlessui/react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-8 mr-3" />
          <span className="font-bold text-xl text-blue-600">Clipto</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/">
            <a className="text-gray-700 hover:text-blue-600">Home</a>
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
                <Link href="/ai-transcription">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <span role="img" aria-label="AI Transcription">
                      📝
                    </span>{' '}
                    AI Transcription
                  </a>
                </Link>
                <Link href="/youtube-downloader">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <span role="img" aria-label="YouTube Downloader">
                      🎥
                    </span>{' '}
                    YouTube Downloader
                  </a>
                </Link>
                <Link href="/assets-smart-search">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <span role="img" aria-label="Assets Smart Search">
                      🔍
                    </span>{' '}
                    Assets Smart Search
                  </a>
                </Link>
                <Link href="/light-cut">
                  <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    <span role="img" aria-label="Light Cut">
                      ✂️
                    </span>{' '}
                    Light Cut
                  </a>
                </Link>
              </div>
            )}
          </div>
          <Link href="/pricing">
            <a className="text-gray-700 hover:text-blue-600">Pricing</a>
          </Link>
          <Link href="/join-affiliate">
            <a className="text-gray-700 hover:text-blue-600">Join Affiliate</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-700 hover:text-blue-600">Blog</a>
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <a className="text-blue-600 hover:text-blue-800 flex items-center">
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
            </a>
          </Link>
          <Link href="/start-free-trial">
            <a className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Start FREE Trial
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
