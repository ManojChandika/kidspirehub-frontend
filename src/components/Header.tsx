"use client";

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, UserCircle, LogOut, User, ChevronDown, LayoutDashboard } from 'lucide-react';
import { Pacifico, Inter, Poppins } from 'next/font/google';
import dynamic from 'next/dynamic';

const AuthModal = dynamic(() => import('./AuthModal'), { ssr: false });

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
  const [authOpen, setAuthOpen] = useState<false | 'signin' | 'signup'>(false);
  const [profile, setProfile] = useState<{ name: string; email: string; role?: string } | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const token = typeof window !== 'undefined' ? localStorage.getItem('ksh_jwt') : null;

  // Load profile if token present
  React.useEffect(() => {
    const cached = localStorage.getItem('ksh_user');
    if (cached) {
      try {
        const u = JSON.parse(cached);
        if (u?.email) {
          setProfile({ name: u?.name || u.email.split('@')[0], email: u.email, role: u?.role });
        }
      } catch {}
    }
    const t = localStorage.getItem('ksh_jwt');
    if (!t) { if (!cached) setProfile(null); return; }
    fetch((process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080') + '/api/users/me', {
      headers: { Authorization: 'Bearer ' + t }
    })
    .then(r => r.ok ? r.json() : null)
    .then(data => {
      if (data?.email) {
        const safeName = data?.name || data.email.split('@')[0];
        setProfile({ name: safeName, email: data.email, role: data.role });
        try { localStorage.setItem('ksh_user', JSON.stringify({ name: safeName, email: data.email, role: data.role })); } catch {}
      } else setProfile(null);
    })
    .catch(() => setProfile(null));
  }, [authOpen]);

  // React to auth change events (after modal sets token)
  React.useEffect(() => {
    const handler = () => {
      const cached = localStorage.getItem('ksh_user');
      if (cached) {
        try {
          const u = JSON.parse(cached);
          if (u?.email) {
            setProfile({ name: u?.name || u.email.split('@')[0], email: u.email, role: u?.role });
          }
        } catch {}
      }
      const t = localStorage.getItem('ksh_jwt');
      if (!t) { if (!cached) setProfile(null); return; }
      fetch((process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080') + '/api/users/me', {
        headers: { Authorization: 'Bearer ' + t }
      })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data?.email) {
          const safeName = data?.name || data.email.split('@')[0];
          setProfile({ name: safeName, email: data.email, role: data.role });
          try { localStorage.setItem('ksh_user', JSON.stringify({ name: safeName, email: data.email, role: data.role })); } catch {}
        } else setProfile(null);
      })
      .catch(() => setProfile(null));
    };
    window.addEventListener('ksh:auth-changed', handler);
    return () => window.removeEventListener('ksh:auth-changed', handler);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('ksh_jwt');
    localStorage.removeItem('ksh_user');
    setProfile(null);
    setProfileDropdownOpen(false);
    try { window.dispatchEvent(new Event('ksh:auth-changed')); } catch {}
  };

  // Close dropdown with Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setProfileDropdownOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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
    px-6 py-2.5 rounded-full text-base font-medium 
    text-orange-600 bg-orange-50 border-2 border-orange-200
    hover:bg-orange-100 hover:border-orange-300
    transition-all duration-200 ease-in-out
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-1
    tracking-wide
  `;

  // Enhanced sign-up button with better visual hierarchy
  const signUpClasses = `
    ${poppins.className}
    inline-flex items-center justify-center text-center gap-2
    px-6 py-2.5 rounded-full text-base font-semibold 
    text-white bg-gradient-to-r from-orange-500 to-orange-600 
    hover:from-orange-600 hover:to-orange-700
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
    <>
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
            {profile?.role === 'ADMIN' && (
              <Link href="/admin/design" aria-label="Admin Panel" className={navLinkClasses}>
                Admin Panel
              </Link>
            )}
          </nav>

          {/* Desktop Auth Single Button */}
          <div className="hidden lg:flex items-center gap-4">
            {!profile ? (
              <button onClick={() => setAuthOpen('signin')} aria-label="Sign in to KidspireHub" className={signUpClasses}>
                <User className="h-5 w-5" />
                Sign In
              </button>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-full border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white hover:border-orange-300 hover:shadow-md transition-all duration-200"
                  aria-label="User menu"
                  aria-expanded={profileDropdownOpen}
                  aria-controls="user-menu-dropdown"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setProfileDropdownOpen(v => !v); }
                    if (e.key === 'Escape') setProfileDropdownOpen(false);
                  }}
                >
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-semibold shadow-sm">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col items-start leading-tight">
                    <span className="text-sm font-semibold text-gray-800">{profile.name}</span>
                    {profile.role === 'ADMIN' && (
                      <span className="mt-0.5 inline-flex items-center rounded-full bg-orange-100 text-orange-700 px-2 py-0.5 text-[10px] font-semibold tracking-wide">Admin</span>
                    )}
                  </div>
                  <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {profileDropdownOpen && (
                  <div id="user-menu-dropdown" role="menu" className="absolute right-0 mt-2 w-64 rounded-xl border border-orange-100 bg-white shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="p-4 bg-gradient-to-br from-orange-50 to-white border-b border-orange-100">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-lg shadow-sm">
                          {profile.name.charAt(0).toUpperCase()}
                        </div>
                        <div className="flex flex-col leading-tight overflow-hidden">
                          <span className="text-sm font-semibold text-gray-800 truncate">{profile.name}</span>
                          <span className="text-xs text-gray-500 truncate">{profile.email}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-2">
                      {profile.role === 'ADMIN' && (
                        <Link href="/admin/design" role="menuitem" className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-150">
                          <LayoutDashboard className="h-4 w-4" />
                          Admin Panel
                        </Link>
                      )}
                      <button
                        role="menuitem"
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors duration-150"
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
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
            {profile?.role === 'ADMIN' && (
              <Link 
                href="/admin/design" 
                className={mobileNavLinkClasses} 
                role="menuitem" 
                aria-label="Admin Panel"
                onClick={() => setIsOpen(false)}
              >
                Admin Panel
              </Link>
            )}
          </div>
          
          {/* Mobile Authentication Single Button */}
          <div className="space-y-3 pt-4 border-t border-orange-100" role="group" aria-label="Account actions">
            {!profile ? (
              <button 
                className={`${signUpClasses} w-full justify-center`} 
                aria-label="Sign in to KidspireHub"
                onClick={() => { setAuthOpen('signin'); setIsOpen(false); }}
              >
                <User className="h-5 w-5" />
                Sign In
              </button>
            ) : (
              <>
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 text-white font-bold text-lg shadow-sm">
                    {profile.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col leading-tight overflow-hidden">
                    <span className="font-semibold text-gray-800 truncate">{profile.name}</span>
                    <span className="text-xs text-gray-500 truncate">{profile.email}</span>
                  </div>
                </div>
                <button 
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full text-base font-medium text-red-600 bg-red-50 border-2 border-red-200 hover:bg-red-100 hover:border-red-300 transition-all duration-200" 
                  aria-label="Sign out"
                  onClick={() => { handleLogout(); setIsOpen(false); }}
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
    {authOpen && (
      <AuthModal open={!!authOpen} onClose={() => setAuthOpen(false)} />
    )}
    </>
  );
}