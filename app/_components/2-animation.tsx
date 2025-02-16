"use client";

import { useToggle } from "@/hooks/useToggle";
import { motion } from "motion/react";

const boxVariant = {
  visivble: { x: 0, opacity: 1 },
  hidden: { x: -100, opacity: 1 },
};

export default function TwoAnimation() {
  const [open, toggle] = useToggle(false);

  return (
    <>
      <div className="w-full h-screen bg-purple-400 flex flex-col justify-center items-center">
        <h1 className="text-2xl w-max bg-red-400 uppercase font-bold mb-6">
          Animation 2
        </h1>

        <div>
          <motion.div
            variants={boxVariant}
            whileHover={{ scale: 1.2 }}
            animate={open ? "visivble" : "hidden"}
            className="font-bold hover:uppercase text-7xl mb-6"
          >
            tap
          </motion.div>
        </div>

        <div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.8 }}
            onClick={toggle}
            className="bg-blue-500 px-6 py-2 rounded-lg uppercase font-semibold"
          >
            click
          </motion.button>
        </div>
      </div>
    </>
  );
}
