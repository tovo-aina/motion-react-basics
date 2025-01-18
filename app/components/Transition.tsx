import React from "react";

export default function Transition() {
  return (
    <div>
      <section className="bg-blue-400 w-full h-full">
        <div className="my-2 p-2 text-center flex items-center gap-2">
          <p className="size-64 bg-red-500 hover:bg-red-900">item</p>
          <p className="size-64 bg-red-500 hover:bg-red-900 transition-colors">
            item
          </p>
          <p className="size-64 bg-red-500">item</p>
        </div>
        <div className="my-2 p-2 text-center flex items-center gap-2">
          <p className="size-64 bg-green-500 hover:bg-green-900 transition-all duration-1000">
            item
          </p>
          <p className="size-64 bg-purple-500 hover:bg-red-900 transition-colors">
            item
          </p>
          <p className="size-64 bg-purple-500">item</p>
          <p className="size-64 bg-purple-500 hover:bg-red-900">item</p>
          <p className="size-64 bg-purple-500 hover:bg-red-900 transition-colors">
            item
          </p>
          <p className="size-64 bg-violet-500">item</p>
        </div>
      </section>
    </div>
  );
}
