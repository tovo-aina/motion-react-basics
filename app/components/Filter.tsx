import Image from "next/image";
import React from "react";
import Dog from "@/public/dog.jpg";

export default function Filter() {
  return (
    <section className="w-full m-auto p-2 pt-5">
      <h2 className="text-center text-blue-500 font-bold m-3">Filter</h2>
      <div className="my-3 text-center p-3 flex  flex-col justify-center items-center gap-2">
        {/* Blur-sm md lg xl 2xl  */}
        <div className="size-72">
          <Image src={Dog} alt="dog" className="blur-md" />
        </div>
        {/* Brigthness-[10-200] */}
        <div className="size-72">
          <Image src={Dog} alt="dog" className="brightness-50" />
        </div>
        {/* contrats-[0-200] */}
        <div className="size-72">
          <Image src={Dog} alt="dog" className="contrast-125" />
        </div>
        {/* rotate/invert/saturate/sepia */}
        <div className="size-72">
          <Image src={Dog} alt="dog" className="sepia rotate-12" />
        </div>
      </div>
    </section>
  );
}
