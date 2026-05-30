'use client';

import { useState, useRef } from 'react';
import Placeholder from './Placeholder';
import { useCart } from './CartProvider';
import { CATEGORY_LABELS } from '@/lib/catalog';
import { productImg } from '@/lib/images';
import styles from './ProductCard.module.css';

const SPRIGS = ['br', 'bl', 'tr'];

export default function ProductCard({ product, index = 0 }) {
	const { addToCart } = useCart();
	const [added, setAdded] = useState(false);
	const timer = useRef(null);

	function handleAdd() {
		addToCart(product.name, product.price);
		setAdded(true);
		clearTimeout(timer.current);
		timer.current = setTimeout(() => setAdded(false), 1300);
	}

	const label = CATEGORY_LABELS[product.cat];

	return (
		<article className={`${styles.card} reveal`} data-cat={product.cat}>
			<Placeholder
				className={styles.phImg}
				label={`${label} shot`}
				sprig={SPRIGS[index % 3]}
				src={productImg(product.id)}
				alt={product.name}
			/>
			<span className={styles.catTag}>{label}</span>
			<h3 className={styles.name}>{product.name}</h3>
			<div className={styles.meta}>
				<span className={styles.price}>{product.price}</span>
				<button
					className={`${styles.addBtn} ${added ? styles.added : ''}`}
					onClick={handleAdd}
				>
					{added ? 'Added \u2713' : 'Add to Cart'}
				</button>
			</div>
		</article>
	);
}
