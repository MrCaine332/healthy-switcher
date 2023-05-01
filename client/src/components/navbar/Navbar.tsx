import React, {useRef, useState} from 'react';
import styles from './Navbar.module.scss'
import {NavLink} from "react-router-dom";
import {useWindowEvent} from "@app/hooks/useWindowEvent";


const links = [
	{ to: '/home', title: 'Home' },
	{ to: '/menu', title: 'Menu' },
	{ to: '/recipes', title: 'Recipes' },
	// { to: '/chefs', title: 'Chefs' },
	// { to: '/contacts', title: 'Contacts' },
]


export const Navbar = () => {
	const [isNavbarMobileToggled, setIsNavbarMobileToggled] = useState<boolean>(false)
	const navbarMobileWrapRef = useRef<HTMLDivElement>(null)

	useWindowEvent('scroll', () => {
		if (window.scrollY > 0) {
			navbarMobileWrapRef.current?.classList.add(styles.navbarMobileListWrap_moved)
		} else {
			navbarMobileWrapRef.current?.classList.remove(styles.navbarMobileListWrap_moved)
		}
	})

	return (
		<>
			<nav className={styles.navbar}>
				<ul className={styles.navbarList}>
					{ links.map((link, index) => (
						<li key={index}>
							<NavLink to={link.to}
							         className={({isActive}) =>
								         (isActive
									         ? styles.navbarItem + ' ' + styles.navbarItemActive
									         : styles.navbarItem)}
							>
								{ link.title }
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<nav className={styles.navbarMobile}>
				<button className={styles.navbarMobileToggler}
				        onClick={() => setIsNavbarMobileToggled(prev => !prev)}>
					<div />
				</button>
				{ isNavbarMobileToggled
					? <div ref={navbarMobileWrapRef} className={styles.navbarMobileListWrap}>
						<ul className={styles.navbarMobileList}>
							{ links.map((link, index) => (
								<li key={index}>
									<NavLink to={link.to}
									         onClick={() => setIsNavbarMobileToggled(false)}
									         className={({isActive}) =>
										         (isActive
											         ? styles.navbarItem + ' ' + styles.navbarItemActive
											         : styles.navbarItem)}
									>
										{ link.title }
									</NavLink>
								</li>
							))}
						</ul>
					</div>
					: null
				}
			</nav>
		</>
	);
};