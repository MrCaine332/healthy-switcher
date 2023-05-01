import styles from './Rating.module.scss'
import Icons from "@components/ui/icons";
import {IconNames} from "@components/ui/icons/Icons";
import React, {memo} from "react";

interface IRating {
	votesAverage: number
	votesTotal?: number
}

const getStars = (votesAverage: number) => {
	const array: ('full' | 'half' | 'empty')[] = []
	const fullStars = Math.floor(votesAverage)
	for (let i = 1; i <= fullStars; i++) {
		array.push('full')
	}
	const hasHalfStar = Number((votesAverage - fullStars).toFixed(2)) / 0.25
	if (hasHalfStar >= 3)
		array.push('full')
	else if (hasHalfStar >= 1)
		array.push('half')
	else if (hasHalfStar > 0)
		array.push('empty')
	const emptyStars = 5 - array.length
	for (let i = 1; i <= emptyStars; i++) {
		array.push('empty')
	}
	return array
}

export const Rating = memo(({ votesAverage, votesTotal }: IRating) => {
	const stars = getStars(votesAverage)

	return (
		<div className={styles.rating}>
			{ stars.map((star, index) => (
				<Icons key={index} name={star === 'full' ? 'star' : ('star-' + star) as IconNames} />
			)) }
			{ votesTotal !== undefined ? <p className={styles.votes}>{ votesTotal }</p> : null }
		</div>
	);
});

