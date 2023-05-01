import React from 'react';
import {Divider} from "@components/ui/divider";
import styles from './ItemWork.module.scss'
import {Card} from "@components/ui/card";

interface ICard {
	title?: string
	children?: React.ReactNode
}

export const ItemWork = ({ title, children }: ICard) => {
	return (
		<Card className={styles.itemWork}>
			<h4 className={styles.title}>{ title }</h4>
			<Divider className={styles.divider} />
			<p className={"textBodySmall " + styles.body}>
				{ children }
			</p>
		</Card>
	);
};