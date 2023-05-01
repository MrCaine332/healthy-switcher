import React from 'react';
import styles from './Work.module.scss'
import {SectionTitle} from "@components/section-title";
import {ItemWork} from "@components/item-work";

export const Work = () => {
	return (
		<div className={styles.work}>
			<SectionTitle primaryTitle={"WORK"} secondaryTitle={"How it works"} />
			<div className={styles.workCards}>
				<ItemWork title={"Pick Meals"}>
					Choose your meals from our diverse weekly menu.
					Find gluten or dairy free, low carb & veggie options.
				</ItemWork>
				<ItemWork title={"Choose how often"}>
					Our team of chefs do the prep work - no more chopping,
					measuring, or sink full of dishes!
				</ItemWork>
				<ItemWork title={"Fast Deliveries"}>
					Your freshly prepped 15-min dinner kits arrive on your
					doorstep in a refrigerated box.
				</ItemWork>
				<ItemWork title={"Tasty Meals"}>
					Gobble makes cooking fast, so you have more time to
					unwind and be with family.
				</ItemWork>
			</div>
		</div>
	);
};