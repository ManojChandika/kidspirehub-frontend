"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="p-6">
      <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-4">KidspireHub</h1>
        <p className="text-gray-600 mb-6">Free, downloadable PDF worksheets for kids.</p>
        <Link
          href="#worksheets"
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Worksheets
          <ArrowRight size={18} />
        </Link>
      </div>
    </main>
  );
}


