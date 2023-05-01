import styles from './Recipe.module.scss'
import {Badge} from "@components/ui/badge";
import Icons from "@components/ui/icons";

export interface IRecipe {
	backgroundImage: any
	badge: string
	date: string
	title: string
	chefName: string
	views: number
	comments: number
	className?: string
}

export const RecipeBig = ({
    backgroundImage,
    badge,
    date,
	title,
	chefName,
	views,
	comments,
	className
  }: IRecipe) => {
	return (
		<div className={styles.itemRecipe + ' ' + styles.itemRecipeBig + ' ' + className}
		     style={{
				 backgroundImage: backgroundImage
					 ? `linear-gradient(180deg, rgba(26, 26, 26, 0.0001) 0%, #1A1A1A 110%), url(${backgroundImage})`
					 : 'none'
			}}>
			<div className={styles.itemRecipeBigInfo}>
				<Badge text={badge}/>
				<p className={'textCaptionLarge'}>
					{ date }
				</p>
				<h4>
					{ title }
				</h4>
				<p className={'textCaptionLarge'}>
					{ chefName }
				</p>
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