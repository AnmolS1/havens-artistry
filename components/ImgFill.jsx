'use client';

import { useState } from 'react';
import styles from './ImgFill.module.css';

// Fills its parent (a .ph placeholder) with a real photo. If the file is
// missing or fails to load, it removes itself so the decorative placeholder
// underneath shows through — so the layout never breaks while photos are
// being added.
export default function ImgFill({ src, alt = '' }) {
	const [ok, setOk] = useState(true);
	if (!src || !ok) return null;
	return (
		// eslint-disable-next-line @next/next/no-img-element
		<img
			className={styles.img}
			src={src}
			alt={alt}
			loading="lazy"
			decoding="async"
			onError={() => setOk(false)}
		/>
	);
}
