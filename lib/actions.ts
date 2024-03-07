"use server";

import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const CVSchema = z.object({
  name: z.string().min(6),
  phone: z.string().min(11),
  gender: z.string(),
  techStack: z.string(),
});

export const saveCV = async (prevSate: any, formData: FormData) => {
  const validatedFields = CVSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.cv.create({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        gender: validatedFields.data.gender,
        techStack: validatedFields.data.techStack,
      },
    });
  } catch (error) {
    return { message: "Failed to create CV" };
  }

  revalidatePath("/");
  redirect("/");
};

export const updateCV = async (
  id: string,
  prevSate: any,
  formData: FormData
) => {
  const validatedFields = CVSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    return {
      Error: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await prisma.cv.update({
      data: {
        name: validatedFields.data.name,
        phone: validatedFields.data.phone,
        gender: validatedFields.data.gender,
        techStack: validatedFields.data.techStack,
      },
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to update CV" };
  }

  revalidatePath("/");
  redirect("/");
};

export const deleteCV = async (id: string) => {
  try {
    await prisma.cv.delete({
      where: { id },
    });
  } catch (error) {
    return { message: "Failed to delete CV" };
  }

  revalidatePath("/");
};
