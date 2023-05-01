import React, {useEffect, useMemo, useRef, useState} from 'react';
import styles from './Select.module.scss'
import Icons from "@components/ui/icons";
import {useWindowEvent} from "@app/hooks/useWindowEvent";

export type Option = {
	id: number
	title: string
}

interface ISelect {
	options: Option[]
	onChange: (option: Option | null) => void,
	selectedId?: number | null,
	wrapClassName?: string
	withClearButton?: boolean
}

export const Select = ({
	options,
	selectedId = null,
	onChange,
	wrapClassName,
	withClearButton = false
}: ISelect) => {
	const [opened, setOpened] = useState<boolean>(false)
	const [highlightedIndex, setHighlightedIndex] = useState(0)

	const wrapRef = useRef<HTMLDivElement>(null)
	const listRef = useRef<HTMLDivElement>(null)

	const selectedOption = useMemo(() => {
		return options.find(o => o.id === selectedId)
	}, [selectedId])

	const toggleDropdown = () => { setOpened(prevState => !prevState) }

	useWindowEvent('click', (e: MouseEvent) => {
		if (!wrapRef.current?.contains(e.target as Node))
			setOpened(false)
	})

	useWindowEvent('keydown', (e: KeyboardEvent) => {
		if (e.target !== wrapRef.current) return
		switch (e.code) {
			case "Enter":
				if (!opened){
					setOpened(prevState => !prevState)
					break
				}
				onChange(options[highlightedIndex])
				setOpened(prevState => !prevState)
				break
			case "Space":
				setOpened(prevState => !prevState)
				break
			case "ArrowUp":
				e.preventDefault()
				if (highlightedIndex === 0)
					break
				setHighlightedIndex(prevState => prevState - 1)
				break
			case "ArrowDown":
				e.preventDefault()
				if (highlightedIndex === options.length - 1)
					break
				setHighlightedIndex(prevState => prevState + 1)
				break
			case "Escape":
			case "Tab":
				if (opened) {
					setOpened(prevState => !prevState)
				}
				break
		}
	})

	useEffect(() => {
		setHighlightedIndex(0)
	}, [opened])

	return (
		<div className={[styles.selectWrap, wrapClassName].join(' ')}
		     onClick={toggleDropdown}
		     tabIndex={0}
		     ref={wrapRef}
		>
			<div className={'textNavItem ' + styles.selectedItem}>
				{ selectedOption?.title ?? '' }
			</div>

			<div className={styles.selectUtils}>
				{ selectedId !== null && withClearButton
					? <>
						<button className={styles.closeButton} onClick={() => onChange(null)}>
							<Icons name={'close'} size={20} />
						</button>
						<hr className={styles.line} />
					</>
					: null
				}
				<Icons name={'arrow-down-simple'} size={24} />
			</div>

			{ opened &&
                <div className={styles.selectList} ref={listRef}>
                    <ul className={styles.selectItems}>
						{ options.map((option, index) => (
							<li key={option.id}
							    onClick={() => onChange(option)}
							    onMouseEnter={() => setHighlightedIndex(index)}
							    className={[
									'textNavItem',
									styles.selectItem,
								    (selectedOption && selectedOption.id === option.id)
									    ? styles.selectItem_selected
									    : '',
								    highlightedIndex === index ? styles.selectItem_highlighted : ''
							    ].join(' ')}
							>
								{ option.title }
							</li>
						))}
                    </ul>
                </div>
			}
		</div>
	);
};