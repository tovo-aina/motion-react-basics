import React from "react";

export default function Grid1() {
  return (
    <>
      <section className="w-full m-auto p-2 pt-10">
        <h2 className="text-center text-blue-500 font-bold m-3">Grid 1</h2>
        <div className="my-3 text-center p-3 flex  flex-col gap-2">
          <div className=" grid grid-cols-4 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className=" grid grid-cols-12 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500 col-span-4">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className="grid grid-cols-12 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500  col-start-1 col-end-4">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className="grid grid-rows-12 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500  col-start-1 col-end-4">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className="grid grid-rows-12 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500 row-span-2">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className="grid grid-rows-12 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500 row-start-1 row-end-4">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>

          <div className="grid grid-cols-3 gap-x-2 p-3 bg-red-500 w-full mb-2">
            <div className="bg-gray-500">item 1</div>
            <div className="bg-violet-500 row-start-1 row-end-4">item 2</div>
            <div className="bg-blue-500">item 3</div>
          </div>
        </div>
      </section>
    </>
  );
}
