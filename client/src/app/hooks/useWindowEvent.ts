import {useEffect, useRef} from "react";

export function useWindowEvent<K extends keyof WindowEventMap>(
	type: K,
	callback: (event: WindowEventMap[K]) => void,
	options?: AddEventListenerOptions
) {
	const ref = useRef(callback)
	ref.current = callback

	useEffect(() => {
		const listener = (event: WindowEventMap[K]) => ref.current(event)

		window.addEventListener(type, listener, options)

		return () => {
			window.removeEventListener(type, listener, options)
		}
	}, [])
}