import React from 'react';
import styles from './About.module.scss'
import {SectionTitle} from "@components/section-title";
import {AboutSlider} from "@modules/home-modules/about/components/slider";
import {Card} from "@components/ui/card";

export const About = () => {
	return (
		<Card className={styles.about}>
			<SectionTitle primaryTitle={"ABOUT"}
			              secondaryTitle={"The Basics Of Healthy Food"}
			              withUnderline={false}
			/>
			<p className={'textBodyLarge ' + styles.text}>
				In aliqua ea ullamco ad est ex non deserunt nulla.
				Consectetur sint ea aliquip aliquip consectetur voluptate est.
				Eu minim dolore laboris enim mollit voluptate irure esse aliquip.
			</p>
			<div className={styles.sliderWrap}>
				<AboutSlider />
			</div>
		</Card>
	);
};

