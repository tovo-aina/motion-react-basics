import React from "react";
import Photo1 from "@/public/photo1.png";
import Image from "next/image";

export default function Course() {
  return (
    <div className="px-4 py-2">
      <div className="bg-red-300 min-w-min min-h-min rounded-lg">
        <Image src={Photo1} width={180} height={180} alt="photo1" />
        <div className="p-1">
          <h3 className="font-bold">Title: Text</h3>
          <p className="text-justify">
            So I started to walk into the water. I won&apos;t lie to you boys, I
            was terrified. But I pressed on, and as I made my way past the
            breakers a strange calm came over me. I don&apos;t know if it was
            divine intervention or the kinship of all living things but I tell
            you Jerry at that moment, I was a marine biologist.
          </p>
        </div>
      </div>
      <div className="bg-blue-500/50 p-8 w-1/3 border">
        <Image src={Photo1} width={180} height={180} alt="photo1" />
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-pink-500 to-violet-500">
          Boost your conversion rate
        </h3>
        <br />
        <div className="flex flex-row">
          <Image src={Photo1} width={64} height={64} alt="photo1" />
          <p>logo Printbox</p>
        </div>
        <br />
        <div className="bg-red-500 w-48 h-12 text-center">Message</div>
      </div>
      <div>
        <h3>FLEX</h3>
        <div className="flex flex-row gap-2">
          <div className="bg-red-500 w-24 h-12 text-center">Red</div>
          <div className="bg-blue-500 w-24 h-12 text-center">Blue</div>
          <div className="bg-yellow-500 w-24 h-12 text-center">Yellow</div>
        </div>
        <br />
        <div className="flex flex-col gap-2">
          <div className="bg-red-500 w-24 h-12 text-center">Red</div>
          <div className="bg-blue-500 w-24 h-12 text-center">Blue</div>
          <div className="bg-yellow-500 w-24 h-12 text-center">Yellow</div>
        </div>
        <br />
        <h3>GRID</h3>
        <div className="grid grid-cols-12 gap-2">
          <div className="bg-blue-500 w-24 h-12 text-center">1</div>
          <div className="bg-blue-500 w-24 h-12 text-center">2</div>
          <div className="bg-blue-500 w-24 h-12 text-center">3</div>
          <div className="bg-blue-500 w-24 h-12 text-center">4</div>
          <div className="bg-blue-500 w-24 h-12 text-center">5</div>
          <div className="bg-blue-500 w-24 h-12 text-center">6</div>
          <div className="bg-blue-500 w-24 h-12 text-center">7</div>
          <div className="bg-blue-500 w-24 h-12 text-center">8</div>
          <div className="bg-blue-500 w-24 h-12 text-center">9</div>
          <div className="bg-blue-500 w-24 h-12 text-center">10</div>
          <div className="bg-blue-500 w-24 h-12 text-center">11</div>
          <div className="bg-blue-500 w-24 h-12 text-center">12</div>
          <div className="bg-blue-500 w-24 h-12 text-center">13</div>
          <div className="bg-blue-500 w-24 h-12 text-center">14</div>
        </div>
        <br />
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-green-500 w-24 h-12 text-center">1</div>
          <div className="bg-green-500 w-24 h-12 text-center">2</div>
          <div className="bg-green-500 w-24 h-12 text-center">3</div>
          <div className="bg-green-500 w-24 h-12 text-center">4</div>
          <div className="bg-green-500 w-24 h-12 text-center">5</div>
          <div className="grid grid-cols-subgrid gap-4 col-span-3">
            <div className="bg-green-500 w-24 h-12 text-center col-start-2">
              6
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
