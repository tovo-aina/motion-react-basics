"use server";

import { writeFile } from "fs/promises";
import path from "path";
import { z } from "zod";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

// Définir le schéma de validation
const uploadSchema = z.object({
  image: z
    .custom<File>((file) => file instanceof File, {
      message: "File is required",
    }) // Vérifie que c'est un fichier
    .refine((file) => file.size > 0, { message: "File cannot be empty" }) // Vérifie que le fichier n'est pas vide
    .refine((file) => file.type.startsWith("image/"), {
      message: "Only images are allowed",
    }) // Vérifie le type MIME
    .refine((file) => file.size < 4000000, {
      message: "Image must be less than 4MB",
    }), // Vérifie la taille
});

// Fonction d'upload d'image
export const uploadImage = async (prevState: unknown, formData: FormData) => {
  // Valider les champs
  const validateFields = uploadSchema.safeParse(
    Object.fromEntries(formData.entries()),
  );

  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }

  const file = formData.get("image") as File;

  if (!file) {
    return { error: { image: ["File is required"] } };
  }

  try {
    // Convertir le fichier en buffer
    const buffer = Buffer.from(await file.arrayBuffer());
    const filename = file.name.replaceAll(" ", "_");

    // Enregistrer le fichier dans le dossier "public/assets"
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer,
    );

    // Ajouter ici les actions après l'upload réussi
    revalidatePath("/"); // Actualiser les données du chemin
  } catch (error) {
    console.log("Error occurred", error);
    return { message: "Failed" };
  }

  redirect("/"); // Rediriger l'utilisateur
};
