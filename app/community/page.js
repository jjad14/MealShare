import Image from 'next/image';

import mealIcon from '@/assets/icons/meal.png';
import communityIcon from '@/assets/icons/community.png';
import eventsIcon from '@/assets/icons/events.png';
import styles from './page.module.css';

export default function CommunityPage() {
	return (
		<>
			<header className={styles.header}>
				<h1>
					One shared passion:{' '}
					<span className={styles.highlight}>Food</span>
				</h1>
				<p>Join our community and share your favorite recipes!</p>
			</header>
			<main className={styles.main}>
				<h2>Community Perks</h2>

				<ul className={styles.perks}>
					<li>
						<Image src={mealIcon} alt='A delicious meal' />
						<p>Discover new dishes, share your own</p>
					</li>
					<li>
						<Image
							src={communityIcon}
							alt='A crowd of people, cooking'
						/>
						<p>Connect with fellow food lovers</p>
					</li>
					<li>
						<Image
							src={eventsIcon}
							alt='A crowd of people at a cooking event'
						/>
						<p>Be part of exclusive recipe drops & events</p>
					</li>
				</ul>
			</main>
		</>
	);
}
