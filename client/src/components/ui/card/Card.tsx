import styles from './Card.module.scss'

interface ICard {
	className?: string
	children?: React.ReactNode
}

export const Card = ({ className, children }: ICard) => {
	return (
		<div className={[styles.card, className].join(' ')}>
			{ children }
		</div>
	);
};