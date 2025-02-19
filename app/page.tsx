import React from "react";
import NavbarMenu from "./_components/navabar-menu";


export default function Home() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center py-4">
        <h1 className="text-3xl md:text-4xl font-bold bg-blue-400 uppercase">
navigation        </h1>
      </div>

   
      <NavbarMenu />
    </>
  );
}
