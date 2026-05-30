import { Sprig } from './Decor';
import ImgFill from './ImgFill';
import styles from './Placeholder.module.css';

const SPRIG_POS = { br: styles.sprigBr, bl: styles.sprigBl, tr: styles.sprigTr, tl: styles.sprigTl };

// Decorative image placeholder with a hand-drawn frame.
//  - `label`  shows as a pill (via CSS attr(data-label)) and doubles as alt text
//  - `sprig`  drops a little leafy sprig in a corner ('br' | 'bl' | 'tr' | 'tl')
//  - `src`    when set, fills the frame with a real photo (falls back to the
//             placeholder automatically if the file is missing)
export default function Placeholder({ label, sprig, framed, src, alt, className = '', style, children }) {
	const cls = [styles.ph, framed && styles.framed, className].filter(Boolean).join(' ');
	return (
		<div className={cls} data-label={label} style={style}>
			{children}
			{sprig && (
				<span className={`${styles.sprig} ${SPRIG_POS[sprig] || ''}`}>
					<Sprig width={70} />
				</span>
			)}
			{src && <ImgFill src={src} alt={alt || label || ''} />}
		</div>
	);
}
