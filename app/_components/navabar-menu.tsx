"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const menuItems = [
  { name: "Home", link: "#accueil" },
  {
    name: "Services",
    link: "#services",
    subMenu: [
      { name: "Services 1", link: "#" },
      { name: "Services 2", link: "#" },
      { name: "Services 3", link: "#" },
      { name: "Services 4", link: "#" },
    ],
  },
  { name: "Portfolio", link: "#portfolio" },
  {
    name: "Blog",
    link: "#blog",
    subMenu: [
      { name: "Blog 1", link: "#" },
      { name: "Blog 2", link: "#" },
      { name: "Blog 3", link: "#" },
      { name: "Blog 4", link: "#" },
    ],
  },
  { name: "Contact", link: "#contact" },
];

export default function NavbarMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full h-auto bg-white shadow-md p-4 relative z-50">
      <div className="mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="w-full">
          <Image
            src={"/test.png"}
            width={256}
            height={256}
            alt="logo test"
            className="object-cover w-16"
          />
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex gap-6 absolute md:static bg-gray-400 w-full left-0 top-16 p-4 md:p-0 transition-all duration-300 shadow-lg md:shadow-none ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {menuItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.link}
                className="block px-4 py-2 hover:text-blue-800"
                onClick={() => setMenuOpen(false)} // Ferme le menu au clic
              >
                {item.name}
              </a>

              {/* Sous-menu */}
              {item.subMenu && (
                <ul className="absolute left-0 top-full hidden bg-blue-400 shadow-md group-hover:block w-48 z-50">
                  {item.subMenu.map((sub) => (
                    <li key={sub.name}>
                      <a
                        href={sub.link}
                        className="block px-4 py-2 hover:bg-gray-300"
                        onClick={() => setMenuOpen(false)} // Ferme aussi le menu si un sous-menu est cliqué
                      >
                        {sub.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
