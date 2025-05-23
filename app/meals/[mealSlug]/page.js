import Image from 'next/image';
import styles from './page.module.css';
import { getMeal } from '@/lib/meals';
import { notFound } from 'next/navigation';

export default async function MealDetailsPage({ params }) {
	const { mealSlug } = await params;
	const meal = getMeal(mealSlug);

	// Check if the meal exists
	if (!meal) {
		notFound();
	}

	// Replace newlines with <br> tags
	meal.instructions = meal.instructions.replace(/\n/g, '<br>');

	return (
		<>
			<header className={styles.header}>
				<div className={styles.image}>
					<Image src={meal.image} alt={meal.title} fill />
				</div>
				<div className={styles.headerText}>
					<h1>{meal.title}</h1>
					<p className={styles.creator}>
						by{' '}
						<a href={`malito:${meal.creator_email}`}>
							{meal.creator}
						</a>
					</p>
					<p className={styles.summary}>{meal.summary}</p>
				</div>
			</header>
			<main className={styles.main}>
				<p
					className={styles.instructions}
					dangerouslySetInnerHTML={{
						__html: meal.instructions
					}}></p>
			</main>
		</>
	);
}
