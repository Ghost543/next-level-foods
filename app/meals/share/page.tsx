"use client";
import {useFormState} from 'react-dom';
import classes from './page.module.css';
import ImagePicker from "@/components/meals/image-picker";
import {shareMeal} from "@/lib/shareMealAction";
import MealSubmitButton from "@/components/meals/meal-submit-button";

const ShareMealPage = () => {
    // const shareMeal = async (formData: FormData) => {
    //     "use server"
    //     const meal = {
    //         title: formData.get("title"),
    //         summary: formData.get("summary"),
    //         image: formData.get("image_picker"),
    //         creator: formData.get("name"),
    //         instructions: formData.get("instructions"),
    //         creator_email: formData.get("email"),
    //     }
    //     console.log(meal);
    // }
    const [state, formAction] = useFormState(shareMeal, {message: ""})
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Share your <span className={classes.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={classes.main}>
                <form className={classes.form} action={formAction}>
                    <div className={classes.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                            { (state.message.trim().length >=1 && JSON.parse(state.message).creator) ? JSON.parse(state.message).creator._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>) : undefined}
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input type="email" id="email" name="email" required />
                            { (state.message.trim().length >=1 && JSON.parse(state.message).creator_email) ? JSON.parse(state.message).creator_email._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>) : undefined}
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                        {(state.message.trim().length >=1 && JSON.parse(state.message).title) ? JSON.parse(state.message).title._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>) : undefined}
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input type="text" id="summary" name="summary" required />
                        {(state.message.trim().length >=1 && JSON.parse(state.message).summary) ? JSON.parse(state.message).summary._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>): undefined}
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows={10}
                            required
                        ></textarea>
                        {(state.message.trim().length >=1 && JSON.parse(state.message).instructions) ? JSON.parse(state.message).instructions._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>) : undefined}
                    </p>
                    <ImagePicker label="Image Picker" name="image_picker" />
                    {(state.message.trim().length >=1 && JSON.parse(state.message).image) ? JSON.parse(state.message).image._errors.map((mss: string, index: number) => <small key={index}>{mss}</small>) : undefined}
                    <p className={classes.actions}>
                        <MealSubmitButton />
                    </p>
                </form>
            </main>
        </>
    );
}

export default ShareMealPage;