import React from 'react';
import styles from './Footer.module.scss'
import {Contacts} from "@components/contacts";
import {Logo} from "@components/ui/logo";

export const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={"container"}>
				<Contacts />
			</div>
			<hr className={styles.separator}/>
			<div className={"container " + styles.footerBottom}>
				<Logo />
				<p className={"textCaptionSmall " + styles.copyright}>
					© Designed by Yellow Snow. All Rights Reserved.
				</p>
			</div>
		</footer>
	);
};
