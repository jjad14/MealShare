import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import styles from './header.module.css';
import HeaderBackground from './header-background';

export default function Header() {
	return (
		<>
			<HeaderBackground />
			<header className={styles.header}>
				<Link href='/' className={styles.logo}>
					<Image src={logoImg} alt='Meal Share Logo' priority />
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
		</>
	);
}
