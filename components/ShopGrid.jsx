'use client';

import { useState } from 'react';
import { Flourish } from './Decor';
import ProductCard from './ProductCard';
import { FILTERS, PRODUCTS } from '@/lib/catalog';
import styles from './ShopGrid.module.css';

export default function ShopGrid() {
	const [active, setActive] = useState('all');
	const shown = PRODUCTS.filter((p) => active === 'all' || p.cat === active);

	return (
		<>
			<div className={styles.pillFilters}>
				{FILTERS.map((f) => (
					<button
						key={f.key}
						className={`${styles.filter} ${active === f.key ? styles.activeFilter : ''}`}
						onClick={() => setActive(f.key)}
					>
						{f.label}
					</button>
				))}
			</div>

			<div className={styles.frame}>
				<Flourish className={`${styles.corner} ${styles.tl}`} />
				<Flourish className={`${styles.corner} ${styles.tr}`} />
				<Flourish className={`${styles.corner} ${styles.bl}`} />
				<Flourish className={`${styles.corner} ${styles.br}`} />

				{shown.length ? (
					<div className={styles.grid}>
						{shown.map((p, i) => (
							<ProductCard key={p.name} product={p} index={i} />
						))}
					</div>
				) : (
					<p className={styles.empty}>No blooms in this patch just yet 🌱</p>
				)}
			</div>
		</>
	);
}
