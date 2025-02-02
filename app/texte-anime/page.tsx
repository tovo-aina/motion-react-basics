"use client";

import { motion } from "motion/react";

export default function page() {
  return (
    <div className="w-full overflow-hidden bg-gray-900 text-white py-4">
      <motion.div
        className="flex space-x-10 text-2xl font-bold"
        animate={{ x: ["100%", "-100%"] }} // Défilement de droite à gauche
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }} // Animation infinie
      >
        <p>
          🚀 Bienvenue sur notre site web ! | 💡 Création de sites modernes | 🎨
          Design unique et interactif | ⚡ Performance optimisée
        </p>
      </motion.div>
    </div>
  );
}
