import styles from './RecipeFilter.module.scss'
import {Card} from "@components/ui/card";
import {Input} from "@components/ui/input";
import React from "react";
import {FilterOptions} from "@pages/recipes/Recipes";
import {Option, Select} from "@components/ui/select";
import {getISOStringWithoutSomeTime} from "@app/utils/utils";


interface IRecipeFilter {
	filterOptions: FilterOptions
	setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
}


const timeOptions = [
	{id: 1, title: 'All', time: null},
	{id: 2, title: '1 year', time: getISOStringWithoutSomeTime(3600 * 24 * 1000 * 365)},
	{id: 3, title: '6 months', time: getISOStringWithoutSomeTime(3600 * 24 * 1000 * 182)},
	{id: 4, title: '3 months', time: getISOStringWithoutSomeTime(3600 * 24 * 1000 * 91)},
	{id: 5, title: '1 months', time: getISOStringWithoutSomeTime(3600 * 24 * 1000 * 30)},
	{id: 6, title: '2 weeks', time: getISOStringWithoutSomeTime(3600 * 24 * 1000 * 14)},
	{id: 7, title: '1 day', time: getISOStringWithoutSomeTime(3600 * 24 * 1000)},
]

export const RecipeFilter = ({ filterOptions, setFilterOptions }: IRecipeFilter) => {

	const onTimeChange = (option: Option | null) => {
		if (option) {
			setFilterOptions(prev => ({
				...prev,
				publishedAgo: {
					id: option.id,
					time: timeOptions.find(item => item.id === option.id)?.time || null
				},
				page: 1
			}))
		}
	}

	return (
		<Card className={styles.recipeFilter}>
			<Input value={filterOptions.titleString}
			       onChange={(e) =>
				       setFilterOptions(prev =>
					       ({...prev, titleString: e.target.value, page: 1}))}
			       placeholder={'Title'}
			       iconName={'search'}
			       wrapClassName={styles.titleInput}
			/>
			<Input value={filterOptions.badgeString}
			       onChange={(e) =>
				       setFilterOptions(prev =>
					       ({...prev, badgeString: e.target.value, page: 1}))}
			       placeholder={'Badge'}
			       iconName={'search'}
			       wrapClassName={styles.badgeInput}
			/>
			<Select options={timeOptions}
			        selectedId={filterOptions.publishedAgo.id}
			        onChange={onTimeChange}
			/>

		</Card>
	);
};