import React from 'react';
import styles from './ButtonRound.module.scss'

interface IButtonRound {
	onClick: () => void
	children?: React.ReactNode
	className?: string
}

export const ButtonRound = ({ onClick, children, className }: IButtonRound) => {
	return (
		<button onClick={onClick}
		        className={[
					styles.buttonRound,
			        className
		        ].join(' ')} >
			{ children }
		</button>
	);
};
