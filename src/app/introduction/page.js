import React from 'react'
import Link from 'next/link';
import RotatingPolyhedron from '@/components/RotatingPolyhedron';
export default function page() {
   return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black">
      <div className="relative">
        <RotatingPolyhedron />
        <div className="absolute top-6 right-6 z-10">
          <button className="flex flex-col items-center justify-center space-y-1.5">
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
            <div className="w-6 h-0.5 bg-white"></div>
          </button>
        </div>
      </div>
      <Link href={"/landing"} className="absolute bottom-6 text-white text-sm">
        landing
      </Link>
      {/* <Link href={"/"} className="absolute bottom-6 left-6 text-white text-sm">
        Home
      </Link>
      <Link href={"/contact"} className="absolute bottom-6 right-6 text-white text-sm">
        Contact
      </Link>
      <Link href={"/"} className="absolute top-6 left-6 text-white text-sm">
        <span className="text-gray-400">Back to Home</span>
      </Link> */}
    </main>
  );
}
