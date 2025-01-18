import React from "react";

export default function Flexbox2() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">Flexbox 2</h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="p-3 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500 order-3">item 1</div>
          <div className="size-16 bg-violet-500 order-1">item 2</div>
          <div className="size-16 bg-blue-500 order-2">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500">item 1</div>
          <div className="size-16 bg-violet-500 grow">item 2</div>
          <div className="size-16 bg-blue-500">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500 flex-1">item 1</div>
          <div className="size-16 bg-violet-500 shrink">item 2</div>
          <div className="size-16 bg-blue-500 flex-1">item 3</div>
        </div>

        <div className="p-3 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500 basis-1/6">item 1</div>
          <div className="size-16 bg-violet-500 basis-1/4">item 2</div>
          <div className="size-16 bg-blue-500 basis-1/2">item 3</div>
        </div>

        <div className="p-3 h-64 bg-red-500 w-full mb-2 flex">
          <div className="size-16 bg-gray-500 self-end">item 1</div>
          <div className="size-16 bg-violet-500 self-stretch">item 2</div>
          <div className="size-16 bg-blue-500 self-center">item 3</div>
        </div>
      </div>
    </section>
  );
}
