import Image from "next/image";
import Logo3 from "@/public/logo3.webp";
import React from "react";

export default function Float() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">Float</h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="p-3 bg-red-500 w-full mb-2">
          <Image src={Logo3} alt="logo 3" className="w-20 h-20 float-left" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sunt. Natus sint laboriosam sit qui maiores esse cumque neque. Eaque
            velit consequuntur minima quaerat vel repellat ducimus voluptatem
            temporibus quisquam!
          </p>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2">
          <Image src={Logo3} alt="logo 3" className="w-20 h-20 float-left" />
          <Image src={Logo3} alt="logo 3" className="w-20 h-20 float-right" />
          <p className="clear-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            sunt. Natus sint laboriosam sit qui maiores esse cumque neque. Eaque
            velit consequuntur minima quaerat vel repellat ducimus voluptatem
            temporibus quisquam!
          </p>
        </div>
      </div>
    </section>
  );
}
