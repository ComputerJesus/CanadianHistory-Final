'use client';

import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white"> Simulating Canadian History</h1>

        <img className="w-300 h-200 rounded-md" src="https://placehold.co/600x400" alt="logo" />

        <div>
        <Link href="/simulate">
          <button className=" rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">Start Simulating</button>
        </Link>
        </div>

        


      </div>
    </main>
  );
}
