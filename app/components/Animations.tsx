import React from "react";

export default function Animations() {
  return (
    <section className="w-full m-auto p-2 pt-10">
      <div className="my-3 text-center p-3 flex flex-col">
        <button className="bg-blue-500 px-4 py-2 rounded-lg animate-spin w-8 h-8 mb-5">
          Spin
        </button>

        <button className="bg-blue-500 px-4 py-2 rounded-lg relative w-32 mb-5">
          Notificatons
          <span className="absolute top-[-2px] right-[-2px] block w-4 h-4 rounded-full ring-2 ring-white animate-ping"></span>
          <span className="absolute top-[-2px] right-[-2px] block w-4 h-4 bg-red-500 rounded-full"></span>
        </button>

        <button className="bg-green-500 text-white rounded-lg animate-pulse mb-2 w-16">
          Pulse
        </button>

        <button className="bg-yellow-500 text-white rounded-lg w-max h-max animate-bounce uppercase">
          Bounce
        </button>
      </div>
    </section>
  );
}
