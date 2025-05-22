'use client';

import Link from 'next/link';
import Image from 'next/image';

import logoImg from '@/assets/logo.png';
import styles from './header.module.css';
import HeaderBackground from './header-background';
import NavLink from './nav-link';

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
							<NavLink href='/meals'>Browse Meals</NavLink>
						</li>
						<li>
							<NavLink href='/community'>Community</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	);
}
