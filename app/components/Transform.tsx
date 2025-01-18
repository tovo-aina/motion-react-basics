import React from "react";

export default function Transform() {
  return (
    <div className="m-4 w-auto h-full bg-yellow-200 text-center flex flex-col items-center gap-2">
      <div className="w-32 h-32 rounded-md bg-red-500 rotate-90">Rotate</div>
      <div className="w-32 h-32 rounded-md bg-red-500 hover:scale-50 transition-transform">
        Scale
      </div>
      <div className="w-32 h-32 rounded-md bg-red-500 translate-x-32 translate-y-0 hover:translate-y-6">
        Translate
      </div>
      <div className="w-32 h-32 rounded-md bg-red-500 skew-x-6 skew-y-6">
        Translate skew
      </div>
      <div className="w-32 h-32 rounded-md bg-red-500 origin-bottom rotate-6">
        Translate origin
      </div>
    </div>
  );
}
