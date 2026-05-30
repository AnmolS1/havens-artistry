import Divider from './Divider';
import styles from './PageHead.module.css';

const DEFAULT_BLOBS = [
	{ width: 320, height: 320, background: 'var(--lavender)', top: '-90px', left: '8%' },
	{ width: 300, height: 300, background: 'var(--mint)', top: '-50px', right: '8%' },
];

// Shared interior-page header: eyebrow + display title + lead, framed by
// soft blobs, with an optional spiral divider beneath.
export default function PageHead({
	eyebrow,
	title,
	children,
	blobs = DEFAULT_BLOBS,
	divider = true,
	titleSize,
}) {
	return (
		<section className={styles.head}>
			{blobs.map((b, i) => (
				<span key={i} className="blob" style={b} />
			))}
			<div className={`wrap ${styles.inner}`}>
				{eyebrow && <span className="eyebrow">{eyebrow}</span>}
				<h1 className="display" style={{ fontSize: titleSize || 'clamp(2.6rem,6vw,4.4rem)' }}>
					{title}
				</h1>
				{children && (
					<p className="lead center" style={{ margin: '.6em auto 0' }}>
						{children}
					</p>
				)}
			</div>
			{divider && <Divider />}
		</section>
	);
}
