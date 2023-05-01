import styles from './Menu.module.scss'
import {useState} from "react";
import {MenuFilter} from "@modules/menu-modules/menu-filter";
import {SectionTitle} from "@components/section-title";
import {Divider} from "@components/ui/divider";
import {useQuery} from "@tanstack/react-query";
import {getDishes} from "@app/http/api-calls";
import {ListDishes} from "@components/list-dishes/ListDishes";
import {useDebounceEffect} from "@app/hooks/useDebounce";
import {Pagination} from "@components/ui/pagination";
import {DishesDto} from "@app/types/dtos";

export type FilterOptions = {
	page: number
	searchString: string
	selectedCategoryId: number | null
	sliderRange: [number, number]
}

const ITEMS_PER_PAGE = 12

export const Menu = () => {
	const [filterOptions, setFilterOptions] = useState<FilterOptions>({
		page: 1,
		searchString: '',
		selectedCategoryId: null,
		sliderRange: [0, 5]
	})

	const { data: dishes, isLoading, refetch } = useQuery<DishesDto>({
		queryKey: ["dishes"],
		queryFn: () => getDishes({
			page: filterOptions.page,
			amount: ITEMS_PER_PAGE,
			title: filterOptions.searchString ?? undefined,
			categoryId: filterOptions.selectedCategoryId ?? undefined,
			ratingMin: filterOptions.sliderRange[0],
			ratingMax: filterOptions.sliderRange[1]
		}),
	})

	useDebounceEffect(() => {
		refetch()
	}, [filterOptions], 500)

	return (
		<div className={'page'}>
			<SectionTitle primaryTitle={"MENU"}
			              secondaryTitle={"Only delicious things"}
			              withUnderline={false}
			/>
			<MenuFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />
			<Divider className={styles.divider} />
			<ListDishes dishes={dishes?.dishes} />

			{
				dishes &&
				<>
					{ dishes.count > ITEMS_PER_PAGE
						&& <Divider className={styles.divider} /> }
                    <Pagination pageCount={dishes.count <= ITEMS_PER_PAGE
									? 0
									: Math.ceil(dishes.count / ITEMS_PER_PAGE) }
                                forcePage={filterOptions.page - 1}
                                onPageChange={(selected) => setFilterOptions(prev =>
						            ({...prev, page: selected.selected + 1}))}
                    />
				</>
			}
		</div>
	);
};