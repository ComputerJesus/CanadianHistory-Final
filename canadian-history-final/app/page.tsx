'use client';

import Image from "next/image";
import Link from 'next/link'
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .6,
              opacity: 0.15
            },
            visible: {
              scale: 1.55,
              opacity: 0.95,
              transition: {
                delay: 0
              }
            },
          }}>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white"> Simulating Canadian History</h1>
        </motion.div>
        <div>
        <Link href="/simulate">
          <button className=" rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 dark:active:bg-blue-800 ">Start Simulating</button>
        </Link>
        </div>

        


      </div>
    </main>
  );
}
