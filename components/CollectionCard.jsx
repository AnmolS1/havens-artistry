import Link from 'next/link';
import Placeholder from './Placeholder';
import Button from './Button';
import Badge from './Badge';
import { collectionImg } from '@/lib/images';
import styles from './CollectionCard.module.css';

// `variant="tile"` → compact home-strip card (whole card links to shop)
// `variant="full"` → Collections-page card with blurb + Explore (or coming-soon)
export default function CollectionCard({ collection, variant = 'full', comingSoon = false, className = '' }) {
	const { name, sub, blurb, slug } = collection;
	const src = collectionImg(slug);

	if (variant === 'tile') {
		return (
			<Link href="/shop" className={`${styles.tile} reveal ${className}`}>
				<Placeholder
					className={styles.tilePh}
					label={`${name.replace(/s$/, '')} shot`}
					sprig="br"
					src={src}
					alt={name}
				/>
				<div className={styles.tileName}>{name}</div>
				<div className={styles.sub}>{sub}</div>
			</Link>
		);
	}

	return (
		<article className={`${styles.card} reveal ${className}`}>
			{comingSoon && <Badge className={styles.soonBadge}>✨ Coming Soon</Badge>}
			<Placeholder
				className={`${styles.fullPh} ${comingSoon ? styles.soon : ''}`}
				framed
				label={comingSoon ? 'Wire animals' : `${name} shot`}
				sprig="br"
				src={src}
				alt={name}
			/>
			<h3 className={styles.title}>{name}</h3>
			<p className={styles.blurb}>{blurb}</p>
			{comingSoon ? (
				<span className={styles.soonBtn}>Blooming soon 🌱</span>
			) : (
				<Button href="/shop" variant="primary">
					Explore
				</Button>
			)}
		</article>
	);
}
