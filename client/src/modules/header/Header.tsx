import React, {useRef} from 'react';
import styles from './Header.module.scss'
import {useWindowEvent} from "@app/hooks/useWindowEvent";
import logo from "@assets/images/logo.png"
import {Logo} from "@components/ui/logo";
import {Navbar} from "@components/navbar";

export const Header = () => {
	const headerRef = useRef<HTMLDivElement>(null)

	useWindowEvent('scroll', () => {
		if (window.scrollY > 0) {
			headerRef.current?.classList.add(styles.headerSmall)
		} else {
			headerRef.current?.classList.remove(styles.headerSmall)
		}
	})

	return (
		<header ref={headerRef} className={styles.header}>
			<div className={"container " + styles.headerContent}>
				<Logo />
				<Navbar />
			</div>
		</header>
	);
};