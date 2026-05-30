import styles from './Badge.module.css';

export default function Badge({ className = '', children, style }) {
	return (
		<span className={`${styles.badge} ${className}`} style={style}>
			{children}
		</span>
	);
}
