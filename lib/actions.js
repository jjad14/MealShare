'use server';

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

	console.log(meal);
}
