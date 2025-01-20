"use client";

import Image from "next/image";
import Tailwindcss from "@/public/tailwindicon.png";
import Bg from "@/public/bg.jpg";
import Dog from "@/public/dog.jpg";
import Menu from "@/public/menu.svg";
import Facebook from "@/public/facebook.svg";
import Instagram from "@/public/instagram.svg";
import Twitter from "@/public/twitter.svg";
import React, { useState } from "react";

export default function Projet() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section>
        <nav className="bg-gray-800 bg-opacity-75 fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Image
                    src={Tailwindcss}
                    alt="tailwindcss"
                    className="w-8 h-8"
                  />
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <a
                      href="#"
                      className="text-green-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Home
                    </a>
                    <a
                      href="#"
                      className="text-green-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Destinations
                    </a>
                    <a
                      href="#"
                      className="text-green-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Offers
                    </a>
                    <a
                      href="#"
                      className="text-green-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
              <div className="mr-2 flex md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="bg-white inline-flex items-center justify-center p-2 rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Image src={Menu} alt="menu" />
                </button>
              </div>
            </div>
          </div>
          {/* Menu mobile */}
          {isOpen && (
            <div className="justify-items-end px-2 pt-2 pb-3 space-y-0 sm:px-3 md:hidden">
              <a
                href="#"
                className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
              >
                Destinations
              </a>
              <a
                href="#"
                className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
              >
                Offers
              </a>
              <a
                href="#"
                className="text-green-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-sm font-medium"
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </section>

      <section
        className="relative h-screen flex justify-center items-center bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/mountain.avif')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            DIscover the World with Us
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-white">
            Travel to Dream Destinations with Incredible Offers
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
            Book now
          </button>
        </div>
      </section>

      <section className="text-center py-8">
        <h2 className="text-4xl text-red-600 uppercase font-black mb-2">
          Inspiration gallery
        </h2>
        <p className="text-lg text-gray-600">
          Discover our unique collections and find inspiration for your projects
        </p>
      </section>

      <section className="w-full max-w-[1200px] m-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 1</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
          {/* Card 2 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 2</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
          {/* Card 3 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 3</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
          {/* Card 4 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 4</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
          {/* Card 5 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 5</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
          {/* Card 6 */}
          <div className="relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:translate-y-[10px] transition-all">
            <Image src={Bg} alt="bg" className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl text-gray-500 font-bold">Destination 6</h3>
              <p className="text-sm text-gray-600">
                I&apos;m a description, Thanks.
              </p>
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                Activation
              </button>
            </div>
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md">
              100£
            </div>
          </div>
        </div>
      </section>

      {/* Infos */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <Image
                src={Dog}
                alt="dog"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl text-red-600 uppercase font-black mb-2">
                à propos
              </h2>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                aliquid maiores dolorem deserunt recusandae! Illo nulla unde
                illum! Sequi, impedit.
              </p>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                aliquid maiores dolorem deserunt recusandae! Illo nulla unde
                illum! Sequi, impedit.
              </p>
              <p className="text-lg mb-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
                aliquid maiores dolorem deserunt recusandae! Illo nulla unde
                illum! Sequi, impedit.
              </p>
              <p className="text-lg mb-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                tempore beatae soluta in molestiae illum, sit nulla itaque
                facere minima illo! Voluptatum, recusandae neque harum
                dignissimos totam vitae illum nobis!
              </p>
              <button className="bg-red-500 text-white px-6 py-3 rounded-full font-semibold animate-pulse">
                Learn more...
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        className="px-4 py-12 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/dog.jpg" }}
      >
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg bg-opacity-25">
          <h2 className="text-4xl text-red-600 uppercase font-black mb-2 text-center">
            Contact us
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas,
            corporis!
          </p>
          <form action={"#"} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block  text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block  text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block  text-sm font-medium text-gray-700"
              >
                Messages
              </label>
              <textarea
                id="message"
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto inline-flex justify-center py-3 px-6 border border-r-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Contact us</h3>
              <p className="text-gray-400">
                Adresse: 123 Rue de Paris, Paris, France
              </p>
              <p className="text-gray-400">Tel: 123456789</p>
              <p className="text-gray-400">contactact@mail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-500"
                >
                  <Image src={Facebook} alt="facebook" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-500"
                >
                  <Image src={Instagram} alt="instagram" />
                </a>
                <a
                  href="#"
                  className="bg-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-gray-500"
                >
                  <Image src={Twitter} alt="twitter" />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center text-gray-400 mt-8">
              &copy; 2024 My Website. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
