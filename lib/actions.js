'use server';

import { redirect } from 'next/navigation';
import { createMeal } from './meals';

function isInvalidText(text) {
	return !text || text.trim() === '';
}

export async function submitMeal(prevState, formData) {
	const meal = {
		title: formData.get('title'),
		summary: formData.get('summary'),
		instructions: formData.get('instructions'),
		ingredients: formData.get('ingredients'),
		image: formData.get('image'),
		creator: formData.get('name'),
		creator_email: formData.get('email')
	};

	// validation
	if (
		isInvalidText(meal.title) ||
		isInvalidText(meal.summary) ||
		isInvalidText(meal.instructions) ||
		isInvalidText(meal.ingredients) ||
		isInvalidText(meal.creator) ||
		isInvalidText(meal.creator_email) ||
		!meal.creator_email.incudes('@') ||
		!meal.image ||
		meal.image.size === 0
	) {
		return { errorMsg: 'Missing or Invalid required fields' };
	}

	await createMeal(meal);

	redirect('/meals');
}
