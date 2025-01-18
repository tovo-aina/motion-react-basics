import React from "react";

export default function Flexbox1() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">Flexbox 1</h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="p-3 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex gap-x-2">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex flex-col gap-y-2">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex justify-evenly">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full h-32 mb-2 flex items-stretch">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex flex-wrap">
          <div className="size-60 bg-gray-500">item 1</div>
          <div className="size-60 bg-violet-500">item 2</div>
          <div className="size-60 bg-blue-500">item 3</div>
        </div>
      </div>
    </section>
  );
}
