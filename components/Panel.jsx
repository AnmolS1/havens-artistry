import { Flourish } from './Decor';
import styles from './Panel.module.css';

// Soft card surface. Pass `flourish` to add spiral corner flourishes.
export default function Panel({ flourish, className = '', style, children, as: Tag = 'div', ...rest }) {
	return (
		<Tag className={`${styles.panel} ${className}`} style={style} {...rest}>
			{children}
			{flourish && (
				<>
					<Flourish className={`${styles.flourish} ${styles.tl}`} />
					<Flourish className={`${styles.flourish} ${styles.tr}`} />
					<Flourish className={`${styles.flourish} ${styles.bl}`} />
					<Flourish className={`${styles.flourish} ${styles.br}`} />
				</>
			)}
		</Tag>
	);
}
