import React from "react";
import OneAnimation from "./_components/1-animation";
import TwoAnimation from "./_components/2-animation";
import ThreeAnimation from "./_components/3-animation";

export default function Home() {
  return (
    <>
      <div className="w-full h-auto flex justify-center items-center py-4">
        <h1 className="text-3xl md:text-4xl font-bold bg-blue-400 uppercase">
          motion for animation
        </h1>
      </div>

      <OneAnimation />
      <TwoAnimation />
      <ThreeAnimation />
    </>
  );
}
