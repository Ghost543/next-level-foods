"use server";

import { z } from "zod";
import {saveMeal} from "@/lib/meals";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

export type ServerMeal = {
    title: string
    summary: string
    image: File
    creator: string
    instructions: string
    creator_email: string
}

const ACCEPTED_IMAGE_TYPES = [ "image/jpeg", "image/jpg", "image/png", "image/webp", ];
const MAX_FILE_SIZE = 500000;

const mealSchema = z.object({
    title: z.string().min(5, "Length should be at least 5 characters."),
    summary: z.string().min(10, "Length should be at least 10 characters."),
    image: z.object({
        size: z.number().refine(f => f <= MAX_FILE_SIZE, "Image size should not be above 5MBs."),
        type: z.string().refine(f => ACCEPTED_IMAGE_TYPES.includes(f), ".jpg, .jpeg, .png and .webp files are accepted."),
        name: z.string().min(5, "Length should be at least 5 characters."),
        lastModified: z.number(),
    }).required(),
    creator: z.string().min(3, "Length should be at least 3 characters."),
    instructions: z.string().min(20, "Length should be at least 20 characters."),
    creator_email: z.string().email("Not a valid email address."),
}).required();

type State = {
    message: string | null,
}

export const shareMeal = async (prevState: {message: string},formData: FormData) => {
    const meal: ServerMeal = {
        title: formData.get("title") as string,
        summary: formData.get("summary") as string,
        image: formData.get("image_picker") as File,
        creator: formData.get("name") as string,
        instructions: formData.get("instructions") as string,
        creator_email: formData.get("email") as string,
    }
    const result =  mealSchema.safeParse(meal);
    if (!result.success) {
        console.log(result.error.format())
        return {
            message: JSON.stringify(result.error.format()),
        }
    }
    await saveMeal(meal);
    revalidatePath("/meals") // fetching path
    redirect("/meals");
}