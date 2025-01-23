"use client";

import React from "react";
import SubmitButton from "./button";
import { useFormState } from "react-dom";
import { uploadImage } from "@/lib/actions";

export default function UploadForm() {
  const [state, formActon] = useFormState(uploadImage, null);

  return (
    <form action={formActon}>
      {/* Alert */}
      {state?.message ? (
        <div
          className="p-4 mb-4 text-sm text-green-800 rounded-md bg-green-50"
          role="alert"
        >
          <div className="font-medium">{state?.message}</div>
        </div>
      ) : null}

      <div className="mb-4 pt-2">
        <input
          type="file"
          name="image"
          className="file:py-2 file:px-4 file:mr-4 file:rounded-md file:border-0 file:bg-gray-500 hover:file:bg-gray-600 file:cursor-pointer"
        />
        <div aria-live="polite" aria-atomic="true">
          <p className="text-sm text-red-500 mt-2">{state?.error?.image}</p>
        </div>
      </div>
      <div className="mb-4 mt-4">
        <SubmitButton label="upload" />
      </div>
    </form>
  );
}
