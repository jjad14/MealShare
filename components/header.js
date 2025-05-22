import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import styles from './main-header.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/' className={styles.logo}>
				<img src={logoImg.src} alt='Meal Share Logo' />
				Meal Share
			</Link>

			<nav className={styles.nav}>
				<ul>
					<li>
						<Link href='/meals'>Browse</Link>
					</li>
					<li>
						<Link href='/community'>Community</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
