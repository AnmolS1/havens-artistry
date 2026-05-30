// Decorative inline-SVG motifs. Pure presentational components (no hooks),
// so they render correctly inside both server and client components.
// Colours come from `currentColor` — set `color` via style/className on the host.

import { SPIRAL_PATH, LEAF_PATH } from '@/lib/decor';

/* The signature spiral coil. */
export function Spiral({ size, className, style, strokeWidth = 3.2 }) {
	return (
		<svg
			className={className}
			style={size ? { width: size, height: size, ...style } : style}
			viewBox="-58 -54 116 108"
			fill="none"
			aria-hidden="true"
		>
			<path d={SPIRAL_PATH} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" />
		</svg>
	);
}

/* Four-point sparkle star. */
export function Star({ size = 16, className, style }) {
	return (
		<svg
			className={className}
			width={size}
			height={size}
			style={style}
			viewBox="0 0 24 24"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M12 1 C13 8 16 11 23 12 C16 13 13 16 12 23 C11 16 8 13 1 12 C8 11 11 8 12 1Z"
				fill="currentColor"
			/>
		</svg>
	);
}

/* Leafy sprig (trailing stem with a few leaves). */
export function Sprig({ width = 64, className, style }) {
	return (
		<svg className={className} width={width} style={style} viewBox="0 0 120 60" fill="none" aria-hidden="true">
			<path d="M4 52 C30 50 64 42 110 8" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
			<path d="M40 44 c-3-9-1-16 5-22 4 8 3 16-5 22z" fill="currentColor" opacity=".55" />
			<path d="M58 38 c-2-9 1-16 8-21 3 8 1 16-8 21z" fill="currentColor" opacity=".42" />
			<path d="M78 28 c-2-9 2-16 9-20 2 8-1 16-9 20z" fill="currentColor" opacity=".5" />
			<path d="M26 48 c-9-2-15 1-20 7 9 2 15-1 20-7z" fill="currentColor" opacity=".42" />
		</svg>
	);
}

/* Corner flourish: spiral + sprig. */
export function Flourish({ className, style }) {
	return (
		<svg className={className} style={style} viewBox="0 0 60 60" fill="none" aria-hidden="true">
			<path
				d="M30 30 A2 3.4 0 0 1 35 30 A5.6 7 0 0 1 24 30 A9.6 11 0 0 1 41 30 A13.6 15 0 0 1 18 30"
				stroke="currentColor"
				strokeWidth="2.1"
				strokeLinecap="round"
			/>
			<path d="M30 30 C26 22 20 16 8 12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
			<path d="M18 19 c-4-2-8-1-11 2 4 2 8 1 11-2z" fill="currentColor" opacity=".55" />
			<path d="M13 23 c-4-1-8 1-10 4 4 1 8-1 10-4z" fill="currentColor" opacity=".4" />
			<circle cx="8" cy="12" r="2" fill="currentColor" />
		</svg>
	);
}

const BRANCH_LEAVES = [
	{ t: 'translate(46 101) rotate(-58) scale(1.05)', o: 0.62 },
	{ t: 'translate(60 96) rotate(38) scale(.9)', o: 0.5 },
	{ t: 'translate(74 88) rotate(-30)', o: 0.58 },
	{ t: 'translate(102 78) rotate(-62) scale(1.08)', o: 0.6 },
	{ t: 'translate(116 72) rotate(44) scale(.92)', o: 0.5 },
	{ t: 'translate(130 64) rotate(-26)', o: 0.56 },
	{ t: 'translate(158 52) rotate(-58)', o: 0.58 },
	{ t: 'translate(174 44) rotate(42) scale(.86)', o: 0.48 },
	{ t: 'translate(190 34) rotate(-22) scale(.9)', o: 0.54 },
	{ t: 'translate(208 26) rotate(-54) scale(.82)', o: 0.5 },
];

/* A full leafy branch with a spiral curl at the tip. */
export function Branch({ className, style }) {
	return (
		<svg className={className} style={style} viewBox="0 0 250 122" fill="none" aria-hidden="true">
			<g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
				<path d="M10 114 C82 106 168 74 246 12" />
				<path d="M70 92 C62 80 62 70 72 62" />
				<path d="M126 68 C120 56 122 46 132 40" />
				<path d="M182 42 C178 30 182 22 192 18" />
				<path d="M236 14 a1.7 3 0 0 1 4.6 0 a5.7 7 0 0 1 -9.1 0 a9.7 11 0 0 1 14 0" strokeWidth="2" />
			</g>
			<g fill="currentColor" stroke="none">
				{BRANCH_LEAVES.map((l, i) => (
					<path key={i} d={LEAF_PATH} transform={l.t} opacity={l.o} />
				))}
			</g>
		</svg>
	);
}

/* Six-petal bloom. */
export function Bloom({ className, style }) {
	return (
		<svg className={className} style={style} viewBox="0 0 60 60" aria-hidden="true">
			<g fill="currentColor" stroke="none">
				{[0, 60, 120, 180, 240, 300].map((a) => (
					<ellipse key={a} cx="30" cy="15" rx="7.6" ry="13" transform={`rotate(${a} 30 30)`} />
				))}
			</g>
			<circle cx="30" cy="30" r="7" fill="#fff" opacity=".82" />
			<circle cx="30" cy="30" r="3.4" fill="currentColor" opacity=".55" />
		</svg>
	);
}

/* Cart glyph. */
export function CartIcon({ size = 22 }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path
				d="M3 4h2l2.4 12.2a1.6 1.6 0 0 0 1.6 1.3h8.3a1.6 1.6 0 0 0 1.55-1.2L21 8H6"
				stroke="currentColor"
				strokeWidth="1.8"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<circle cx="10" cy="21" r="1.4" fill="currentColor" />
			<circle cx="18" cy="21" r="1.4" fill="currentColor" />
		</svg>
	);
}

/* Plus glyph used as the accordion open/close indicator. */
export function PlusGlyph({ className }) {
	return (
		<svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<path d="M12 4v16M4 12h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
		</svg>
	);
}

/* Full-width footer vine border. */
export function FooterVine({ className }) {
	return (
		<svg
			className={className}
			viewBox="0 0 1200 54"
			preserveAspectRatio="none"
			fill="none"
			aria-hidden="true"
		>
			<path
				d="M0 34 C100 12 200 12 300 34 S500 56 600 34 800 12 900 34 1100 56 1200 34"
				stroke="currentColor"
				strokeWidth="2.4"
				fill="none"
			/>
			<g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round">
				<path d="M300 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" />
				<path d="M600 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" />
				<path d="M900 34 a3 4 0 0 1 6 0 a7 8 0 0 1 -13 0 a11 12 0 0 1 19 0" />
			</g>
			<g fill="currentColor" opacity=".55">
				<path d="M150 22 c-7-4-14-2-19 4 7 4 14 2 19-4z" />
				<path d="M450 46 c7 4 14 2 19-4 -7-4 -14-2 -19 4z" />
				<path d="M750 22 c-7-4-14-2-19 4 7 4 14 2 19-4z" />
				<path d="M1050 46 c7 4 14 2 19-4 -7-4 -14-2 -19 4z" />
			</g>
		</svg>
	);
}
