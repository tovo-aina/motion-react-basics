"use client";

import React from "react";
import { motion } from "motion/react";

export default function OneAnimation() {
  return (
    <>
      <div className="w-full h-screen bg-yellow-200 flex flex-col justify-center items-center">
        <h1 className="text-2xl w-max bg-red-400 uppercase font-bold mb-6">
          Animation 1
        </h1>

        <motion.div
          initial={{ opacity: 1, x: 0 }}
          whileInView={{ opacity: 1, x: -100 }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          className="text-sm md:text-3xl bg-blue-400 mb-8"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
          </p>
        </motion.div>

        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 px-8 py-3 rounded-lg uppercase font-semibold"
          >
            click
          </motion.button>
        </div>
      </div>
    </>
  );
}
