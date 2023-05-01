import React from 'react';
import styles from './ItemDish.module.scss'
import {Button} from "@components/ui/button";
import {Card} from "@components/ui/card";
import {Rating} from "@components/ui/rating/Rating";

interface IDishCard {
	image: any
	title: string
	caption: string
	body: string
	votesTotal: number
	votesAverage: number | null
	onOrderClick: () => void
}

export const ItemDish = ({ image, title, caption, body, votesTotal, votesAverage, onOrderClick }: IDishCard) => {

	return (
		<Card className={styles.itemDish}>
			<div className={styles.image}>
				<img src={image} alt=""/>
			</div>
			<div className={styles.dishCardBody}>
				<h3>{ title }</h3>
				<p className={"textCaptionSmall " + styles.bodyCaption}>
					{ caption }
				</p>
				<p className={"textBodySmall " + styles.bodyText}>
					{ body }
				</p>
				<div className={styles.bodyBottom}>
					<Rating votesAverage={votesAverage ?? 0} votesTotal={votesTotal} />
					<Button style={"outlined"}
					        className={styles.dishCardButton}
					        onClick={onOrderClick}>
						ORDER
					</Button>
				</div>
			</div>
		</Card>
	);
};