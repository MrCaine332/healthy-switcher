import styles from './Recipe.module.scss'
import {IRecipe} from "@components/item-recipe/RecipeBig";
import Icons from "@components/ui/icons";
import {Badge} from "@components/ui/badge";


export const RecipeSmall = ({
	backgroundImage,
	badge,
	date,
	title,
	views,
	comments,
	className
}: IRecipe) => {
	return (
		<div className={styles.itemRecipe + ' ' + styles.itemRecipeSmall + ' ' + className}
		     style={{
			     backgroundImage: backgroundImage
				     ? `linear-gradient(180deg, rgba(26, 26, 26, 0.0001) 0%, #1A1A1A 110%), url(${backgroundImage})`
				     : 'none'
		     }}>
			<p className={"textBodyLarge " + styles.itemRecipeSmallTitle}>
				{ title }
			</p>
			<div className={styles.itemRecipeSmallBottom}>
				<div className={styles.itemRecipeSmallInfo}>
					<Badge text={badge} />
					<p className={"textCaptionSmall"}>{ date }</p>
				</div>
				<div className={styles.itemRecipeMetrics}>
					<div className={styles.itemRecipeMetricsItem}>
						<Icons name={"eye"} size={24}/>
						<p>{ views }</p>
					</div>
					<div className={styles.itemRecipeMetricsItem}>
						<Icons name={"comment"} size={24}/>
						<p>{ comments }</p>
					</div>
				</div>
			</div>

		</div>
	);
};