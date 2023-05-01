import React from 'react';
import styles from './Button.module.scss'

interface IButton {
	children?: React.ReactNode
	style?: 'filled' | 'outlined'
	onClick?: () => void
	className?: string
}

export const Button = ({
	children,
	style = "outlined",
	onClick,
	className
}: IButton) => {
	return (
		<button className={[
					'textButton',
					styles.button,
					styles["button_" + style],
					className
				].join(' ')}
		        onClick={onClick}
		>
			{ children }
		</button>
	);
};