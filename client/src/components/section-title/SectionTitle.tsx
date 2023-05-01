import React from 'react';
import styles from './SectionTitle.module.scss'
import {Divider} from "@components/ui/divider";

interface ISectionTitle {
	primaryTitle: string
	secondaryTitle?: string
	withUnderline?: boolean
}

export const SectionTitle = ({ primaryTitle, secondaryTitle, withUnderline = true }: ISectionTitle) => {
	return (
		<div className={styles.sectionTitle}>
			<div className={styles.titles}>
				<p className={styles.firstTitle}>
					{ primaryTitle }
				</p>
				<h2 className={styles.secondTitle}>
					{ secondaryTitle }
				</h2>
			</div>
			{ withUnderline ? <Divider className={styles.titleUnderline} /> : null }
		</div>
	);
};