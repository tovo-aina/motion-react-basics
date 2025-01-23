import Image from "next/image";
import Link from "next/link";
import fs from "node:fs/promises";

export default async function Home() {
  const files = await fs.readdir("./public/assets");
  const images = files.map((file) => `/assets/${file}`);

  return (
    <>
      <div className="max-w-screen-lg mx-auto py-10">
        <div className="flex items-end justify-around">
          <h1 className="text-4xl font-bold">Images</h1>
          <Link
            href={"/upload"}
            className="py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white"
          >
            Upload New Image
          </Link>
        </div>
        <div className="grid md:grid-cols-4 gap-5 mt-10">
          {images.map((image) => (
            <div
              key={image}
              className="max-w-sm border border-gray-200 rounded-md shadow"
            >
              <div className="relative aspect-video">
                <Image
                  src={image}
                  key={image}
                  alt={image}
                  fill
                  priority
                  className="rounded-t-md object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
