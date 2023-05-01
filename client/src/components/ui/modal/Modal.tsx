import styles from './Modal.module.scss'
import { Portal } from 'react-portal';
import React from "react";
import {useWindowEvent} from "@app/hooks/useWindowEvent";

export interface IModal {
	children?: React.ReactNode
	onClose?: () => void
	closeOnEsc?: boolean
	closeOnOutsideClick?: boolean
}

export const Modal = ({
	children,
	onClose,
	closeOnEsc,
	closeOnOutsideClick
}: IModal) => {

	useWindowEvent('keydown', (e) => {
		if (e.key === 'Escape' && closeOnEsc)
			onClose?.()
	})

	return (
		<Portal>
			<div className={styles.modal}>
				<div className={styles.modalBackground} onClick={closeOnOutsideClick ? onClose : undefined} />
				<div className={styles.modalContent}>
					{ children }
				</div>
			</div>
		</Portal>
	);
};