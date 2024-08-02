import React, {Suspense} from 'react';
import Link from "next/link";

import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import {getMeals} from "@/lib/meals";
import LoadingOut from "@/app/meals/loading-out";
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: "All Meal",
    description: "Browse the delicious meals and share your recipes.",
};

const Meals = async () => {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

const MealsIndexPage = () => {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious meals, created <span className={classes.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite recipes and cook it your self. It is easy and fun!
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">Share your Favourite Recipe</Link>
                </p>
            </header>
            <main className={classes.main}>
                <Suspense fallback={<LoadingOut />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}

export default MealsIndexPage;