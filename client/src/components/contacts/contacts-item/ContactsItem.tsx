import React from 'react';
import styles from './ContactsItem.module.scss'
import Icons from "@components/ui/icons";
import {IconNames} from "@components/ui/icons/Icons";

interface IContactItem {
	icon: IconNames,
	bodyText: string,
	captionText: string
}

export const ContactsItem = ({ icon, bodyText, captionText }: IContactItem) => {
	return (
		<div className={styles.contactsItem}>
			<div className={styles.contactIcon}>
				<Icons name={icon} size={26} />
			</div>
			<p className={'textBodyLarge ' + styles.contactBody}>
				{ bodyText }
			</p>
			<p className={'textCaptionLarge ' + styles.contactCaption}>
				{ captionText }
			</p>
		</div>
	);
};