import styles from './Recipes.module.scss'
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import {RecipesManyDto} from "@app/types/dtos";
import {getRecipes} from "@app/http/api-calls";
import {useDebounceEffect} from "@app/hooks/useDebounce";
import {SectionTitle} from "@components/section-title";
import {RecipeBig, RecipeSmall} from "@components/item-recipe";
import {transformArrayFromFlatToNested, transformIsoStringToNormalDate} from "@app/utils/utils";
import {Divider} from "@components/ui/divider";
import {Pagination} from "@components/ui/pagination";
import {RecipeFilter} from "@modules/recipes-modules/recipe-filter";


export type FilterOptions = {
	page: number
	titleString: string
	badgeString: string
	publishedAgo: { id: number, time: string | null }
}

const ITEMS_PER_PAGE = 12

export const Recipes = () => {
	const [filterOptions, setFilterOptions] = useState<FilterOptions>({
		page: 1,
		titleString: '',
		badgeString: '',
		publishedAgo: {id: 1, time: null},
	})

	const {data: recipes, isLoading, refetch} = useQuery<RecipesManyDto>({
		queryKey: ["recipes"],
		queryFn: () => getRecipes({
			page: filterOptions.page,
			amount: ITEMS_PER_PAGE,
			title: filterOptions.titleString,
			badge: filterOptions.badgeString,
			timeFrom: filterOptions.publishedAgo.time ?? undefined
		}),
	})

	useDebounceEffect(() => {
		refetch()
	}, [filterOptions], 500)

	return (
		<div className={'page'}>
			<SectionTitle primaryTitle={"RECIPES"}
			              secondaryTitle={'Find your meal'}
			              withUnderline={false}
			/>

			<RecipeFilter filterOptions={filterOptions} setFilterOptions={setFilterOptions} />

			<Divider className={styles.divider} />

			<div className={styles.recipesList}>
				{ !isLoading && recipes && transformArrayFromFlatToNested(recipes.recipes, 4)
					.map((arrayOfRecipes, index) => (
						<div key={index}
						     className={[
								 styles.recipesGroup,
							     index + 1 % 2 === 0 ? styles.recipesGroup_Reversed : ''
						     ].join(' ')}
						>
							{ arrayOfRecipes.map((recipe, index) => (
								index === 0
									? <RecipeBig key={recipe.id}
									             backgroundImage={recipe.imageLink}
									             badge={recipe.badge}
									             date={transformIsoStringToNormalDate(recipe.publishedAt)}
									             title={recipe.recipeTitle}
									             chefName={recipe.author}
									             views={recipe.viewsNum}
									             comments={recipe.commentsNum}
									             className={styles.recipeBigArea} />
									: <RecipeSmall key={recipe.id}
									               backgroundImage={recipe.imageLink}
									               badge={recipe.badge}
									               date={transformIsoStringToNormalDate(recipe.publishedAt)}
									               title={recipe.recipeTitle}
									               chefName={recipe.author}
									               views={recipe.viewsNum}
									               comments={recipe.commentsNum}
									/>
							))}
						</div>
					)) }

				{
					recipes &&
                    <>
						{ recipes.count > ITEMS_PER_PAGE
							&& <Divider className={styles.divider} /> }
                        <Pagination pageCount={recipes.count <= ITEMS_PER_PAGE
							? 0
							: Math.ceil(recipes.count / ITEMS_PER_PAGE) }
                                    forcePage={filterOptions.page - 1}
                                    onPageChange={(selected) => setFilterOptions(prev =>
							            ({...prev, page: selected.selected + 1}))}
                        />
                    </>
				}
			</div>
		</div>
	);
};