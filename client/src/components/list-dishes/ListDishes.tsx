import styles from './ListDishes.module.scss'
import {ItemDish} from "@components/item-dish";
import React, {useState} from "react";
import {Dish} from "@app/types/dish";
import {ModalOrder} from "@components/modals/modal-order/ModalOrder";

interface IListDishes {
	dishes: Dish[] | undefined
}

export const ListDishes = ({ dishes }: IListDishes) => {

	const [orderModal, setOrderModal] =
		useState<{isOpened: false} | {isOpened: true, dishId: number}>({ isOpened: false })

	return (
		<div className={styles.listDishes}>
			{ dishes?.map((dish) => (
				<ItemDish image={dish.imageLink}
				          title={dish.title}
				          caption={dish.servedWith}
				          body={dish.composition}
				          votesTotal={dish.votesTotal}
				          votesAverage={dish.votesAverage}
				          key={dish.id}
				          onOrderClick={() => setOrderModal({isOpened: true, dishId: dish.id})}
				/>
			))}

			{ orderModal.isOpened
				? <ModalOrder closeOnEsc
				              closeOnOutsideClick
				              onClose={() => setOrderModal({ isOpened: false })}
				              dishId={orderModal.dishId}
				/>
				: null }
		</div>
	);
};