import React from 'react';
import {SectionTitle} from "@components/section-title";
import styles from './Dishes.module.scss'

import {useQuery} from "@tanstack/react-query";
import {getDailyDishes} from "@app/http/api-calls";
import {Dish} from "@app/types/dish";
import {ListDishes} from "@components/list-dishes/ListDishes";

export const Dishes = () => {
	const { data, isLoading } = useQuery<Dish[]>({
		queryKey: ["dishes", "daily"],
		queryFn: () => getDailyDishes(),
	})

	return (
		<div className={styles.dishes}>
			<SectionTitle primaryTitle={"DISHES"} secondaryTitle={"Dish Of The Day"}  />
			<div className={styles.dishesWrap}>
				<ListDishes dishes={data} />
			</div>
		</div>
	);
};