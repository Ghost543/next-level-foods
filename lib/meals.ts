import fs from "node:fs";
import sql from 'better-sqlite3';
import xss from "xss";
import {Meal} from "@/components/meals/meals-grid";
import {ServerMeal} from "@/lib/shareMealAction";
import slugify from "@/utilities/slugify";

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    // throw new Error('Meals not found');
    return db.prepare<Meal[],Meal>("SELECT * FROM meals").all();
}

export const getMeal =  (slug: string) => {
    // await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    return db.prepare<string, Meal>("SELECT * FROM meals WHERE slug = ?;").get(slug);
}

export const saveMeal = async (meal: ServerMeal) => {
    const slug = slugify(meal.title);
    const instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop()?.trim();
    const fileName = `${slug}.${extension}`;

    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const buffer = await meal.image.arrayBuffer();

    stream.write(Buffer.from(buffer), error => {
        if (error) {
            throw new Error("Saving Image Failed", error);
        }
    });

    const image = `/images/${fileName}`;

    db.prepare(`INSERT INTO meals (title, summary, instructions, image, slug, creator, creator_email)
        VALUES (
                   @title,
                   @summary,
                   @instructions,
                   @image,
                   @slug,
                   @creator,
                   @creator_email
               )`).run({
            title: meal.title,
            summary: meal.summary,
            instructions: instructions,
            image: image,
            slug: slug,
            creator: meal.creator,
            creator_email: meal.creator_email
        })

};