"use client";

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Pacifico, Inter, Poppins } from 'next/font/google';

// Font configurations for better readability and user experience
const pacifico = Pacifico({ 
  subsets: ['latin'], 
  weight: '400', 
  display: 'swap', 
  fallback: ['cursive', 'serif'] 
});

const inter = Inter({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'], 
  display: 'swap',
  variable: '--font-inter'
});

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600'], 
  display: 'swap',
  variable: '--font-poppins'
});

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobile = () => setIsOpen((prev) => !prev);

  // Enhanced navigation link styles with better typography
  const navLinkClasses = `
    ${inter.className}
    block px-4 py-3 rounded-lg text-base font-medium 
    text-gray-700 hover:text-orange-700 hover:bg-orange-50 
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1
    tracking-wide letter-spacing-[0.025em]
  `;

  // Enhanced sign-in button with better spacing and typography
  const signInClasses = `
    ${poppins.className}
    inline-flex items-center justify-center text-center 
    px-5 py-2.5 rounded-lg text-base font-medium 
    text-orange-700 border-2 border-orange-600/50 
    hover:bg-orange-50 hover:border-orange-600 
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1
    tracking-wide
  `;

  // Enhanced sign-up button with better visual hierarchy
  const signUpClasses = `
    ${poppins.className}
    inline-flex items-center justify-center text-center 
    px-5 py-2.5 rounded-lg text-base font-semibold 
    text-white bg-orange-600 hover:bg-orange-700 
    shadow-md hover:shadow-lg
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1
    tracking-wide
  `;

  // Mobile navigation link styles
  const mobileNavLinkClasses = `
    ${inter.className}
    block w-full px-4 py-3 rounded-lg text-base font-medium 
    text-gray-700 hover:text-orange-700 hover:bg-orange-50 
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
    text-left tracking-wide
  `;

  return (
    <header className="sticky top-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 shadow-sm" role="banner">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Enhanced Logo with better sizing */}
          <div className="flex items-center">
            <Link 
              href="/" 
              className="flex items-center gap-2 group" 
              aria-label="Go to KidspireHub homepage"
            >
              <h1 className={`
                ${pacifico.className} 
                text-2xl sm:text-3xl lg:text-4xl font-bold 
                text-orange-600 select-none 
                group-hover:text-orange-700 
                transition-colors duration-200 ease-in-out
                tracking-wide
              `}>
                KidspireHub
              </h1>
            </Link>
          </div>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-2" aria-label="Primary navigation">
            <Link href="/" aria-label="Go to Home" className={navLinkClasses}>Home</Link>
            <Link href="/worksheets" aria-label="Browse Worksheets" className={navLinkClasses}>Worksheets</Link>
            <Link href="/shop" aria-label="Visit Shop" className={navLinkClasses}>Shop</Link>
            <Link href="/blogs" aria-label="Read Blogs" className={navLinkClasses}>Blogs</Link>
          </nav>

          {/* Enhanced Desktop Authentication Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/signin" aria-label="Sign in to KidspireHub" className={signInClasses}>
              Sign In
            </Link>
            <Link href="/signup" aria-label="Create a KidspireHub account" className={signUpClasses}>
              Sign Up
            </Link>
          </div>

          {/* Enhanced Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={toggleMobile}
              className={`
                ${inter.className}
                inline-flex items-center justify-center 
                rounded-lg p-3 text-gray-700 
                hover:bg-gray-100 hover:text-orange-700
                transition-all duration-200 ease-in-out
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500
              `}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? 
                <X className="h-6 w-6" aria-hidden="true" /> : 
                <Menu className="h-6 w-6" aria-hidden="true" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu with better animations */}
      <div
        id="mobile-menu"
        aria-hidden={!isOpen}
        className={`
          lg:hidden border-t bg-white shadow-lg 
          transition-all duration-300 ease-out overflow-hidden
          ${isOpen ? 
            "max-h-[70vh] opacity-100 pointer-events-auto" : 
            "max-h-0 opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="px-4 py-6 space-y-2" role="menu" aria-label="Mobile navigation">
          {/* Mobile Navigation Links */}
          <div className="space-y-1 mb-6">
            <Link 
              href="/" 
              className={mobileNavLinkClasses} 
              role="menuitem" 
              aria-label="Go to Home"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/worksheets" 
              className={mobileNavLinkClasses} 
              role="menuitem" 
              aria-label="Browse Worksheets"
              onClick={() => setIsOpen(false)}
            >
              Worksheets
            </Link>
            <Link 
              href="/shop" 
              className={mobileNavLinkClasses} 
              role="menuitem" 
              aria-label="Visit Shop"
              onClick={() => setIsOpen(false)}
            >
              Shop
            </Link>
            <Link 
              href="/blogs" 
              className={mobileNavLinkClasses} 
              role="menuitem" 
              aria-label="Read Blogs"
              onClick={() => setIsOpen(false)}
            >
              Blogs
            </Link>
          </div>
          
          {/* Mobile Authentication Buttons */}
          <div className="space-y-3 pt-4 border-t border-orange-100" role="group" aria-label="Account actions">
            <Link 
              href="/signin" 
              className={`${signInClasses} w-full justify-center`} 
              aria-label="Sign in to KidspireHub"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
            <Link 
              href="/signup" 
              className={`${signUpClasses} w-full justify-center`} 
              aria-label="Create a KidspireHub account"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}