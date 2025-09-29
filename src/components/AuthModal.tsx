"use client";

import { useEffect, useState } from 'react';
import { X, Mail, Lock, User, Loader2, Sparkles, Shield, ArrowRight } from 'lucide-react';

type Mode = 'signin' | 'signup';

export default function AuthModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [mode, setMode] = useState<Mode>('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailLinkEnabled, setEmailLinkEnabled] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    setError(null);
    fetch((process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080') + '/api/auth/features')
      .then(r => r.json())
      .then(data => setEmailLinkEnabled(Boolean(data?.emailLinkSignin)))
      .catch(() => setEmailLinkEnabled(false));
  }, [open]);

  const submit = async () => {
    setLoading(true);
    setError(null);
    try {
      const endpoint = mode === 'signup' ? '/api/auth/signup' : '/api/auth/login';
      const body: any = { email, password };
      if (mode === 'signup') body.name = name;
      const res = await fetch((process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080') + endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      if (!res.ok) {
        const t = await res.text();
        throw new Error(t || 'Request failed');
      }
      const data = await res.json();
      const token = data?.token as string;
      if (!token) throw new Error('Invalid response');

      try {
        const meRes = await fetch((process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:8080') + '/api/users/me', {
          headers: { Authorization: 'Bearer ' + token }
        });
        if (meRes.ok) {
          const me = await meRes.json();
          try { localStorage.setItem('ksh_user', JSON.stringify({ name: me?.name, email: me?.email, role: me?.role })); } catch {}
        }
      } catch {}
      try { localStorage.setItem('ksh_jwt', token); } catch {}
      try { window.dispatchEvent(new Event('ksh:auth-changed')); } catch {}
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      submit();
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 animate-in fade-in duration-200" role="dialog" aria-modal="true">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60 backdrop-blur-sm" 
        onClick={onClose} 
      />
      
      <div className="absolute inset-0 flex items-center justify-center px-4 py-8" onClick={onClose}>
        <div className="w-full max-w-md animate-in zoom-in-95 duration-300">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 via-purple-400/20 to-pink-400/20 blur-3xl rounded-3xl transform scale-110" />
          
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 animate-pulse" />
            
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl shadow-lg">
                  {mode === 'signin' ? (
                    <Shield className="h-5 w-5 text-white" />
                  ) : (
                    <Sparkles className="h-5 w-5 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {mode === 'signin' ? 'Welcome Back' : 'Join Us'}
                </h3>
              </div>
              <button 
                onClick={onClose} 
                className="p-2 rounded-xl hover:bg-gray-100 transition-all duration-200 group"
                aria-label="Close"
              >
                <X className="h-5 w-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
              </button>
            </div>

            <div className="p-6">
              <div className="relative flex items-center gap-2 p-1 bg-gray-100 rounded-xl mb-6">
                <div 
                  className={`absolute inset-y-1 w-[calc(50%-4px)] bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg shadow-lg transition-all duration-300 ${
                    mode === 'signup' ? 'translate-x-[calc(100%+8px)]' : 'translate-x-0'
                  }`}
                />
                <button
                  className={`relative z-10 flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    mode === 'signin' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setMode('signin')}
                >
                  Sign In
                </button>
                <button
                  className={`relative z-10 flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-colors duration-300 ${
                    mode === 'signup' ? 'text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setMode('signup')}
                >
                  Sign Up
                </button>
              </div>

              <div className="space-y-4">
                {mode === 'signup' && (
                  <div className="animate-in slide-in-from-top duration-300">
                    <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2" htmlFor="name">
                      Full Name
                      <span className="text-xs text-orange-600 font-normal">*</span>
                    </label>
                    <div className="relative group">
                      <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                        focusedField === 'name' ? 'opacity-40' : ''
                      }`} />
                      <div className="relative">
                        <div className={`absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 ${
                          focusedField === 'name' ? 'bg-orange-100' : 'bg-gray-50'
                        }`}>
                          <User className={`h-4 w-4 transition-colors duration-200 ${
                            focusedField === 'name' ? 'text-orange-600' : 'text-gray-400'
                          }`} />
                        </div>
                        <input 
                          id="name" 
                          value={name} 
                          onChange={e => setName(e.target.value)}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          onKeyPress={handleKeyPress}
                          className="w-full rounded-xl border-2 border-gray-200 pl-14 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 focus:shadow-lg transition-all duration-200 bg-white"
                          placeholder="Enter your full name" 
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div className="animate-in slide-in-from-top duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2" htmlFor="email">
                    Email Address
                    <span className="text-xs text-orange-600 font-normal">*</span>
                  </label>
                  <div className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                      focusedField === 'email' ? 'opacity-40' : ''
                    }`} />
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 ${
                        focusedField === 'email' ? 'bg-orange-100' : 'bg-gray-50'
                      }`}>
                        <Mail className={`h-4 w-4 transition-colors duration-200 ${
                          focusedField === 'email' ? 'text-orange-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <input 
                        id="email" 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        onKeyPress={handleKeyPress}
                        className="w-full rounded-xl border-2 border-gray-200 pl-14 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 focus:shadow-lg transition-all duration-200 bg-white"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="animate-in slide-in-from-top duration-300">
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2" htmlFor="password">
                    Password
                    <span className="text-xs text-orange-600 font-normal">*</span>
                  </label>
                  <div className="relative group">
                    <div className={`absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300 ${
                      focusedField === 'password' ? 'opacity-40' : ''
                    }`} />
                    <div className="relative">
                      <div className={`absolute left-4 top-1/2 -translate-y-1/2 p-1.5 rounded-lg transition-all duration-200 ${
                        focusedField === 'password' ? 'bg-orange-100' : 'bg-gray-50'
                      }`}>
                        <Lock className={`h-4 w-4 transition-colors duration-200 ${
                          focusedField === 'password' ? 'text-orange-600' : 'text-gray-400'
                        }`} />
                      </div>
                      <input 
                        id="password" 
                        type="password" 
                        value={password} 
                        onChange={e => setPassword(e.target.value)}
                        onFocus={() => setFocusedField('password')}
                        onBlur={() => setFocusedField(null)}
                        onKeyPress={handleKeyPress}
                        className="w-full rounded-xl border-2 border-gray-200 pl-14 pr-4 py-3.5 text-sm focus:outline-none focus:border-orange-500 focus:shadow-lg transition-all duration-200 bg-white"
                        placeholder="Enter secure password"
                      />
                    </div>
                  </div>
                </div>

                {error && (
                  <div className="animate-in slide-in-from-top duration-300 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <p className="text-sm text-red-600 font-medium">{error}</p>
                  </div>
                )}

                <button 
                  disabled={loading} 
                  onClick={submit}
                  className="group relative w-full overflow-hidden bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-xl py-3.5 font-semibold transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Please wait...</span>
                      </>
                    ) : (
                      <>
                        <span>{mode === 'signin' ? 'Sign In' : 'Create Account'}</span>
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </span>
                </button>
              </div>

              {emailLinkEnabled && mode === 'signin' && (
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 rounded-xl">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <p className="text-xs text-blue-700 font-medium">
                      Email link sign-in is enabled. Magic link coming soon!
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-gray-100">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500">
                  <div className="flex items-center gap-1 hover:text-orange-600 transition-colors cursor-default">
                    <Shield className="h-3.5 w-3.5" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-orange-600 transition-colors cursor-default">
                    <Lock className="h-3.5 w-3.5" />
                    <span>Encrypted</span>
                  </div>
                  <div className="flex items-center gap-1 hover:text-orange-600 transition-colors cursor-default">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Fast Setup</span>
                  </div>
                </div>
              </div>
              
              {mode === 'signin' && (
                <div className="mt-4 text-center">
                  <button className="text-sm text-gray-600 hover:text-orange-600 font-medium transition-colors">
                    Forgot password?
                  </button>
                </div>
              )}
              
              <div className="mt-6 text-center text-xs text-gray-500">
                {mode === 'signin' ? (
                  <p>
                    Don't have an account?{' '}
                    <button 
                      onClick={() => setMode('signup')}
                      className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                      Sign up now
                    </button>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <button 
                      onClick={() => setMode('signin')}
                      className="text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                      Sign in
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
