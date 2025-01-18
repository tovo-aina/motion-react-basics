import Image from "next/image";
import Dog from "@/public/dog.jpg";
import React from "react";

export default function ImagesBground() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">
        Images & Background
      </h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="bg-red-500 w-full">
          <Image src={Dog} alt="dog" className="object-contain w-full h-full" />
        </div>

        <div className="bg-red-500 w-full mb-4">
          <Image
            src={Dog}
            alt="dog"
            className="object-none object-center w-auto h-48 float-end"
          />
        </div>

        <div
          className="bg-fixed bg-no-repeat bg-cover w-fulll h-screen"
          style={{
            backgroundImage: "url('/dog.jpg')",
          }}
        ></div>

        <p className="text-justify font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem rem
          sed repudiandae! Veritatis consequatur voluptatum, repellat quos
          possimus nobis, culpa tempore, tenetur quas est doloribus minus. Magni
          reiciendis odit placeat in possimus eius sequi ipsam labore cum nam
          nobis tempore consequatur necessitatibus qui fugiat illo dolorum
          eligendi, rerum quae explicabo laboriosam quo nulla esse. Distinctio
          in fugit facere, non rerum quidem excepturi magnam explicabo deleniti
          quam asperiores beatae. Cumque provident eligendi autem doloribus
          suscipit, consequuntur deserunt nulla perferendis at facilis mollitia
          voluptas eius maxime voluptatibus tempore explicabo officiis porro ad
          vero, delectus corrupti. Consequatur ducimus unde itaque eum
          asperiores doloribus?
        </p>

        <div
          className="w-fulll h-96 bg-contain bg-no-repeat p-4 border-4 border-dashed border-blue-500"
          style={{
            backgroundImage: "url('/dog.jpg')",
          }}
        ></div>
      </div>
    </section>
  );
}
