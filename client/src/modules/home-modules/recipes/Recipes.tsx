import React from 'react';
import styles from './Recipes.module.scss'
import {SectionTitle} from "@components/section-title";
import {RecipeBig, RecipeSmall} from "@components/item-recipe";

import recipeImageLarge from "@assets/images/recipeImageLarge.jpg"
import recipeImageSmall from "@assets/images/recipeImageSmall.jpg"

export const Recipes = () => {
	return (
		<div className={styles.homeRecipes}>
			<SectionTitle primaryTitle={"RECIPES"}
			              secondaryTitle={"Recipes From Our Chefs"} />
			<div className={styles.homeRecipesList}>
				<RecipeBig backgroundImage={recipeImageLarge}
				           badge={"BREAKFAST"}
				           date={"05 Jul 2016"}
				           title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
				           chefName={"Jason Keller"}
				           views={275}
				           comments={12}
				/>
				<RecipeSmall backgroundImage={null}
				             badge={"LUNCH"}
				             date={"07 Jan 2016"}
				             title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"}
				             chefName={""}
				             views={326}
				             comments={9}
				/>
				<RecipeSmall backgroundImage={recipeImageSmall}
				             badge={"LUNCH"}
				             date={"07 Jan 2016"}
				             title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"}
				             chefName={""}
				             views={597}
				             comments={29}
				/>
				<RecipeSmall backgroundImage={null}
				             badge={"LUNCH"}
				             date={"07 Jan 2016"}
				             title={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"}
				             chefName={""}
				             views={112}
				             comments={7}
				             className={styles.homeRecipeAlternative}
				/>
			</div>
		</div>
	);
};
