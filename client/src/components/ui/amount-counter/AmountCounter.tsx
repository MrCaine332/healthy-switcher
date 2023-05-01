import styles from './AmountCounter.module.scss'
import Icons from "@components/ui/icons";

interface IAmountCounter {
	onMinus: () => void
	currentAmount: number
	onPlus: () => void
}

export const AmountCounter = ({onMinus, currentAmount, onPlus}: IAmountCounter) => {
	return (
		<div className={styles.amountCounter}>
			<button onClick={onMinus}>
				<Icons name={'minus'} size={30} />
			</button>
			<p className={'textNavItem'}>{currentAmount}</p>
			<button onClick={onPlus}>
				<Icons name={'plus'} size={30} />
			</button>
		</div>
	);
};