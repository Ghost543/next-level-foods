import React, {FC} from 'react';
import { Metadata, ResolvingMetadata } from 'next'
import {notFound} from "next/navigation";
import Image from "next/image";

import classes from './page.module.css'
import {getMeal} from "@/lib/meals";


type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params

    const meal = getMeal(params.slug)
    if (!meal) notFound();

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: meal.title,
        description: meal.summary,
        openGraph: {
            images: [meal.image.toString() , ...previousImages],
        },
    }
}

const Meal:FC<{params: {slug: string}}> = ({params}) => {
    const meal = getMeal(params.slug)
    if (!meal) notFound();
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");
    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} fill={true}  alt={meal.title}/>
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p className={classes.instructions} dangerouslySetInnerHTML={{ __html: meal.instructions}}></p>
            </main>
        </>
    );
}

export default Meal;