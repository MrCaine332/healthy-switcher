import React from 'react';
import styles from './Hero.module.scss'
import {Button} from '@components/ui/button';
import {Contacts} from '@components/contacts';

export const Hero = () => {
	return (
		<div className={styles.hero}>
			<div className={styles.heroContent}>
				<h1 className={'textHero ' + styles.heroTitle}>
					Your <span className={'textHeroBold'}>Favourite Food</span>
					<br/>
					Delivered <span className={'textHeroBold'}>Hot <i>&</i> Fresh</span>
				</h1>
				<p className={'textBodyLarge ' + styles.heroText}>
					HEALTHY SWITCHER chefs do all the prep work, like peeling, chopping & marinating, so you can cook a fresh homemade dinner in just 15 minutes.
				</p>
				<Button style={'filled'} className={styles.heroButton}>
					Order Now
				</Button>
				<Contacts />
			</div>
		</div>
	);
};
