import React from 'react';
import styles from './Page.module.scss'
import {Hero} from "@modules/home-modules/hero/Hero";
import {About} from "@modules/home-modules/about";
import {Work} from "@modules/home-modules/work";
import {Dishes} from "@modules/home-modules/dishes";
import {Chefs} from "@modules/home-modules/chefs";
import {Recipes} from "@modules/home-modules/recipes";
import {Social} from "@modules/home-modules/social/Social";

export const Home = () => {
	return (
		<div className={styles.home}>
			<Hero />
			<About />
			<Work />
			<Dishes />
			<Chefs />
			<Recipes />
			<Social />
		</div>
	);
};