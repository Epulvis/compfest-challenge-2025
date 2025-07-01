"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Icon from '../atoms/Icon';

export default function Navbar() {
  const pathname = usePathname(); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/contact', label: 'Contact' },
    { href: '/login', label: 'Login' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ... Logo ... */}
        <Link href="/" className="md:h-6 text-2xl font-bold text-gray-800">
            <img src="/logo.svg" alt="logo" className='md:w-auto max-h-full w-3xs max-w-sm'/>
        </Link>

        {/* ... Link Navigasi ... */}
        <nav className="hidden md:flex space-x-6 items-center">
        {navLinks.map((link) => {
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${
                  isActive
                    ? 'font-semibold text-amber-950'
                    : 'text-gray-600 hover:text-amber-950'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        
        {/* ... Tombol mobile ... */}
        <div className="md:hidden">
          {/* 4. Buat tombol hamburger fungsional */}
          <button onClick={() => setIsMenuOpen(true)} className="text-gray-800">
            <Icon iconName="menu" className="text-amber-950 text-3xl" />
          </button>
        </div>
      </div>

      {/* --- 5. Panel Menu Mobile & Overlay --- */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-50 invisible"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full w-2/3 max-w-sm bg-white dark:bg-[#735128] shadow-xl z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold">Menu</h2>
            <button onClick={() => setIsMenuOpen(false)}>
              <Icon iconName="close" className="text-3xl" />
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-lg text-gray-700 dark:text-gray-200 hover:text-blue-500"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}