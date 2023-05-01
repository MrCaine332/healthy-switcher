import React from 'react';
import styles from './Input.module.scss'
import Icons from "../icons";
import {IconNames} from "../icons/Icons";


interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
	withResetButton?: boolean
	withIcon?: boolean
	iconName?: IconNames,
	wrapClassName?: string
}

export const Input = (
	{
		withResetButton,
		withIcon,
		iconName,
		wrapClassName,
		className,
		...rest
	}: IInput) => {

	return (
		<div className={[
				styles.inputWrap,
				wrapClassName
			].join(' ')}>

			<input className={[
					styles.input,
					'textNavItem',
					className
				].join(' ')}
				{...rest} />

			<Icons />
			<Icons name={iconName} size={20} />
		</div>
	);
};