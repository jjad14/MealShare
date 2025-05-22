import Link from 'next/link';

import styles from './page.module.css';
import MealGrid from '@/components/meals/meals-grid';

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
					<Link href='/share'>Share Your Recipes</Link>
				</p>
			</header>
			<main className={styles.main}>
				<MealGrid meals={[]} />
			</main>
		</>
	);
}
