import styles from './MenuFilter.module.scss'
import {Card} from "@components/ui/card";
import {Input} from "@components/ui/input";
import React from "react";
import {Select} from "@components/ui/select";
import {Range} from "@components/ui/range";
import {useQuery} from "@tanstack/react-query";
import {getCategories} from "@app/http/api-calls";
import {Category} from "@app/types/category";
import {FilterOptions} from "@pages/menu/Menu";


interface IMenuFilter {
	filterOptions: FilterOptions
	setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
}

export const MenuFilter = ({ filterOptions, setFilterOptions }: IMenuFilter) => {
	const { data: categories, isLoading } = useQuery<Category[]>({
		queryKey: ["categories"],
		queryFn: () => getCategories(),
	})

	return (
		<Card className={styles.menuFilter}>
			<Input value={filterOptions.searchString}
			       onChange={(e) =>
				       setFilterOptions(prev =>
					       ({...prev, searchString: e.target.value, page: 1}))}
			       placeholder={'Search'}
			       iconName={'search'}
			       wrapClassName={styles.input}
			/>
			<Select options={categories?.map(category =>
				({id: category.id, title: category.categoryName})) || []}
			        selectedId={filterOptions.selectedCategoryId}
			        onChange={(option) =>
				        setFilterOptions(prev =>
					        ({...prev, selectedCategoryId: option ? option.id : null, page: 1}))}
			        wrapClassName={styles.select}
			        withClearButton={true}
			/>
			<Range value={filterOptions.sliderRange}
			       onChange={(value) =>
				       setFilterOptions(prev =>
					       ({...prev, sliderRange: value, page: 1}))}
			       minMax={[0,5]}
			       minDistance={0.1}
			       step={0.1}
			       className={styles.range}
			       label={'Rating range'}
			/>
		</Card>
	);
};