import React, {FC} from 'react';
import classes from "./meals-grid.module.css";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import MealItem from "@/components/meals/meal-item";


export type Meal = {
    id: number
    title: string
    summary: string
    image: StaticImport
    slug: string
    creator: string
    instructions: string
    creator_email: string
};

const MealsGrid:FC<{meals: Meal[]}> = ({meals}) => {
    return (
        <ul className={classes.meals}>
            {meals.map(meal => (
                <li key={meal.id}>
                    <MealItem title={meal.title} slug={meal.slug} image={meal.image} summary={meal.summary} creator={meal.creator} />
                </li>
            ))}
        </ul>
    );
};

export default MealsGrid;