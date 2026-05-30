import Link from 'next/link';
import styles from './Button.module.css';

function SpinCoil() {
	return (
		<svg className={styles.spin} viewBox="-20 -20 40 40" fill="none" aria-hidden="true">
			<path
				d="M0 0 A1.4 2.6 0 0 1 4 0 A5.4 7 0 0 1 -8 0 A9.4 11 0 0 1 13 0 A13.4 15 0 0 1 -17 0"
				stroke="currentColor"
				strokeWidth="2.4"
				strokeLinecap="round"
			/>
		</svg>
	);
}

// Cottagecore button. Renders an <a> (via next/link) when `href` is set,
// otherwise a <button>. Variants: 'primary' | 'mint' | 'ghost' | (default).
export default function Button({
	href,
	external,
	variant,
	size,
	block,
	spin,
	className = '',
	children,
	style,
	...rest
}) {
	const cls = [
		styles.btn,
		variant && styles[variant],
		size === 'lg' && styles.lg,
		block && styles.block,
		className,
	]
		.filter(Boolean)
		.join(' ');

	const content = (
		<>
			{spin && <SpinCoil />}
			{children}
		</>
	);

	if (href && external) {
		return (
			<a href={href} className={cls} style={style} {...rest}>
				{content}
			</a>
		);
	}
	if (href) {
		return (
			<Link href={href} className={cls} style={style} {...rest}>
				{content}
			</Link>
		);
	}
	return (
		<button className={cls} style={style} {...rest}>
			{content}
		</button>
	);
}
