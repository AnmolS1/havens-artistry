import { Branch, Spiral, Bloom, Star } from './Decor';
import styles from './HeroDeco.module.css';

// Leafy branches: [positionStyle, animClass, animationDelay]
const BRANCHES = [
	[{ top: '-14px', left: '-10px', width: 240, color: 'var(--mint)' }, 'anim-sway', null],
	[{ top: '-20px', right: '-14px', width: 260, color: 'var(--lavender)', transform: 'scaleX(-1)' }, 'anim-sway2', null],
	[{ top: '32%', left: '-34px', width: 200, color: 'var(--lime)', opacity: 0.8, transform: 'rotate(56deg)' }, 'anim-sway2', '1.4s'],
	[{ top: '38%', right: '-38px', width: 210, color: 'var(--rose)', opacity: 0.7, transform: 'scaleX(-1) rotate(56deg)' }, 'anim-sway', '.7s'],
	[{ bottom: '-22px', left: '13%', width: 200, color: 'var(--mint)', opacity: 0.85, transform: 'scaleY(-1)' }, 'anim-sway2', '2s'],
	[{ bottom: '-26px', right: '15%', width: 190, color: 'var(--pink)', opacity: 0.7, transform: 'scale(-1,-1)' }, 'anim-sway', '1.1s'],
];

// Spirals: positionStyle (anim-spin)
const SPIRALS = [
	{ bottom: '-70px', left: '-50px', width: 260, color: 'var(--pink)', opacity: 0.38 },
	{ bottom: '2%', right: '-40px', width: 170, color: 'var(--rose)', opacity: 0.4, animationDuration: '55s', animationDirection: 'reverse' },
	{ top: '8%', left: '40%', width: 90, color: 'var(--lavender)', opacity: 0.32, animationDuration: '48s' },
	{ top: '60%', left: '22%', width: 120, color: 'var(--mauve)', opacity: 0.3, animationDuration: '60s', animationDirection: 'reverse' },
	{ top: '22%', right: '14%', width: 80, color: 'var(--mint)', opacity: 0.42, animationDuration: '42s' },
	{ bottom: '24%', left: '48%', width: 70, color: 'var(--rose)', opacity: 0.34, animationDuration: '50s', animationDirection: 'reverse' },
];

// Blooms: [positionStyle, animClass, animationDelay]
const BLOOMS = [
	[{ top: '16%', left: '12%', width: 64, color: 'var(--pink)' }, 'anim-bloom', null],
	[{ top: '24%', right: '18%', width: 54, color: 'var(--lavender)' }, 'anim-float', '1.2s'],
	[{ bottom: '18%', left: '30%', width: 48, color: 'var(--rose)' }, 'anim-bloom', '.8s'],
	[{ bottom: '26%', right: '30%', width: 60, color: 'var(--mint)' }, 'anim-float', '2.1s'],
	[{ top: '52%', right: '9%', width: 42, color: 'var(--lavender)' }, 'anim-bloom', '1.6s'],
	[{ top: '50%', left: '7%', width: 46, color: 'var(--pink)' }, 'anim-float', '.4s'],
];

// Stars: [positionStyle, animationDelay]
const STARS = [
	[{ top: '14%', left: '58%', color: 'var(--lavender)' }, 26, null],
	[{ top: '64%', left: '10%', color: 'var(--mauve)' }, 22, '1.2s'],
	[{ top: '30%', right: '24%', color: 'var(--rose)' }, 24, '.6s'],
	[{ top: '70%', right: '18%', color: 'var(--mint)' }, 18, '1.8s'],
	[{ top: '42%', left: '34%', color: 'var(--pink)' }, 16, '.3s'],
	[{ top: '80%', left: '42%', color: 'var(--lavender)' }, 20, '2.4s'],
	[{ top: '38%', right: '42%', color: 'var(--mauve)' }, 14, '1.5s'],
];

// Falling petals (anim-fall)
const PETALS = [
	{ top: 0, left: '18%', width: 26, color: 'var(--pink)', animationDuration: '13s' },
	{ top: 0, left: '38%', width: 20, color: 'var(--lavender)', animationDuration: '17s', animationDelay: '3s' },
	{ top: 0, left: '62%', width: 24, color: 'var(--mint)', animationDuration: '15s', animationDelay: '6s' },
	{ top: 0, left: '82%', width: 18, color: 'var(--rose)', animationDuration: '19s', animationDelay: '1.5s' },
	{ top: 0, left: '50%', width: 22, color: 'var(--pink)', animationDuration: '21s', animationDelay: '9s' },
];

export default function HeroDeco() {
	return (
		<div className={styles.heroDeco} aria-hidden="true">
			{/* leafy branches (orientation on wrapper, sway on inner svg) */}
			{BRANCHES.map(([style, anim, delay], i) => (
				<div key={`b${i}`} className={styles.heroBr} style={style}>
					<Branch className={anim} style={delay ? { animationDelay: delay } : undefined} />
				</div>
			))}

			{/* spirals */}
			{SPIRALS.map((style, i) => (
				<span key={`s${i}`} className={`${styles.heroEl} anim-spin`} style={style}>
					<Spiral />
				</span>
			))}

			{/* breathing blooms */}
			{BLOOMS.map(([style, anim, delay], i) => (
				<span key={`fl${i}`} className={`${styles.heroEl} ${anim}`} style={delay ? { ...style, animationDelay: delay } : style}>
					<Bloom />
				</span>
			))}

			{/* twinkling stars */}
			{STARS.map(([style, size, delay], i) => (
				<span
					key={`st${i}`}
					className="anim-twinkle"
					style={{ ...style, width: size, height: size, ...(delay ? { animationDelay: delay } : {}) }}
				>
					<Star size={size} />
				</span>
			))}

			{/* drifting / falling petals */}
			{PETALS.map((style, i) => (
				<span key={`p${i}`} className={`${styles.heroEl} anim-fall`} style={style}>
					<Bloom />
				</span>
			))}
		</div>
	);
}
