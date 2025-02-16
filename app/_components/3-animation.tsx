"use client";

import React from "react";
import { motion } from "motion/react";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.2,
        ease: [0.25, 0.25, 0.25, 0.75], // Corrigé pour ne pas avoir deux fois 'ease'
        delay: delay,
      },
    },
  };
};

export default function OneAnimation() {
  return (
    <>
      <div className="w-full h-screen bg-green-500 flex flex-col justify-center items-center">
        <h1 className="text-2xl w-max bg-red-400 uppercase font-bold mb-6">
          Animation 3
        </h1>

        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full bg-gray-200 py-6 px-4"
        >
          <div className="w-full text-center bg-blue-400 mb-6">
            <h2 className="text-4xl  uppercase font-semibold">hello world</h2>
            <p className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat,
              assumenda!
            </p>
          </div>

          <div className="flex justify-between items-center gap-1">
            <div className="w-24 h-12 bg-red-500"></div>
            <div className="w-24 h-12 bg-blue-500"></div>
            <div className="w-24 h-12 bg-yellow-500"></div>
            <div className="w-24 h-12 bg-red-500"></div>
            <div className="w-24 h-12 bg-pink-500"></div>
            <div className="w-24 h-12 bg-indigo-500"></div>
            <div className="w-24 h-12 bg-purple-500"></div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mt-10 text-center"
        >
          <h2 className="text-4xl font-semibold uppercase">
            thanks for watching
          </h2>
        </motion.div>
      </div>
    </>
  );
}
