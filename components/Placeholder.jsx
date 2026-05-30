import { Sprig } from './Decor';
import styles from './Placeholder.module.css';

const SPRIG_POS = { br: styles.sprigBr, bl: styles.sprigBl, tr: styles.sprigTr, tl: styles.sprigTl };

// Decorative image placeholder with a hand-drawn frame. The `label` shows as a
// pill (via CSS attr(data-label)); `sprig` drops a little leafy sprig in a corner.
export default function Placeholder({ label, sprig, framed, className = '', style, children }) {
	const cls = [styles.ph, framed && styles.framed, className].filter(Boolean).join(' ');
	return (
		<div className={cls} data-label={label} style={style}>
			{children}
			{sprig && (
				<span className={`${styles.sprig} ${SPRIG_POS[sprig] || ''}`}>
					<Sprig width={70} />
				</span>
			)}
		</div>
	);
}
