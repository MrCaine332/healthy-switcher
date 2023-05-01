import styles from './ModalOrder.module.scss'
import {IModal, Modal} from "@components/ui/modal/Modal";
import {useQuery} from "@tanstack/react-query";
import {getDishById} from "@app/http/api-calls";
import {Card} from "@components/ui/card";
import {Dish} from "@app/types/dish";
import {Divider} from "@components/ui/divider";
import {AmountCounter} from "@components/ui/amount-counter/AmountCounter";
import {useState} from "react";
import {Button} from "@components/ui/button";

interface IModalOrder extends Omit<IModal, "children"> {
	dishId: number
}

export const ModalOrder = ({
	onClose,
	closeOnEsc,
	closeOnOutsideClick,
	dishId
}: IModalOrder) => {
	const { data: dish, isLoading } = useQuery<Dish>({
		queryKey: ["dishes", dishId ],
		queryFn: () => getDishById(dishId),
	})

	const [amountOfItems, setAmountOfItems] = useState(1)

	const onMinus = () => {
		if (amountOfItems <= 1) return
		setAmountOfItems(prev => prev - 1)
	}

	const onAddItems = () => {
		onClose?.()
	}

	return (
		<Modal onClose={onClose} closeOnEsc={closeOnEsc} closeOnOutsideClick={closeOnOutsideClick}>
			<Card className={styles.modalOrder}>
				{ dish && <>
                    <div className={styles.modalOrderImage}>
                        <img src={dish.imageLink ?? undefined} alt=""/>
                    </div>
					<div className={styles.modalOrderDetails}>
						<h3>{dish.title}</h3>
						<p className={'textCaptionSmall'}>{dish.servedWith}</p>
						<Divider />
						<p className={'textBodySmall'}>{dish.composition}</p>
						<div className={styles.modalOrderControls}>
							<AmountCounter onMinus={onMinus}
							               onPlus={() => setAmountOfItems(prev => prev + 1)}
							               currentAmount={amountOfItems}
							/>
							<p className={'textNavItem'}>{(dish.basePrice * amountOfItems).toFixed(2)}</p>
							<Button style={'filled'} className={styles.addButton} onClick={onAddItems}>
								Add
							</Button>
						</div>
					</div>
				</>}
			</Card>
		</Modal>
	);
};