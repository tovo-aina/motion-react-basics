"use client";

import { motion } from "motion/react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function page() {
  return (
    <>
      <main className="w-full h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-6">Bienvenue, Framer motion</h1>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 px-4 py-2 rounded-lg mb-6"
        >
          Click here
        </motion.button>

        {/* Animation d’un élément avec initial, animate et transition */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-4 bg-blue-500 text-white text-center mb-6"
        >
          Animation avec Framer Motion 🚀
        </motion.div>

        {/*  Animation avec variants pour réutilisation */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="text-2xl font-bold text-center mb-4"
        >
          Hello Framer Motion !
        </motion.p>

        {/* Animation d’entrée et de sortie (utilisé avec Next.js) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="p-4 bg-green-500 text-white text-center mb-4"
        >
          Animation avec entrée et sortie
        </motion.div>
      </main>
    </>
  );
}
