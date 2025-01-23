import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton({ label }: { label: string }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={clsx(
        "text-white w-full font-medium py-3 px-6 bg-blue-700 rounded-md hover:bg-blue-500",
        {
          "opacity-50 cursor-progress": pending,
        },
      )}
    >
      {label === "upload" ? (
        <>{pending ? "Uploading..." : "Upload"}</>
      ) : (
        <>{pending ? "Updating..." : "Update"}</>
      )}
    </button>
  );
}
