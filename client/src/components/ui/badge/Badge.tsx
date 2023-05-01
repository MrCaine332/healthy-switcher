import styles from './Badge.module.scss'

interface IBadge {
	text?: string
}

export const Badge = ({ text }: IBadge) => {
	return (
		<div className={styles.badge}>
			{ text }
		</div>
	);
};