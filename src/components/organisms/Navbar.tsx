"use client";

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-block transition-colors hover:brightness-90">
              <img
                src="/logo.svg"
                alt="SEA Catering"
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="/" className="text-gray-900 hover:text-amber-950 px-3 py-2 text-sm font-medium transition-colors relative group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="/menu" className="text-amber-950 hover:text-sky-700 px-3 py-2 text-sm font-medium transition-colors relative group">
                Menu
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform scale-x-100"></span>
              </a>
              <a href="/subscription" className="text-gray-900 hover:text-amber-950 px-3 py-2 text-sm font-medium transition-colors relative group">
                Subscription
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              <a href="/contact" className="text-gray-900 hover:text-amber-950 px-3 py-2 text-sm font-medium transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
              </a>
              {session && (
                <>
                  <a href="/dashboard/user" className="text-gray-900 hover:text-amber-950 px-3 py-2 text-sm font-medium transition-colors relative group">
                  Dashboard
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-800 transform scale-x-0 transition-transform group-hover:scale-x-100"></span>
                  </a>
                  {/* @ts-ignore */}
                  {session.user?.role === 'ADMIN' && (
                    <Link href="/dashboard/admin" className="text-purple-600 hover:text-purple-800 font-semibold">
                      Admin
                    </Link>
                  )}
                </>
              )}
              <a href="/login" className="bg-amber-800 text-white hover:bg-amber-950 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Login
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-amber-950 p-2 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <a href="/" className="text-gray-900 hover:text-amber-950 block px-3 py-2 text-base font-medium transition-colors">
                Home
              </a>
              <a href="/menu" className="text-amber-950 block px-3 py-2 text-base font-medium">
                Menu
              </a>
              <a href="/subscription" className="text-gray-900 hover:text-amber-950 block px-3 py-2 text-base font-medium transition-colors">
                Subscription
              </a>
              <a href="/contact" className="text-gray-900 hover:text-amber-950 block px-3 py-2 text-base font-medium transition-colors">
                Contact
              </a>
              <a href="/login" className="bg-amber-800 text-white hover:bg-amber-950 block px-3 py-2 rounded-lg text-base font-medium transition-colors mt-2">
                Login
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;