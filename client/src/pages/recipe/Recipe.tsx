import styles from './Recipe.module.scss'
import {SectionTitle} from "@components/section-title";
import {useQuery} from "@tanstack/react-query";
import {RecipesSingleDto} from "@app/types/dtos";
import {getRecipeById} from "@app/http/api-calls";

export const Recipe = () => {
	const {data: recipe, isLoading} = useQuery<RecipesSingleDto>({
		queryKey: ["recipe", 6],
		queryFn: () => getRecipeById(6),
		onSuccess: (data) => console.log(data)
	})

	return (
		<div className={styles.recipe}>
			<SectionTitle primaryTitle={'RECIPE'} />
		</div>
	);
};