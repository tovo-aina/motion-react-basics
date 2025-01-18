import React from "react";

export default function Grid2() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">Grid 2</h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="grid justify-items-center p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>

        <div className="h-64 grid content-evenly p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>

        <div className="h-64 grid p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500 justify-self-center">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>

        <div className="h-64 grid place-content-end p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>

        <div className="h-64 grid place-items-center p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>

        <div className="h-64 grid p-3 bg-red-500 w-full mb-2">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500 place-self-center">item 2</div>
          <div className="bg-blue-500">item 3</div>
        </div>
      </div>
    </section>
  );
}
