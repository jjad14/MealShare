import { Suspense } from 'react';
import Link from 'next/link';

import MealGrid from '@/components/meals/meals-grid';
import styles from './page.module.css';
import { getMeals } from '@/lib/meals';

async function Meals() {
	const meals = await getMeals();

	return <MealGrid meals={meals} />;
}

export default function MealsPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					Delicious Meals, created&nbsp;
					<span className={styles.highlight}>by you</span>
				</h1>
				<p>Find dishes you like and make them your own!</p>
				<p className={styles.cta}>
					<Link href='/meals/share'>Share Your Recipes</Link>
				</p>
			</header>
			<main className={styles.main}>
				<Suspense
					fallback={
						<p className={styles.loading}>Fetching Meals...</p>
					}>
					<Meals />
				</Suspense>
			</main>
		</>
	);
}
