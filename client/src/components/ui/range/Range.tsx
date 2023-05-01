import styles from './Range.module.scss'
import ReactSlider from "react-slider";
import React from "react";

interface IRange {
	value: [number, number]
	onChange?: ((value: [number, number], index: number) => void) | undefined
	minMax?: [number, number]
	step?: number,
	minDistance?: number
	className?: string
	wrapClassName?: string
	label?: string
	centered?: boolean
}

export const Range = ({
	className,
	wrapClassName,
	minMax,
	value,
	step,
	minDistance,
	onChange,
	label,
	centered = false
}: IRange) => {

	return (
		<div className={[
				styles.rangeWrap,
				wrapClassName,
				centered ? styles.rangeWrap_centered : '',
			].join(' ')}>
			{ label ? <p className={'textNavItem'}>{ label }</p> : null }
			<ReactSlider
				className={['textNavItem', styles.range, className].join(' ')}
				thumbClassName={styles.rangeThumb}
				trackClassName={styles.rangeTrack}
				ariaLabel={['Lower thumb', 'Upper thumb']}
				ariaValuetext={state => `Thumb value ${state.valueNow}`}
				renderThumb={(props, state) =>
					<div {...props}>
						<div className={styles.rangeThumbValue}>
							{state.valueNow}
						</div>
					</div>}
				pearling
				step={step}
				minDistance={minDistance}
				value={value}
				min={minMax && minMax[0]}
				max={minMax && minMax[1]}
				onChange={onChange}
			/>
		</div>
	);
};