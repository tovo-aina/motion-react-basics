"use client";

import { motion, useScroll, useTransform } from "motion/react";
export default function page() {
  // Capture le scroll vertical
  const { scrollYProgress } = useScroll();

  // Crée un effet de translation basé sur le scroll
  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-10 bg-gray-900 text-white">
      <h1 className="text-3xl font-bold">
        Animations avancées avec Framer Motion
      </h1>

      {/* Image animée avec drag, hover et scroll */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
        whileHover={{ scale: 1.1 }}
        style={{ y }} // Applique l’effet de scroll
        className="w-60 h-60 bg-blue-500 flex items-center justify-center rounded-xl cursor-pointer"
      >
        <p className="text-lg font-semibold">Déplace-moi !</p>
      </motion.div>

      <p className="text-gray-400">
        Fais défiler la page et déplace l’élément 👆
      </p>
    </div>
  );
}
