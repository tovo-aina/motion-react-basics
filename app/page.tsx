import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-start items-center gap-2 p-4">
        <h1 className="text-5xl pb-4">Welcome to Framer-motion Course</h1>
        <button className="bg-blue-500 text-lg font-bold px-4 py-2 rounded-lg">
          <Link href={"/Bases-framer-motion"}>Bases framer motion</Link>
        </button>

        <button className="bg-blue-500 text-lg font-bold px-4 py-2 rounded-lg">
          <Link href={"/animation-avancee"}>Animation Avnacée</Link>
        </button>

        <button className="bg-blue-500 text-lg font-bold px-4 py-2 rounded-lg">
          <Link href={"/texte-anime"}>Texte Animée</Link>
        </button>
      </div>
    </>
  );
}
