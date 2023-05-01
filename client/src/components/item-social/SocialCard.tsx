import styles from './SocialCard.module.scss'
import React from "react";
import Icons, {IconNames} from "@components/ui/icons/Icons";
import {Button} from "@components/ui/button";

interface ISocialCard {
	children?: React.ReactNode
	icon?: IconNames
	title: string
}

export const SocialCard = ({ children, icon, title}: ISocialCard) => {
	return (
		<div className={styles.socialCard}>
			<div className={styles.socialCardHeader}>
				<div className={styles.socialCardIcon}>
					<Icons name={icon} size={20} />
				</div>
				<p>{ title }</p>
				<Button className={styles.followButton}>
					FOLLOW US
				</Button>
			</div>
			<div className={styles.socialCardContent}>
				{ children }
			</div>
		</div>
	);
};