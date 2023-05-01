import React from 'react';
import styles from './Divider.module.scss'

interface ISeparationLine {
	className?: string
}

export const Divider = ({ className }: ISeparationLine) => {
	return (
		<hr className={[styles.separationLine, className].join(' ')}/>
	);
};
