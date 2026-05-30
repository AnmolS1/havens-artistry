import { Sprig, Spiral } from './Decor';
import styles from './Divider.module.css';

// Spiral + vine divider. `bare` removes the large vertical margin wrapper.
export default function Divider({ bare = false }) {
	const inner = (
		<div className={styles.divider}>
			<span className={styles.line} />
			<Sprig width={48} />
			<Spiral size={34} strokeWidth={3.6} />
			<Sprig width={48} style={{ transform: 'scaleX(-1)' }} />
			<span className={styles.line} />
		</div>
	);
	return bare ? inner : <div className={styles.wrap}>{inner}</div>;
}
