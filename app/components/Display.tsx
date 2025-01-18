import React from "react";

export default function Display() {
  return (
    <section className="container m-auto p-2 pt-10">
      <a
        href=""
        className="inline-block w-32 cursor-pointer bg-blue-500 hover:bg-blue-600 p-2 rounded-md text-center"
      >
        Retour
      </a>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit in
        recusandae reprehenderit quasi distinctio quas rerum, architecto aut
        tenetur provident? Dicta optio ratione excepturi ab earum doloremque
        aspernatur vel eveniet.
      </p>
      <div className="bg-green-500 h-32 w-[50px] md:w-[150px] lg:w-[350px] xl:w-[550px]">
        BOX
      </div>
      <span className="bg-red-500 block">Block</span>
      <div className="bg-red-500 inline">Inline</div>
      <div className="flex">
        <p>Iteme1</p>
        <p>Iteme2</p>
        <p>Iteme3</p>
      </div>
    </section>
  );
}
