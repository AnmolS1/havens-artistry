'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAV } from '@/lib/decor';
import { Spiral, CartIcon } from './Decor';
import { useCart } from './CartProvider';
import styles from './Header.module.css';

function isActive(pathname, href) {
	if (href === '/') return pathname === '/';
	return pathname === href || pathname.startsWith(href + '/');
}

export default function Header() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const { count } = useCart();

	return (
		<header className={styles.header}>
			<div className={styles.bar}>
				<Link href="/" className={styles.logo} aria-label="Haven's Artistry home">
					<Spiral className={styles.logoSpiral} />
					<span>
						<span className={styles.lm}>Logo</span>
						<br />
						<span className={styles.ls}>Placeholder</span>
					</span>
				</Link>

				<nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
					{NAV.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`${styles.link} ${isActive(pathname, item.href) ? styles.active : ''}`}
							onClick={() => setOpen(false)}
						>
							{item.label}
						</Link>
					))}
				</nav>

				<div className={styles.right}>
					<Link href="/checkout" className={styles.cartBtn} aria-label="Cart">
						<CartIcon />
						{count > 0 && <span className={styles.cartCount}>{count}</span>}
					</Link>
					<button
						className={styles.hamburger}
						aria-label="Menu"
						aria-expanded={open}
						onClick={() => setOpen((o) => !o)}
					>
						<span />
						<span />
						<span />
					</button>
				</div>
			</div>
		</header>
	);
}
