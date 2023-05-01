import React from 'react';
import styles from './Chefs.module.scss'
import {SectionTitle} from "@components/section-title";
import {ChefCard} from "@components/item-chef";

import avatar1 from '@assets/images/avatar1.jpg'
import avatar2 from '@assets/images/avatar2.jpg'
import avatar3 from '@assets/images/avatar3.jpg'

import chefImage11 from '@assets/images/chefImage11.jpg'
import chefImage12 from '@assets/images/chefImage12.jpg'
import chefImage13 from '@assets/images/chefImage13.jpg'
import chefImage21 from '@assets/images/chefImage21.jpg'
import chefImage22 from '@assets/images/chefImage22.jpg'
import chefImage23 from '@assets/images/chefImage23.jpg'
import chefImage31 from '@assets/images/chefImage31.jpg'
import chefImage32 from '@assets/images/chefImage32.jpg'
import chefImage33 from '@assets/images/chefImage33.jpg'

export const Chefs = () => {
	return (
		<div className={styles.chefs}>
			<SectionTitle primaryTitle={"CHEFS"}
			              secondaryTitle={"This Month's Chefs"} />
			<div className={styles.chefsList}>
				<ChefCard avatar={avatar1}
				          name={"Gregory Flores"}
				          role={"Chef of the cold"}
				          images={[chefImage11, chefImage12, chefImage13]} />
				<ChefCard avatar={avatar2}
				          name={"Annette Cooper"}
				          role={"Chef of the hot"}
				          images={[chefImage21, chefImage22, chefImage23]} />
				<ChefCard avatar={avatar3}
				          name={"Greg Fox"}
				          role={"Сhef macro kitchen"}
				          images={[chefImage31, chefImage32, chefImage33]} />
			</div>
		</div>
	);
};