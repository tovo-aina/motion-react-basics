import React from "react";

export default function Grid3() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <h2 className="text-center text-blue-500 font-bold m-3">Grid 3</h2>
      <div className="my-3 text-center p-3 flex  flex-col gap-2">
        <div className="p-3 bg-red-500 w-full mb-2 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-12">
          <div className="bg-gray-500">item 1</div>
          <div className="bg-violet-500">item 2</div>
          <div className="bg-blue-500">item 3</div>
          <div className="bg-blue-500">item 4</div>
          <div className="bg-blue-500">item 5</div>
          <div className="bg-blue-500">item 6</div>
          <div className="bg-blue-500">item 7</div>
          <div className="bg-blue-500">item 8</div>
          <div className="bg-blue-500">item 9</div>
          <div className="bg-blue-500">item 10</div>
          <div className="bg-blue-500">item 11</div>
          <div className="bg-blue-500">item 12</div>
        </div>
      </div>
    </section>
  );
}
