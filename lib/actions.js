'use server';

import { redirect } from 'next/navigation';
import { createMeal } from './meals';

export async function submitMeal(formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		ingredients: formData.get('ingredients'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	};

	await createMeal(meal);

	redirect('/meals');
}
