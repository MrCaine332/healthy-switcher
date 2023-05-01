import React from 'react';
import styles from './Contacts.module.scss'
import {ContactsItem} from "@components/contacts/contacts-item";



export const Contacts = () => {
	return (
		<div className={styles.contacts}>
			<ContactsItem icon={"clock"}
			              bodyText={"Today 10:00 am - 7:00 pm"}
			              captionText={"Working hours"} />
			<ContactsItem icon={"location-arrow"}
			              bodyText={"Velyka Vasylkivska 100"}
			              captionText={"Get Directions"} />
			<ContactsItem icon={"phone"}
			              bodyText={"+38 (063)833 24 15"}
			              captionText={"Call Online"} />
		</div>
	);
};
