import Link from 'next/link';

import styles from './page.module.css';
import ImageSlideshow from '@/components/images/image-slideshow';

export default function Home() {
	return (
		<>
			<header className={styles.header}>
				<div className={styles.slideshow}>
					<ImageSlideshow />
				</div>
				<div>
					<div className={styles.hero}>
						<h1>Meal Share &ndash; Cook. Share. Inspire. </h1>
						<p>Bringing People Together, One Recipe at a Time.</p>
					</div>
					<div className={styles.cta}>
						<Link href='/community'>Join the Community</Link>
						<Link href='/meals/share'>Explore Meals</Link>
					</div>
				</div>
			</header>
			<main>
				<main>
					<section className={styles.section}>
						<h2>How it works</h2>
						<p>
							Meal Share is a simple way to share your favorite
							recipes and explore new ones from a growing
							community of home cooks.
						</p>
						<p>
							Create an account, post your dishes, and connect
							with others who love to cook and eat just like you.
						</p>
					</section>

					<section className={styles.section}>
						<h2>Why Meal Share?</h2>
						<p>
							Meal Share makes it easy to discover delicious
							meals, exchange ideas, and get inspired by real
							people&rsquo;s recipes.
						</p>
						<p>
							Whether you&apos;re a seasoned chef or just starting
							out, Meal Share is your space to grow, learn, and
							taste something new.
						</p>
					</section>
				</main>
			</main>
		</>
	);
}
