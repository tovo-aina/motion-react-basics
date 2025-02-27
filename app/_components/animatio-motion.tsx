"use client";

import React from "react";
import { motion, useScroll } from "motion/react";

const gridContainerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.25 } },
};

const gridSquareVariants = { hiddeen: { opacity: 0 }, show: { opacity: 1 } };

const svgIconVariants = {
  hidden: { opacity: 0, pathLength: 0, fill: "red" },
  visible: { opacity: 1, pathLength: 1, fill: "blue" },
};

export default function AnimatioMotion() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="flex flex-col gap-2 overflow-x-hidden">
      <motion.section
        variants={gridContainerVariants}
        initial="hiddeen"
        animate="show"
        className="grid grid-cols-3 gap-2 p-4"
      >
        {/* Fade Up */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="size-14 bg-red-400 rounded-lg"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="size-14 bg-red-400 rounded-full"
          ></motion.div>
        </motion.div>

        {/* keyframes */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="size-16 bg-blue-400"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ["10%", "10%", "50%", "10%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 1,
            }}
          ></motion.div>
        </motion.div>

        {/* whileHover & whileTap */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1, background: "orange", color: "black" }}
            transition={{ bounceDamping: 10, bounceStiffness: 600 }}
            className="bg-blue-500 w-1/2 py-4 rounded-lg text-2xl text-gray-100 font-light"
          >
            Click
          </motion.button>
        </motion.div>

        {/* Scroll Progression */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div className="w-64 aspect-square bg-gray-500 rounded-xl">
            <motion.div
              className="w-full h-full bg-blue-500 rounded-xl origin-bottom"
              style={{ scaleY: scrollYProgress }}
            ></motion.div>
          </motion.div>
        </motion.div>

        {/* Drag */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.div
            className="size-16 bg-green-500 rounded-3xl cursor-grab"
            drag
            dragConstraints={{ top: -50, bottom: 50, right: 50, left: -50 }}
            dragTransition={{ bounceDamping: 10, bounceStiffness: 600 }}
          ></motion.div>
        </motion.div>

        {/* SVG animation */}
        <motion.div
          variants={gridSquareVariants}
          className="bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10"
        >
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-32 stroke-orange-500"
          >
            <motion.path
              variants={svgIconVariants}
              initial="hiddeen"
              animate="visible"
              transition={{
                fill: {
                  duration: 2,
                  ease: "easeIn",
                  repeat: Infinity,
                  delay: 2,
                },
              }}
              d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
            />
          </motion.svg>
        </motion.div>
      </motion.section>
    </div>
  );
}
